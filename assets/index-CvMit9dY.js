(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const o={main:"/",profile:"/profile",login:"/login",error:"/error"},g=t=>{const e=localStorage.getItem(t);return e===null?null:JSON.parse(e)},x=(t,e)=>{e===null?localStorage.removeItem(t):localStorage.setItem(t,JSON.stringify(e))},i=t=>{g(t)!==null&&localStorage.removeItem(t)},u={isLoggedIn:!1,user:{username:"",email:"",bio:""}};class y{constructor(){this.state=u}syncState(e){this.state={...this.state,[e]:g(e)}}setState(e,s){x(e,s)}clearState(e){i(e)}getState(e){var s;return this.syncState(e),((s=this.state)==null?void 0:s[e])??u[e]}}const n=new y,b=t=>v()===t?"text-blue-600 font-bold":"text-gray-600",S=()=>n.getState("isLoggedIn")?`
        <li><a href="${o.profile}" class="${b(o.profile)}">프로필</a></li>
        <li><a id="logout" href="#" class="text-gray-600">로그아웃</a></li>
      `:`<li><a href="${o.login}" class="text-gray-600">로그인</a></li>`,h=()=>`
  <header class="bg-blue-600 text-white p-4 sticky top-0">
    <h1 class="text-2xl font-bold">항해플러스</h1>
  </header>

  <nav class="bg-white shadow-md p-2 sticky top-14">
    <ul class="flex justify-around">
      <li><a href="${o.main}" class="${b(o.main)}">홈</a></li>
      ${S()}
    </ul>
  </nav>
`;window.addEventListener("click",t=>{if(!t.target.matches("a[href]"))return;const e=t.target.getAttribute("href"),s=t.target.id==="logout",l=!s&&e===window.location.pathname;!l&&!s||(t.preventDefault(),!l&&s&&(i("user"),i("password"),i("isLoggedIn"),window.history.pushState({},"",o.login),window.dispatchEvent(new Event("popstate"))))});const w=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,L=({userName:t,createdAt:e,content:s})=>`
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
`,E=[{userName:"홍길동",createdAt:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{userName:"김철수",createdAt:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{userName:"이영희",createdAt:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{userName:"박민수",createdAt:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{userName:"정수연",createdAt:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],m=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${h()}

      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">
          ${E.map(t=>L(t)).join("")}
        </div>
      </main>

      ${w()}
    </div>
  </div>
`,$=()=>{var t,e,s;return`
  <div id="root">
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${h()}

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
                  value="${((t=n.getState("user"))==null?void 0:t.username)??""}"
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
                  value="${((e=n.getState("user"))==null?void 0:e.email)??""}"
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
                >${((s=n.getState("user"))==null?void 0:s.bio)??""}</textarea>
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

        ${w()}
      </div>
    </div>
  </div>
`};window.addEventListener("submit",t=>{if(t.target.id!=="profile-form")return;t.preventDefault();const e=n.getState("user"),s=document.getElementById("username").value,l=document.getElementById("email").value,r=document.getElementById("bio").value;(e.username!==(s==null?void 0:s.trim())||e.email!==(l==null?void 0:l.trim())||e.bio!==(r==null?void 0:r.trim()))&&n.setState("user",{username:s,email:l,bio:r})});const f=()=>`
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
`;window.addEventListener("submit",t=>{if(t.target.id!=="login-form")return;t.preventDefault();const e=document.getElementById("username").value,s=document.getElementById("password").value;if(!e.trim()){alert("사용자 이름을 입력해주세요.");return}n.setState("user",{username:e,email:"",bio:""}),n.setState("password",s),n.setState("isLoggedIn",!0),window.history.pushState({},"",o.profile),window.dispatchEvent(new Event("popstate"))});const I=()=>`
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
`,p={[o.main]:()=>m(),[o.login]:()=>n.getState("isLoggedIn")?(window.history.pushState({},"",o.main),m()):f(),[o.profile]:()=>n.getState("isLoggedIn")?$():(window.history.pushState({},"",o.login),f()),[o.error]:()=>I()},v=()=>{var s;const t=window.location.pathname;return((s=window.location.hash)==null?void 0:s.slice(1))||t},P=()=>{const t=v();return(p[t]||p[o.error])()},c=()=>{const t=document.getElementById("root");t.innerHTML=P()};c();window.addEventListener("popstate",c);window.addEventListener("hashchange",c);
