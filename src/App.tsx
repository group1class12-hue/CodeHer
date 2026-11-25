import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { WhyStem } from "./pages/WhyStem";
import { RoleModels } from "./pages/RoleModels";
import { HowToStart } from "./pages/HowToStart";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="why-stem" element={<WhyStem />} />
          <Route path="role-models" element={<RoleModels />} />
          <Route path="how-to-start" element={<HowToStart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
