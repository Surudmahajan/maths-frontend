export const SCHEMAS = {



  "algebra:types": {
    title: "Types of Matrices",
    fields: [
      { name: "matrix", label: "Matrix (rows comma-separated, one row per line)", type: "multiline" }
    ]
  },

  "algebra:rank": {
    title: "Rank of a Matrix",
    fields: [
      { name: "matrix", label: "Matrix (one row per line, comma separated)", type: "multiline" }
    ]
  },

  "algebra:echelon-form": {
    title: "Row Echelon Form",
    fields: [
      { name: "matrix", label: "Matrix", type: "multiline" }
    ]
  },

  "algebra:normal-form": {
    title: "Normal Form (RREF)",
    fields: [
      { name: "matrix", label: "Matrix", type: "multiline" }
    ]
  },

  "algebra:solve-system": {
    title: "Solve System of Linear Equations",
    fields: [
      { name: "A", label: "Coefficient Matrix A", type: "multiline" },
      { name: "b", label: "Constant Vector b (comma separated)", type: "text" }
    ]
  },

  "algebra:linear-independence": {
    title: "Linear Independence of Vectors",
    fields: [
      { name: "vectors", label: "Vectors (one vector per line, comma separated)", type: "multiline" }
    ]
  },

  

  "complex:polar-form": {
    title: "Complex Number – Polar Form",
    fields: [
      { name: "real", label: "Real Part", type: "number" },
      { name: "imag", label: "Imaginary Part", type: "number" }
    ]
  },

  "complex:de-moivre": {
    title: "De Moivre’s Theorem",
    fields: [
      { name: "r", label: "Modulus r", type: "number" },
      { name: "theta", label: "Angle θ (degrees)", type: "number" },
      { name: "n", label: "Power n", type: "number" }
    ]
  },

  "complex:power": {
    title: "Power of a Complex Number",
    fields: [
      { name: "real", label: "Real Part", type: "number" },
      { name: "imag", label: "Imaginary Part", type: "number" },
      { name: "n", label: "Power n", type: "number" }
    ]
  },

  "complex:roots": {
    title: "Roots of a Complex Number",
    fields: [
      { name: "real", label: "Real Part", type: "number" },
      { name: "imag", label: "Imaginary Part", type: "number" },
      { name: "n", label: "Root Order n", type: "number" }
    ]
  },

  "complex:logarithm": {
    title: "Logarithm of Complex Number",
    fields: [
      { name: "real", label: "Real Part", type: "number" },
      { name: "imag", label: "Imaginary Part", type: "number" }
    ]
  },

  "complex:hyperbolic": {
    title: "Hyperbolic Functions",
    fields: [
      { name: "function", label: "Function (sinh, cosh, tanh)", type: "text" },
      { name: "value", label: "Value", type: "number" }
    ]
  },

  "complex:inverse-hyperbolic": {
    title: "Inverse Hyperbolic Functions",
    fields: [
      { name: "function", label: "Function (asinh, acosh, atanh)", type: "text" },
      { name: "value", label: "Value", type: "number" }
    ]
  },

  "complex:separate": {
    title: "Separate Real and Imaginary Parts",
    fields: [
      { name: "expression", label: "Complex Expression", type: "text" }
    ]
  },

  "complex:sin-power": {
    title: "Expansion of sinⁿθ",
    fields: [
      { name: "n", label: "Power n", type: "number" }
    ]
  },

  "complex:cos-power": {
    title: "Expansion of cosⁿθ",
    fields: [
      { name: "n", label: "Power n", type: "number" }
    ]
  },

  

  "calculus:maclaurin": {
    title: "Maclaurin Series",
    fields: [
      { name: "function", label: "Function f(x)", type: "text" },
      { name: "terms", label: "Number of Terms", type: "number" }
    ]
  },

  "calculus:taylor": {
    title: "Taylor Series",
    fields: [
      { name: "function", label: "Function f(x)", type: "text" },
      { name: "a", label: "Expansion Point a", type: "number" },
      { name: "terms", label: "Number of Terms", type: "number" }
    ]
  },

  

  "partial:first-order": {
    title: "First Order Partial Derivatives",
    fields: [
      { name: "function", label: "Function f(x,y)", type: "text" }
    ]
  },

  "partial:second-order": {
    title: "Second Order Partial Derivatives",
    fields: [
      { name: "function", label: "Function f(x,y)", type: "text" }
    ]
  },

  "partial:euler-2var": {
    title: "Euler’s Theorem (2 Variables)",
    fields: [
      { name: "function", label: "Homogeneous Function", type: "text" }
    ]
  },

  "partial:euler-3var": {
    title: "Euler’s Theorem (3 Variables)",
    fields: [
      { name: "function", label: "Homogeneous Function", type: "text" }
    ]
  },

  "partial:maxima-minima": {
    title: "Maxima and Minima (Two Variables)",
    fields: [
      { name: "function", label: "Function f(x,y)", type: "text" }
    ]
  },

  

  "successive:nth-derivative": {
    title: "Nth Derivative",
    fields: [
      { name: "function", label: "Function f(x)", type: "text" },
      { name: "n", label: "Order n", type: "number" }
    ]
  },

  "successive:leibniz": {
    title: "Leibniz Theorem",
    fields: [
      { name: "u", label: "Function u(x)", type: "text" },
      { name: "v", label: "Function v(x)", type: "text" },
      { name: "n", label: "Order n", type: "number" }
    ]
  },

 

  "numerical:newton-raphson": {
    title: "Newton–Raphson Method",
    fields: [
      { name: "function", label: "f(x)", type: "text" },
      { name: "derivative", label: "f'(x)", type: "text" },
      { name: "x0", label: "Initial Guess", type: "number" }
    ]
  },

  "numerical:gauss-seidel": {
    title: "Gauss–Seidel Method",
    fields: [
      { name: "A", label: "Coefficient Matrix A", type: "multiline" },
      { name: "b", label: "Constant Vector b (comma separated)", type: "text" }
    ]
  },

  "numerical:curve-fit-line": {
    title: "Curve Fitting – Straight Line",
    fields: [
      { name: "x", label: "x values (comma separated)", type: "text" },
      { name: "y", label: "y values (comma separated)", type: "text" }
    ]
  },

  "numerical:curve-fit-quadratic": {
    title: "Curve Fitting – Quadratic",
    fields: [
      { name: "x", label: "x values (comma separated)", type: "text" },
      { name: "y", label: "y values (comma separated)", type: "text" }
    ]
  },



  "de:first-order": {
    title: "First Order Differential Equation",
    fields: [
      { name: "equation", label: "dy/dx = f(x,y)", type: "text" }
    ]
  },

  "de:constant-coeff": {
    title: "Higher Order DE (Constant Coefficients)",
    fields: [
      { name: "equation", label: "Differential Equation", type: "text" }
    ]
  },

  "de:cauchy-euler": {
    title: "Cauchy–Euler Differential Equation",
    fields: [
      { name: "equation", label: "Differential Equation", type: "text" }
    ]
  },

=

  "special:beta": {
    title: "Beta Function",
    fields: [
      { name: "m", label: "m", type: "number" },
      { name: "n", label: "n", type: "number" }
    ]
  },

  "special:gamma": {
    title: "Gamma Function",
    fields: [
      { name: "n", label: "n", type: "number" }
    ]
  },

  "special:beta-gamma-relation": {
    title: "Beta–Gamma Relation",
    fields: [
      { name: "m", label: "m", type: "number" },
      { name: "n", label: "n", type: "number" }
    ]
  },

  "special:diff-under-integral": {
    title: "Differentiation Under Integral Sign",
    fields: [
      { name: "expression", label: "Integral Expression", type: "text" }
    ]
  },

  "special:rectification": {
    title: "Rectification of Curves",
    fields: [
      { name: "function", label: "Curve Equation", type: "text" },
      { name: "limits", label: "Limits (comma separated)", type: "text" }
    ]
  },

  =

  "integrals:double-cartesian": {
    title: "Double Integral (Cartesian)",
    fields: [
      { name: "integrand", label: "Integrand", type: "text" },
      { name: "limits", label: "Limits", type: "text" }
    ]
  },

  "integrals:double-polar": {
    title: "Double Integral (Polar)",
    fields: [
      { name: "integrand", label: "Integrand", type: "text" },
      { name: "limits", label: "Limits", type: "text" }
    ]
  },

  "integrals:triple-cartesian": {
    title: "Triple Integral (Cartesian)",
    fields: [
      { name: "integrand", label: "Integrand", type: "text" },
      { name: "limits", label: "Limits", type: "text" }
    ]
  },

  "integrals:triple-cylindrical": {
    title: "Triple Integral (Cylindrical)",
    fields: [
      { name: "integrand", label: "Integrand", type: "text" },
      { name: "limits", label: "Limits", type: "text" }
    ]
  },

  "integrals:triple-spherical": {
    title: "Triple Integral (Spherical)",
    fields: [
      { name: "integrand", label: "Integrand", type: "text" },
      { name: "limits", label: "Limits", type: "text" }
    ]
  },

 

  "applications:area": {
    title: "Area Using Double Integration",
    fields: [
      { name: "integrand", label: "Integrand", type: "text" },
      { name: "limits", label: "Limits", type: "text" }
    ]
  },

  "applications:volume": {
    title: "Volume Using Triple Integration",
    fields: [
      { name: "integrand", label: "Integrand", type: "text" },
      { name: "limits", label: "Limits", type: "text" }
    ]
  },



  "numerical-ode:euler": {
    title: "Euler Method",
    fields: [
      { name: "function", label: "dy/dx = f(x,y)", type: "text" },
      { name: "x0", label: "Initial x", type: "number" },
      { name: "y0", label: "Initial y", type: "number" },
      { name: "h", label: "Step Size h", type: "number" }
    ]
  },

  "numerical-ode:rk4": {
    title: "Runge–Kutta Method (4th Order)",
    fields: [
      { name: "function", label: "dy/dx = f(x,y)", type: "text" },
      { name: "x0", label: "Initial x", type: "number" },
      { name: "y0", label: "Initial y", type: "number" },
      { name: "h", label: "Step Size h", type: "number" }
    ]
  },

  "numerical-ode:trapezoidal": {
    title: "Trapezoidal Rule",
    fields: [
      { name: "function", label: "Function f(x)", type: "text" },
      { name: "a", label: "Lower Limit a", type: "number" },
      { name: "b", label: "Upper Limit b", type: "number" },
      { name: "n", label: "Subintervals n", type: "number" }
    ]
  },

  "numerical-ode:simpson-1-3": {
    title: "Simpson’s 1/3 Rule",
    fields: [
      { name: "function", label: "Function f(x)", type: "text" },
      { name: "a", label: "Lower Limit a", type: "number" },
      { name: "b", label: "Upper Limit b", type: "number" },
      { name: "n", label: "Even Subintervals n", type: "number" }
    ]
  },

  "numerical-ode:simpson-3-8": {
    title: "Simpson’s 3/8 Rule",
    fields: [
      { name: "function", label: "Function f(x)", type: "text" },
      { name: "a", label: "Lower Limit a", type: "number" },
      { name: "b", label: "Upper Limit b", type: "number" },
      { name: "n", label: "Multiple of 3 Subintervals n", type: "number" }
    ]
  }

};
