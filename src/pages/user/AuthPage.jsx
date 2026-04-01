import Login from "./Login";
import Signup from "./Signup";

export default function AuthPage({ auth }) {
  if (auth === "login") return <Login />;
  if (auth === "signup") return <Signup />;

  return <Login />; // default
}