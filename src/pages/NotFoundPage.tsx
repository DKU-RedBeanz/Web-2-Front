import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>404 Not Found</h1>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <button type="button" onClick={() => navigate('/')}>
        메인으로 이동
      </button>
    </>
  );
}

