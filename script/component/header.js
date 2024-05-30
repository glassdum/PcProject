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
