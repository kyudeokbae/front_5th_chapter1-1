(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const o={main:"/",profile:"/profile",login:"/login",error:"/error"},w=t=>{const e=localStorage.getItem(t);return e===null?null:JSON.parse(e)},P=(t,e)=>{e===null?localStorage.removeItem(t):localStorage.setItem(t,JSON.stringify(e))},i=t=>{w(t)!==null&&localStorage.removeItem(t)},p={isLoggedIn:!1,user:{username:"",email:"",bio:""}};class E{constructor(){this.state=p}syncState(e){this.state={...this.state,[e]:w(e)}}setState(e,s){P(e,s)}clearState(e){i(e)}getState(e){var s;return this.syncState(e),((s=this.state)==null?void 0:s[e])??p[e]}}const l=new E,x=t=>g()===t?"text-blue-600 font-bold":"text-gray-600",L=()=>l.getState("isLoggedIn")?`
        <li><a href="${d(o.profile)}" class="${x(o.profile)}">프로필</a></li>
        <li><a id="logout" href="#" class="text-gray-600">로그아웃</a></li>
      `:`<li><a href="${d(o.login)}" class="text-gray-600">로그인</a></li>`,y=()=>`
  <header class="bg-blue-600 text-white p-4 sticky top-0">
    <h1 class="text-2xl font-bold">항해플러스</h1>
  </header>

  <nav class="bg-white shadow-md p-2 sticky top-14">
    <ul class="flex justify-around">
      <li><a href="${d(o.main)}" class="${x(o.main)}">홈</a></li>
      ${L()}
    </ul>
  </nav>
`;window.addEventListener("click",t=>{if(!t.target.matches("a[href]"))return;const e=t.target.getAttribute("href"),s=t.target.id==="logout",a=!s&&e===g();!a&&!s||(t.preventDefault(),!a&&s&&(i("user"),i("password"),i("isLoggedIn"),c(o.login),window.dispatchEvent(new Event("popstate"))))});const S=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,$=({userName:t,createdAt:e,content:s})=>`
  <div class="bg-white rounded-lg shadow p-4">
    <div class="flex items-center mb-2">
      <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
      <div>
        <p class="font-bold">${t}</p>
        <p class="text-sm text-gray-500">${e}</p>
      </div>
    </div>
    <p>${s}</p>
    <div class="mt-2 flex justify-between text-gray-500">
      <button>좋아요</button>
      <button>댓글</button>
      <button>공유</button>
    </div>
  </div>
`,I=[{userName:"홍길동",createdAt:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{userName:"김철수",createdAt:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{userName:"이영희",createdAt:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{userName:"박민수",createdAt:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{userName:"정수연",createdAt:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],b=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${y()}

      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">
          ${I.map(t=>$(t)).join("")}
        </div>
      </main>

      ${S()}
    </div>
  </div>
`,N=()=>{var t,e,s;return`
  <div id="root">
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${y()}

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
                  value="${((t=l.getState("user"))==null?void 0:t.username)??""}"
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
                  value="${((e=l.getState("user"))==null?void 0:e.email)??""}"
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

        ${S()}
      </div>
    </div>
  </div>
`};window.addEventListener("submit",t=>{if(t.target.id!=="profile-form")return;t.preventDefault();const e=l.getState("user"),s=document.getElementById("username").value,a=document.getElementById("email").value,r=document.getElementById("bio").value;(e.username!==(s==null?void 0:s.trim())||e.email!==(a==null?void 0:a.trim())||e.bio!==(r==null?void 0:r.trim()))&&l.setState("user",{username:s,email:a,bio:r})});const h=()=>`
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
`;window.addEventListener("submit",t=>{if(t.target.id!=="login-form")return;t.preventDefault();const e=document.getElementById("username").value,s=document.getElementById("password").value;if(!e.trim()){alert("사용자 이름을 입력해주세요.");return}l.setState("user",{username:e,email:"",bio:""}),l.setState("password",s),l.setState("isLoggedIn",!0),c(o.profile),window.dispatchEvent(new Event("popstate"))});const A=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href=${o.main} class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,v={[o.main]:()=>b(),[o.login]:()=>l.getState("isLoggedIn")?(c(o.main),b()):h(),[o.profile]:()=>l.getState("isLoggedIn")?N():(c(o.login),h()),[o.error]:()=>A()},m="front_5th_chapter1-1/",g=()=>{var a;const t=window.location.pathname;return(((a=window.location.hash)==null?void 0:a.slice(1))||t).replace(m,"")},O=()=>{const t=g();return(v[t]||v[o.error])()},d=t=>{const e=window.location.hostname.includes("github.io"),s=window.location.pathname.includes(m);return e&&!s?m+t:t},c=t=>{const e=d(t);window.history.pushState({},"",e)},f=()=>{const t=document.getElementById("root");t.innerHTML=O()};f();window.addEventListener("popstate",f);window.addEventListener("hashchange",f);
