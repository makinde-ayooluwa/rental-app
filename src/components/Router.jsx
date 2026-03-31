import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Homepage from "../pages/user/Homepage";
import Header from "./user/Header";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<h1>Page not found</h1>} />
        <Route
          index
          element={
            <>
              <Header />
              <Homepage />
            </>
          }
        />
        <Route path="/admin" element={<Outlet />}>
          <Route index element={<h1>Admin Panel</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
