// n-1.js 파일

// 템플릿 정의
const template2 = document.createElement('template');
template2.innerHTML = `
  <style>
  *{margin: 0; padding: 0; box-sizing: border-box;}
li {list-style: none;}
a {color: #222; text-decoration: none;}
footer {
    width: 100%;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #7fd398;
}

footer>div {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
footer>div .left address ul {
    display: flex;
    gap: 24px;
    font-size: 12px;
    margin-bottom: 6px;
}
footer>div .left address ul li {
    position: relative;
}
footer>div .left address ul li::after {
    content: '';
    width: 2px;
    height: 14px;
    background: #222;
    position: absolute;
    right: -12.5px;
    top: 50%; transform: translateY(-50%);
}
footer>div .left address ul li:last-child:after {
    display: none;
}
footer>div .left .copy p {
    font-size: 12px;
}
footer>div .right h3 {
    text-align: center;
    margin-bottom: 16px;
}
footer>div .right ul {
    display: flex;
    gap: 16px;
}
  </style>
  <footer>
      <div>
          <section class="left">
              <address>
                  <ul class="add1">
                      <li><a href="javascript:void(0)">회사소개</a></li>
                      <li><a href="javascript:void(0)">이용약관</a></li>
                      <li><a href="javascript:void(0)">개인정보처리방침</a></li>
                      <li><a href="javascript:void(0)">이메일무단수집거부</a></li>
                      <li><a href="javascript:void(0)">영상정보처리기기 운영 및 관리방침
                      </a></li>
                  </ul>
                  <ul class="add2">
                      <li><a href="javascript:void(0)">[21417] 인천광역시 부평구 무네미로 448번길 56</a></li>
                      <li><a href="javascript:void(0)">고객센터 1544-0000 (유료)</a></li>
                  </ul>
                  <ul class="add3">
                      <li><a href="javascript:void(0)">대표이사 이동민</a></li>
                      <li><a href="javascript:void(0)">사업자등록번호 000-00-00000</a></li>
                      <li><a href="javascript:void(0)">통신판매업신고번호 제0000호</a></li>
                      <li><a href="javascript:void(0)">개인정보 보호 책임자 홍성표</a></li>
                  </ul>
              </address>
              <div class="copy">
                  <p>COPYRIGHT 2010 BY KOREA POLYTECHNICS. ALL RIGHTS RESERVED.</p>
              </div>
          </section>
          <section class="right">
              <h3>FOLLOW US</h3>
              <ul>
                  <li><a href="javascript:void(0)"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M35.244 9.30482C35.035 8.55752 34.6365 7.87686 34.0872 7.32874C33.5379 6.78063 32.8564 6.38363 32.1086 6.17619C29.3018 5.42582 18.018 5.42582 18.018 5.42582C18.018 5.42582 6.75564 5.40782 3.91952 6.17619C3.17296 6.38454 2.49278 6.78196 1.94472 7.33002C1.39665 7.87809 0.999241 8.55827 0.790891 9.30482C0.257866 12.1783 -0.00465723 15.0954 0.00676597 18.0179C0.00156499 20.9264 0.264047 23.8291 0.790891 26.6894C0.999915 27.4364 1.39745 28.1171 1.94532 28.6661C2.4932 29.2152 3.17302 29.6142 3.91952 29.8248C6.72639 30.5752 18.018 30.5752 18.018 30.5752C18.018 30.5752 29.2736 30.5752 32.1086 29.8248C32.8563 29.6151 33.5375 29.2165 34.0866 28.6674C34.6357 28.1183 35.0343 27.4371 35.244 26.6894C35.7604 23.8308 36.0124 20.9238 35.9944 18.0179C36.0124 15.0929 35.766 12.1814 35.244 9.30482ZM14.4135 23.4033V12.6089L23.8061 18.0179L14.4135 23.4033Z" fill="black"/>
                      </svg>
                      </a></li>
                  <li><a href="javascript:void(0)"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 12.7575C15.0975 12.7575 12.7575 15.12 12.7575 18C12.7575 20.88 15.12 23.2425 18 23.2425C20.88 23.2425 23.2425 20.88 23.2425 18C23.2425 15.12 20.88 12.7575 18 12.7575ZM33.75 18C33.75 15.8175 33.75 13.68 33.6375 11.4975C33.525 8.9775 32.94 6.7275 31.095 4.905C29.25 3.06 27.0225 2.475 24.5025 2.3625C22.32 2.25 20.1825 2.25 18 2.25C15.8175 2.25 13.68 2.25 11.4975 2.3625C8.9775 2.475 6.7275 3.06 4.905 4.905C3.06 6.75 2.475 8.9775 2.3625 11.4975C2.25 13.68 2.25 15.8175 2.25 18C2.25 20.1825 2.25 22.32 2.3625 24.5025C2.475 27.0225 3.06 29.2725 4.905 31.095C6.75 32.94 8.9775 33.525 11.4975 33.6375C13.68 33.75 15.8175 33.75 18 33.75C20.1825 33.75 22.32 33.75 24.5025 33.6375C27.0225 33.525 29.2725 32.94 31.095 31.095C32.94 29.25 33.525 27.0225 33.6375 24.5025C33.7725 22.3425 33.75 20.1825 33.75 18ZM18 26.0775C13.5225 26.0775 9.9225 22.4775 9.9225 18C9.9225 13.5225 13.5225 9.9225 18 9.9225C22.4775 9.9225 26.0775 13.5225 26.0775 18C26.0775 22.4775 22.4775 26.0775 18 26.0775ZM26.415 11.475C25.38 11.475 24.525 10.6425 24.525 9.585C24.525 8.5275 25.3575 7.695 26.415 7.695C27.4725 7.695 28.305 8.5275 28.305 9.585C28.3107 9.83146 28.2657 10.0765 28.1728 10.3048C28.0799 10.5332 27.9411 10.74 27.765 10.9125C27.5925 11.0886 27.3857 11.2274 27.1573 11.3203C26.929 11.4132 26.684 11.4582 26.4375 11.4525L26.415 11.475Z" fill="black"/>
                      </svg>
                      </a></li>
                  <li><a href="javascript:void(0)"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M28.7617 2.73718H7.23712C4.76212 2.73718 2.73712 4.76218 2.73712 7.23718V28.7641C2.73712 31.2391 4.76212 33.2641 7.23712 33.2641H28.764C31.239 33.2641 33.264 31.2391 33.264 28.7641V7.23718C33.2617 4.76218 31.239 2.73718 28.7617 2.73718ZM28.4726 19.0306H24.8501V32.1368H19.4299V19.0306H16.7186V14.5126H19.4299V11.8013C19.4299 8.11581 20.9599 5.92318 25.3136 5.92318H28.9327V10.4401H26.6692C24.9772 10.4401 24.8647 11.0734 24.8647 12.2513L24.8501 14.5126H28.9507L28.4726 19.0306Z" fill="black"/>
                      </svg>
                      </a></li>
              </ul>
          </section>
      </div>
  </footer>
`;

// 사용자 정의 요소 클래스 정의
class Footer extends HTMLElement {
  constructor() {
    super();
    // Shadow DOM 연결
    const shadow = this.attachShadow({ mode: 'open' });

    // 템플릿 콘텐츠 복제 및 Shadow DOM에 추가
    shadow.appendChild(template2.content.cloneNode(true));
  }
}

// 사용자 정의 요소 등록
customElements.define('my-footer', Footer);
