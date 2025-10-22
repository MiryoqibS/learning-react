import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { authContext } from "./contexts/authContext";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { PrivatePage } from "./pages/PrivatePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProfilePage } from "./pages/ProfilePage";
import { AboutPage } from "./pages/AboutPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

export const App = () => {
  const { isAuth } = useContext(authContext);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route element={<PrivatePage allowed={isAuth} />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="/auth">
          <Route index element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        <Route path="/about" element={<AboutPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
};