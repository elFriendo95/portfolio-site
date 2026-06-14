import "./App.css";
import { BlogPage } from "./features/BlogPage/BlogPage.tsx";
import { MainPage } from "./features/MainPage/MainPage.tsx";
import { Routes, Route } from "react-router-dom";
import { QuotePage } from "./features/QuotePage/QuotePage.tsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<QuotePage />} />
    </Routes>
  );
}

export default App;
