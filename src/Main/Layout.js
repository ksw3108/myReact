import './main.scss';

import { Outlet, Link, useNavigate } from 'react-router-dom';
const Layout = ({ handlePage }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goArticlse = () => {
    navigate('/', { replace: true });
  };
  return (
    <div>
      <header className="menu">
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticlse}>메인으로</button>
        <ul>
          <li>
            <Link to="/randcolor">숫자 증감 + 랜덤 색상</Link>
          </li>
          <li>
            <Link to="/inputform">회원가입폼</Link>
          </li>
          <li>
            <Link to="/iteration">컨테이너의 동적 생성</Link>
          </li>
          <li>
            <Link to="/validation">비밀번호 검증</Link>
          </li>
          <li>
            <Link to="/scroll">스크롤박스 - react styling</Link>
          </li>
          <li>
            <Link to="/immer">immer를 활용한 데이터 저장</Link>
          </li>
          <li>
            <Link to="/context">context 활용</Link>
          </li>
          <li>
            <Link to="/reducecounter">reduce 숫자증감</Link>
          </li>
          <li>
            <Link to="/inputbyreduce">reduce 활용 input form</Link>
          </li>
          <li>
            <Link to="/customreduce">커스텀 reduce 예제</Link>
          </li>
          <li>
            <Link to="/averageuseallhook">등록한 숫자들의 평균값 구하기</Link>
          </li>
          <li>
            <Link to="/reduxtodolist">redux 할일 리스트</Link>
          </li>
          <li>
            <Link to="/reactcss">react styling 샘플</Link>
          </li>
          <li>
            <Link to="/todoupgrade">할일 리스트_v2</Link>
          </li>
          <li>
            <Link to="/news/newsmain">뉴스 api 활용</Link>
          </li>
        </ul>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
