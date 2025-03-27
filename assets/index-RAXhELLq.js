(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const a={main:"/",profile:"/profile",login:"/login",error:"/error"},v=e=>{const t=localStorage.getItem(e);return t===null?null:JSON.parse(t)},S=(e,t)=>{t===null?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(t))},i=e=>{v(e)!==null&&localStorage.removeItem(e)},p={isLoggedIn:!1,user:{username:"",email:"",bio:""}};class P{constructor(){this.state=p}syncState(t){this.state={...this.state,[t]:v(t)}}setState(t,s){S(t,s)}clearState(t){i(t)}getState(t){var s;return this.syncState(t),((s=this.state)==null?void 0:s[t])??p[t]}}const l=new P,w=e=>m()===e?"text-blue-600 font-bold":"text-gray-600",E=()=>l.getState("isLoggedIn")?`
        <li><a href="${a.profile}" class="${w(a.profile)}">프로필</a></li>
        <li><a id="logout" href="#" class="text-gray-600">로그아웃</a></li>
      `:`<li><a href="${a.login}" class="text-gray-600">로그인</a></li>`,x=()=>`
  <header class="bg-blue-600 text-white p-4 sticky top-0">
    <h1 class="text-2xl font-bold">항해플러스</h1>
  </header>

  <nav class="bg-white shadow-md p-2 sticky top-14">
    <ul class="flex justify-around">
      <li><a href="${a.main}" class="${w(a.main)}">홈</a></li>
      ${E()}
    </ul>
  </nav>
`;window.addEventListener("click",e=>{if(!e.target.matches("a[href]"))return;const t=e.target.getAttribute("href"),s=e.target.id==="logout",n=t===m();if(e.preventDefault(),n)return;s&&(i("user"),i("password"),i("isLoggedIn"));const r=e.target.pathname,o=window.location.hostname.includes("github.io");d(o?`/front_5th_chapter1-1${r}`:r),window.dispatchEvent(new Event("popstate"))});const y=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,L=({userName:e,createdAt:t,content:s})=>`
  <div class="bg-white rounded-lg shadow p-4">
    <div class="flex items-center mb-2">
      <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
      <div>
        <p class="font-bold">${e}</p>
        <p class="text-sm text-gray-500">${t}</p>
      </div>
    </div>
    <p>${s}</p>
    <div class="mt-2 flex justify-between text-gray-500">
      <button>좋아요</button>
      <button>댓글</button>
      <button>공유</button>
    </div>
  </div>
`,$=[{userName:"홍길동",createdAt:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{userName:"김철수",createdAt:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{userName:"이영희",createdAt:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{userName:"박민수",createdAt:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{userName:"정수연",createdAt:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],f=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${x()}

      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">
          ${$.map(e=>L(e)).join("")}
        </div>
      </main>

      ${y()}
    </div>
  </div>
`,I=()=>{var e,t,s;return`
  <div id="root">
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${x()}

        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form id="profile-form">
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >사용자 이름</label
                >
                <input
                  type="text"
                  id="username"
                  name="username"
                  value="${((e=l.getState("user"))==null?void 0:e.username)??""}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >이메일</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="${((t=l.getState("user"))==null?void 0:t.email)??""}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-6">
                <label
                  for="bio"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >자기소개</label
                >
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  class="w-full p-2 border rounded"
                >${((s=l.getState("user"))==null?void 0:s.bio)??""}</textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white p-2 rounded font-bold"
              >
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>

        ${y()}
      </div>
    </div>
  </div>
`};window.addEventListener("submit",e=>{if(e.target.id!=="profile-form")return;e.preventDefault();const t=l.getState("user"),s=document.getElementById("username").value,n=document.getElementById("email").value,r=document.getElementById("bio").value;(t.username!==(s==null?void 0:s.trim())||t.email!==(n==null?void 0:n.trim())||t.bio!==(r==null?void 0:r.trim()))&&l.setState("user",{username:s,email:n,bio:r})});const b=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input id="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <input id="password" type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`;window.addEventListener("submit",e=>{if(e.target.id!=="login-form")return;e.preventDefault();const t=document.getElementById("username").value,s=document.getElementById("password").value;if(!t.trim()){alert("사용자 이름을 입력해주세요.");return}l.setState("user",{username:t,email:"",bio:""}),l.setState("password",s),l.setState("isLoggedIn",!0),d(a.profile),window.dispatchEvent(new Event("popstate"))});const N=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href=${a.main} class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,u="front_5th_chapter1-1/",h={[a.main]:()=>f(),[a.login]:()=>l.getState("isLoggedIn")?(d(a.main),f()):b(),[a.profile]:()=>l.getState("isLoggedIn")?I():(d(a.login),b()),[a.error]:()=>N()},m=()=>{var n;const e=window.location.pathname;return(((n=window.location.hash)==null?void 0:n.slice(1))||e).replace(u,"")},A=()=>{const e=m();return(h[e]||h[a.error])()},O=e=>{const t=window.location.hostname.includes("github.io"),s=window.location.pathname.includes(u);return t&&!s?u+e:e},d=e=>{const t=O(e);window.history.pushState({},"",t)},g=()=>{console.log("renderApp");const e=document.getElementById("root");e.innerHTML=A()};g();window.addEventListener("popstate",g);window.addEventListener("hashchange",g);
