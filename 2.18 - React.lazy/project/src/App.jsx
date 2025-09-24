import React from 'react'
import { lazy } from 'react';
import { useState } from 'react'
import { Button } from './components/UI/Button';
import { Suspense } from 'react';
import { Loader } from './components/Loader';

export const App = () => {
  const [page, setPage] = useState("");

  // Ленивая загрузка компонентов
  const ProfilePage = lazy(() => import("./pages/ProfilePage"));
  const HomePage = lazy(() => import("./pages/HomePage"));

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-4">
        <h1>Наш сайт</h1>
        <div className="flex items-center gap-2">
          <Button handleClick={() => setPage("profile")}>Открыть профиль</Button>
          <Button handleClick={() => setPage("home")}>Открыть Главную</Button>
        </div>
      </div>

      <Suspense fallback={<Loader />}>
        {page === "profile" && <ProfilePage />}
        {page === "home" && <HomePage />}
      </Suspense>
    </div>
  )
}
