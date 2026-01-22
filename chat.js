import { SCHEMAS } from "./schemas.js";

const AI_PROXY_BASE = "https://surudmahajan12-mathproxy.hf.space";
const BACKEND_BASE = "https://surudmahajan12-mathback.hf.space";
const VISUALS_ORIGIN = "https://ovisual.netlify.app";

export async function sendMessage() {
  const inputEl = document.getElementById("userInput");
  const statusEl = document.getElementById("status");
  const outputEl = document.getElementById("output");
  const formEl = document.getElementById("form");

  const message = inputEl.value.trim();
  if (!message) return;

  statusEl.textContent = "Understanding your request…";
  outputEl.textContent = "";
  formEl.innerHTML = "";

  const intent = await postJSON(`${AI_PROXY_BASE}/classify`, { message });

  if (intent.mode === "explain_concept") {
    statusEl.textContent = "Explaining concept…";
    const res = await postJSON(`${AI_PROXY_BASE}/explain`, { message });
    outputEl.textContent = res.explanation;
    statusEl.textContent = "Done";
    return;
  }

  if (intent.mode === "calculate") {
    const key = `${intent.domain}:${intent.operation}`;
    const schema = SCHEMAS[key];

    if (!schema) {
      statusEl.textContent = "No input form available";
      return;
    }

    statusEl.textContent = `Provide inputs for ${schema.title}`;
    renderForm(schema, async payload => {
      statusEl.textContent = "Computing result…";

      const result = await callBackend(
        intent.endpoint,
        intent.method,
        payload
      );
      const iframe = document.getElementById("visuals-iframe");

if (iframe && iframe.contentWindow) {
  iframe.contentWindow.postMessage(
    {
      type: "ENGINE_RESULT",
      payload: {
        domain: "math",
        data: result
      }
    },
    VISUALS_ORIGIN
  );
}

      statusEl.textContent = "Explaining solution…";

      const explanation = await postJSON(`${AI_PROXY_BASE}/explain`, {
        message,
        backend_result: result
      });

      outputEl.innerHTML = `
<b>FINAL ANSWER</b>
${formatResult(result)}

<b>CONCEPTUAL STEPS</b>
${formatSteps(explanation.explanation)}
      `;

      statusEl.textContent = "Done";
    });
  }
}

function renderForm(schema, onSubmit) {
  const formEl = document.getElementById("form");
  formEl.innerHTML = `<h3>${schema.title}</h3>`;

  schema.fields.forEach(f => {
    const id = `field_${f.name}`;
    formEl.innerHTML += `
      <label>${f.label}</label>
      ${
        f.type === "multiline"
          ? `<textarea id="${id}"></textarea>`
          : `<input type="${f.type}" id="${id}" />`
      }
    `;
  });

  const btn = document.createElement("button");
  btn.textContent = "Solve";

  btn.onclick = () => {
    const payload = {};

    schema.fields.forEach(f => {
      const el = document.getElementById(`field_${f.name}`);
      let val = el.value.trim();

      if (f.type === "multiline") {
        val = val
          .split("\n")
          .filter(x => x.trim())
          .map(r => r.split(",").map(Number));
      }

      if (f.type === "text" && val.includes(",")) {
        val = val.split(",").map(x => x.trim());
      }

      if (f.type === "number") {
        val = Number(val);
      }

      payload[f.name] = val;
    });

    onSubmit(payload);
  };

  formEl.appendChild(btn);
}

function formatResult(result) {
  if (Array.isArray(result)) {
    return result.map(r => JSON.stringify(r)).join("<br>");
  }

  if (typeof result === "object") {
    return Object.entries(result)
      .map(([k, v]) => `• ${k}: ${JSON.stringify(v)}`)
      .join("<br>");
  }

  return result;
}

function formatSteps(text) {
  return text
    .split("\n")
    .filter(l => l.trim())
    .map(l => `• ${l}`)
    .join("<br>");
}

async function postJSON(url, body) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  return await res.json();
}

async function callBackend(endpoint, method, payload) {
  const res = await fetch(`${BACKEND_BASE}${endpoint}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return await res.json();
}
