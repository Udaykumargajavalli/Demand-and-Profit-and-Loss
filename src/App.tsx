import { Navigate, Route, Routes } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import { MainLayout } from "./components/layout/MainLayout";
import { HomePage } from "./pages/Home/HomePage";
import { DocumentationPage } from "./pages/Documentation/DocumentationPage";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Routes>
      <Route element={<MainLayout theme={theme} toggleTheme={toggleTheme} />}>
        <Route index element={<HomePage />} />
        <Route
          path="/docs"
          element={<Navigate to="/docs/overview/introduction" replace />}
        />
        <Route path="/docs/:group/:slug" element={<DocumentationPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
