import { Routes, Route } from 'react-router-dom';

// 레이아웃 컴포넌트
import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';

// 공통 페이지
import NotFoundPage from './pages/NotFoundPage';

// 일반 사용자용 페이지 (모바일 뷰 기준)
import MainPage from './pages/user/MainPage';
import LoginPage from './pages/user/auth/LoginPage';
import SignupPage from './pages/user/auth/SignupPage';
import FindIdPage from './pages/user/auth/FindIdPage';
import ResetPasswordPage from './pages/user/auth/ResetPasswordPage';
import MyPage from './pages/user/mypage/MyPage';
import EditProfilePage from './pages/user/mypage/EditProfilePage';
import MyReviewsPage from './pages/user/mypage/MyReviewsPage';
import FavoritesPage from './pages/user/mypage/FavoritesPage';
import RestaurantListPage from './pages/user/restaurant/RestaurantListPage';
import RestaurantDetailPage from './pages/user/restaurant/RestaurantDetailPage';
import MenuDetailPage from './pages/user/restaurant/MenuDetailPage';
import WriteReviewPage from './pages/user/restaurant/WriteReviewPage';
import EditReviewPage from './pages/user/restaurant/EditReviewPage';

// 관리자용 페이지 (컴퓨터 화면 기준)
import AdminLoginPage from './pages/admin/auth/AdminLoginPage';
import AdminSignupPage from './pages/admin/auth/AdminSignupPage';
import AdminManagerListPage from './pages/admin/manager/AdminManagerListPage';
import AdminManagerDetailPage from './pages/admin/manager/AdminManagerDetailPage';
import AdminUserListPage from './pages/admin/user/AdminUserListPage';
import AdminUserDetailPage from './pages/admin/user/AdminUserDetailPage';
import AdminRestaurantListPage from './pages/admin/restaurant/AdminRestaurantListPage';
import AdminRestaurantDetailPage from './pages/admin/restaurant/AdminRestaurantDetailPage';
import AdminReviewListPage from './pages/admin/restaurant/AdminReviewListPage';

export default function App() {
  return (
    <Routes>
      {/* 1. 일반 사용자용 라우트 (모바일 뷰 레이아웃 적용) */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/find-id" element={<FindIdPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/edit" element={<EditProfilePage />} />
        <Route path="/mypage/reviews" element={<MyReviewsPage />} />
        <Route path="/mypage/favorites" element={<FavoritesPage />} />
        <Route path="/restaurants" element={<RestaurantListPage />} />
        <Route path="/restaurants/:restaurantId" element={<RestaurantDetailPage />} />
        <Route path="/restaurants/:restaurantId/menus/:menuId" element={<MenuDetailPage />} />
        <Route path="/restaurants/:restaurantId/reviews/new" element={<WriteReviewPage />} />
        <Route path="/review/:reviewId/edit" element={<EditReviewPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* 2. 관리자용 라우트 (컴퓨터 화면 레이아웃 적용, /admin/*) */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="login" element={<AdminLoginPage />} />
        <Route path="signup" element={<AdminSignupPage />} />
        <Route path="managers" element={<AdminManagerListPage />} />
        <Route path="managers/:managerId" element={<AdminManagerDetailPage />} />
        <Route path="users" element={<AdminUserListPage />} />
        <Route path="users/:userId" element={<AdminUserDetailPage />} />
        <Route path="restaurants" element={<AdminRestaurantListPage />} />
        <Route path="restaurants/:restaurantId" element={<AdminRestaurantDetailPage />} />
        <Route path="reviews" element={<AdminReviewListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
