import { Routes, Route } from 'react-router-dom';

// 1. pages 폴더에서 생성한 페이지 컴포넌트들을 import 합니다.
// 형식: import 컴포넌트명 from '컴포넌트 경로';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import SignupPage from './pages/SignupPage';
import FindIdPage from './pages/FindIdPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import MyReviewsPage from './pages/MyReviewsPage';
import FavoritesPage from './pages/FavoritesPage';
import EditReviewPage from './pages/EditReviewPage';
import RestaurantListPage from './pages/RestaurantListPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import MenuDetailPage from './pages/MenuDetailPage';
import WriteReviewPage from './pages/WriteReviewPage';
import EditProfilePage from './pages/EditProfilePage';

export default function App() {
  return (
      <Routes>
        {/* 
          - path: 브라우저 주소창에 들어갈 경로입니다.
            * '/' -> 기본 주소 (예: localhost:5173/)
            * '/login' -> 로그인 주소 (예: localhost:5173/login)
          - element: 해당 주소로 접속했을 때 렌더링할 컴포넌트를 지정합니다.
        */}
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/find-id" element={<FindIdPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/mypage/edit" element={<EditProfilePage />} />
        <Route path="/mypage/reviews" element={<MyReviewsPage />} />
        <Route path="/mypage/favorites" element={<FavoritesPage />} />
        <Route path="/review/:reviewId/edit" element={<EditReviewPage />} />
        <Route path="/restaurants" element={<RestaurantListPage />} />
        <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
        <Route path="/restaurants/:id/menus/:menuId" element={<MenuDetailPage />} />
        <Route path="/restaurants/:id/reviews/new" element={<WriteReviewPage />} />
        
        {/* 피그마를 보고 필요한 페이지 Route를 추가로 등록해 보세요 */}
      </Routes>
  );
}