import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Hello World</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
