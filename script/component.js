// n-1.js 파일

// n-1.js 파일

// 템플릿 정의
const template = document.createElement('template');
template.innerHTML = `
  <style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  li {
      list-style: none;
  }
  a {
      text-decoration: none;
      color: #222;
  }
  header {
      width: 100%;
      min-width: 1200px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #7fd398;
  }
  header div {
      width: 1200px;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 24px;
  }
  header h1 a {
      display: block;
      width: 45px;
      height: 45px;
      text-indent: -99999px;
      background: url(img/mark.png) no-repeat center;
  }
  
  header .main_depth {
      width: 800px;
  }
  
  header .main_depth>ul {
      display: flex;
      justify-content: space-between;
  }
  header .main_depth>ul>li {
      position: relative;
      width: 25%;
      height: 40px;
  }
  header .main_depth>ul>li>a {
      font-size: 18px;
      line-height: 40px;
      text-align: center;
      font-weight: bold;
      display: block;
  }
  header .main_depth>ul>li>.depth2 {
      width: 100%;
      display: none;
      position: absolute;
      left: 0;
      top: 40.5px;
  }
  header .main_depth>ul>li>.depth2 li {
      width: 100%;
      padding: 16px 8px;
      font-weight: bold;
      background: #7fd398;
  }
  header .main_depth>ul>li>.depth2 li a {
      display: block;
      width: 100%;
      height: 100%;
  }
  header .main_depth>ul>li:hover {
      background: #20cf55;
      transition: 0.3s all;
  }
  header .main_depth>ul>li:hover>.depth2 {
      display: block;
      transition: 0.3s all;
  }
  header .main_depth>ul>li>.depth2 li:hover {
      background: #20cf55;
      transition: 0.3s all;
  }
  header .sub_depth ul {
      display: flex;
      gap: 24px;
  }
  header .sub_depth ul li:hover {
      cursor: pointer;
  }
  </style>
  <header>
        <div>
            <h1><a href="index.html">logo</a></h1>
            <nav class="main_depth">
                <ul>
                    <li>
                        <a href="javascript:void(0)">Story</a>
                        <ul class="depth2">
                            <li><a href="javascript:void(0)">기업소개</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:void(0)">영양소별 찾기</a>
                        <ul class="depth2">
                            <li><a href="javascript:void(0)">비타민 A, B</a></li>
                            <li><a href="javascript:void(0)">비타민 C, D</a></li>
                            <li><a href="javascript:void(0)">단백질</a></li>
                            <li><a href="javascript:void(0)">콜라겐</a></li>
                            <li><a href="javascript:void(0)">프락토올리고당</a></li>
                            <li><a href="javascript:void(0)">아연</a></li>
                            <li><a href="javascript:void(0)">칼륨, 칼슘</a></li>
                            <li><a href="javascript:void(0)">기타 영양소</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:void(0)">목적별 찾기</a>
                        <ul class="depth2">
                            <li><a href="javascript:void(0)">다이어트</a></li>
                            <li><a href="javascript:void(0)">장 건강</a></li>
                            <li><a href="javascript:void(0)">관절 건강</a></li>
                            <li><a href="javascript:void(0)">당뇨 관리</a></li>
                            <li><a href="javascript:void(0)">변비</a></li>
                            <li><a href="javascript:void(0)">기타 목적</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:void(0)">고객페이지</a>
                        <ul class="depth2">
                            <li><a href="javascript:void(0)">기타 목적</a></li>
                            <li><a href="javascript:void(0)">FAQ</a></li>
                            <li><a href="javascript:void(0)">정보수정요구</a></li>
                            <li><a href="javascript:void(0)">MyPage</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <nav class="sub_depth">
                <ul>
                    <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4_30)">
                        <path d="M15.48 17.184C13.5513 18.6823 11.124 19.3891 8.69239 19.1606C6.26078 18.932 4.00771 17.7853 2.39192 15.9538C0.776132 14.1224 -0.0808704 11.744 -0.00458929 9.30285C0.0716918 6.86172 1.07552 4.54145 2.8025 2.81447C4.52948 1.08748 6.84976 0.0836547 9.29089 0.0073736C11.732 -0.0689075 14.1104 0.788095 15.9419 2.40388C17.7733 4.01967 18.9201 6.27275 19.1486 8.70435C19.3771 11.136 18.6703 13.5632 17.172 15.492L23.592 21.888L21.888 23.592L15.492 17.184H15.48ZM9.60003 16.8C10.5455 16.8 11.4818 16.6138 12.3554 16.2519C13.2289 15.8901 14.0226 15.3597 14.6912 14.6912C15.3598 14.0226 15.8901 13.2289 16.252 12.3553C16.6138 11.4818 16.8 10.5455 16.8 9.59999C16.8 8.65447 16.6138 7.71822 16.252 6.84467C15.8901 5.97113 15.3598 5.1774 14.6912 4.50882C14.0226 3.84024 13.2289 3.30989 12.3554 2.94806C11.4818 2.58622 10.5455 2.39999 9.60003 2.39999C7.69047 2.39999 5.85912 3.15856 4.50886 4.50882C3.1586 5.85908 2.40003 7.69043 2.40003 9.59999C2.40003 11.5096 3.1586 13.3409 4.50886 14.6912C5.85912 16.0414 7.69047 16.8 9.60003 16.8Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_4_30">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        </li>
                    <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8416 12.1095C17.3184 12.8075 18.5776 13.894 19.4844 15.2526C20.3912 16.6113 20.9115 18.1909 20.9896 19.8225C20.9999 19.972 20.9802 20.122 20.9318 20.2638C20.8833 20.4055 20.807 20.5362 20.7073 20.6481C20.6077 20.76 20.4867 20.8508 20.3514 20.9153C20.2162 20.9798 20.0694 21.0166 19.9198 21.0236C19.7701 21.0306 19.6206 21.0076 19.4799 20.956C19.3392 20.9044 19.2103 20.8253 19.1006 20.7232C18.991 20.6211 18.9028 20.4981 18.8413 20.3614C18.7799 20.2248 18.7463 20.0773 18.7426 19.9275C18.6608 18.1943 17.9147 16.5591 16.6592 15.3615C15.4037 14.1638 13.7352 13.4956 12.0001 13.4956C10.265 13.4956 8.59646 14.1638 7.34095 15.3615C6.08544 16.5591 5.33937 18.1943 5.2576 19.9275C5.23739 20.2209 5.10311 20.4947 4.88352 20.6903C4.66394 20.8859 4.37649 20.9877 4.08274 20.974C3.78899 20.9602 3.5123 20.832 3.3119 20.6168C3.11151 20.4016 3.00336 20.1165 3.0106 19.8225C3.08839 18.191 3.60839 16.6114 4.51495 15.2528C5.4215 13.8941 6.68048 12.8076 8.1571 12.1095C7.21061 11.32 6.53029 10.2582 6.20867 9.06836C5.88705 7.87855 5.93975 6.61855 6.35959 5.45975C6.77944 4.30095 7.54604 3.2996 8.55514 2.59192C9.56424 1.88424 10.7668 1.50458 11.9993 1.50458C13.2319 1.50458 14.4345 1.88424 15.4436 2.59192C16.4526 3.2996 17.2193 4.30095 17.6391 5.45975C18.0589 6.61855 18.1116 7.87855 17.79 9.06836C17.4684 10.2582 16.7881 11.32 15.8416 12.1095ZM15.7501 7.5C15.7501 6.50544 15.355 5.55161 14.6517 4.84835C13.9485 4.14509 12.9947 3.75 12.0001 3.75C11.0055 3.75 10.0517 4.14509 9.34844 4.84835C8.64518 5.55161 8.2501 6.50544 8.2501 7.5C8.2501 8.49456 8.64518 9.44839 9.34844 10.1516C10.0517 10.8549 11.0055 11.25 12.0001 11.25C12.9947 11.25 13.9485 10.8549 14.6517 10.1516C15.355 9.44839 15.7501 8.49456 15.7501 7.5Z" fill="black"/>
                        </svg>
                        </li>
                </ul>
            </nav>
        </div>
    </header>
`;

// 사용자 정의 요소 클래스 정의
class Header extends HTMLElement {
  constructor() {
    super();
    // Shadow DOM 연결
    const shadow = this.attachShadow({ mode: 'open' });

    // 템플릿 콘텐츠 복제 및 Shadow DOM에 추가
    shadow.appendChild(template.content.cloneNode(true));
  }
}

// 사용자 정의 요소 등록
customElements.define('my-header', Header);


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
