import { ErrorPage, MainPage, ProfilePage, LoginPage } from "./containers";
import { getStoreValue } from "./utils/local-storage";

const App = () => {
  const path = window.location.pathname;

  switch (path) {
    case "/":
      return MainPage();
    case "/profile":
      return getStoreValue("isLoggedIn") ? ProfilePage() : LoginPage();
    case "/login":
      return LoginPage();
    default:
      return ErrorPage();
  }
};

const root = document.getElementById("root");

root.innerHTML = App();

window.addEventListener("popstate", () => {
  root.innerHTML = App();
});
