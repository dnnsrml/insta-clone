import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/Homepage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./layouts/PageLayout/PageLayout";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
