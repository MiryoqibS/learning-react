import { Layout } from "./components/Layout";
import React from "react"
import { Route, Routes } from "react-router-dom"

// == Компоненты страниц ==
import { HomePage } from "./pages/HomePage";
import { WorkPage } from "./pages/WorkPage";
import { AboutPage } from "./pages/AboutPage";
import { PlaygroundPage } from "./pages/PlaygroundPage";
import { ResourcePage } from "./pages/ResourcePage";
import { AuthPage } from "./pages/AuthPage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/resource" element={<ResourcePage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Route>
      </Routes>
    </>
  )
}
