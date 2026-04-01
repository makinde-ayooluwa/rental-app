import { useState } from "react";
import { Mode, User } from "./Context";
import useModeStorage from "../hooks/useModeStorage";
import useUserStorage from "../hooks/useUserStorage";

export default function ContextProvider({ children }) {
  const {user, setUser} = useUserStorage();
  const {mode, setMode} = useModeStorage();
  return (
    <User.Provider value={{ user, setUser }}>
      <Mode.Provider value={{ mode, setMode }}>{children}</Mode.Provider>
    </User.Provider>
  );
}
