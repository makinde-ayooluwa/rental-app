import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Homepage from "../pages/user/Homepage";
import Header from "./user/Header";
import AuthPage from "../pages/user/AuthPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Header />
              <div
                style={{
                  width: "100vw",
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "grid", textAlign: "center", gap: 20 }}>
                  <h1 className="font-bold" style={{ fontSize: "40px" }}>
                    404 | Page not found
                  </h1>
                  <Link to="/" className="text-blue-800">
                    Go to homepage
                  </Link>
                </div>
              </div>
            </>
          }
        />
        <Route
          index
          element={
            <>
              <Header />
              <Homepage />
            </>
          }
        />
        <Route path="/signup" element={<AuthPage auth="signup" />} />
        <Route path="/login" element={<AuthPage auth="login" />} />
        <Route path="/admin" element={<Outlet />}>
          <Route index element={<h1>Admin Panel</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
