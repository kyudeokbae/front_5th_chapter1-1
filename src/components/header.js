import { removeStoreValue } from "../utils/local-storage";

export const Header = () => /*html*/ `
  <header class="bg-blue-600 text-white p-4 sticky top-0">
    <h1 class="text-2xl font-bold">항해플러스</h1>
  </header>

  <nav class="bg-white shadow-md p-2 sticky top-14">
    <ul class="flex justify-around">
      <li><a href="/" class="text-blue-600">홈</a></li>
      <li><a href="/profile" class="text-gray-600">프로필</a></li>
      <li><a id="logout" href="#" class="text-gray-600">로그아웃</a></li>
    </ul>
  </nav>
`;

window.addEventListener("click", (e) => {
  if (!e.target.matches("a[href]")) return;

  const href = e.target.getAttribute("href");
  const isLogoutButton = e.target.id === "logout";
  const isSamePage = !isLogoutButton && href === window.location.pathname;

  if (!isSamePage && !isLogoutButton) return;

  e.preventDefault();

  if (isSamePage) return;

  if (isLogoutButton) {
    removeStoreValue("user");
    removeStoreValue("password");
    removeStoreValue("isLoggedIn");

    if (window.location.pathname !== "/") {
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new Event("popstate"));
    }
  }
});
