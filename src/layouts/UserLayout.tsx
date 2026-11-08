import { Outlet } from 'react-router-dom';

export default function UserLayout() {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <main className="mx-auto min-h-screen w-full max-w-[430px] bg-white shadow-sm">
        <Outlet />
      </main>
    </div>
  );
}

