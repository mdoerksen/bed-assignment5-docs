window.onload = () => {
  window.ui = SwaggerUIBundle({
    url: "openapi.json",
    dom_id: "#swagger-ui",
  });
};
