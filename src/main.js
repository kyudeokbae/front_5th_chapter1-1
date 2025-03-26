import { getHtmlByPath } from "./router";

const renderApp = () => {
  const root = document.getElementById("root");
  root.innerHTML = getHtmlByPath();
};

renderApp();

window.addEventListener("popstate", renderApp);
window.addEventListener("hashchange", renderApp);
