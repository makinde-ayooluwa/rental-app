import { useRef } from "react"
import Login from "./Login";
import Signup from "./Signup";

export default function AuthPage({auth}){
    function authType(){
        switch(auth){
        case "login":
            return <Login/>;
            break;
            case "signup":
            return <Signup/>;
                break;
    }
    }
    return <div>
        <div>{authType()}</div>
    </div>
}