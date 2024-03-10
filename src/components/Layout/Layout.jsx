import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
