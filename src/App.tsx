import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SchoolRestaurantPage from './pages/SchoolRestaurantPage';
import RestaurantPage from './pages/RestaurantPage';
import ReviewPage from './pages/ReviewPage';
import MenuPage from './pages/MenuPage';

export default function App() {
  return (
      <Routes>
        <Route path='/schoolrestaurant' element={<SchoolRestaurantPage/>}/>
        <Route path='/restaurant' element={<RestaurantPage/>}/>
        <Route path='/review' element={<ReviewPage/>}/>
        <Route path='/menu' element={<MenuPage/>}/>
      </Routes>
  );
}