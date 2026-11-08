import { Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div className="min-h-screen w-full bg-white">
      <main className="min-h-screen w-full">
        <Outlet />
      </main>
    </div>
  );
}

