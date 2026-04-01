export default function useUserStorage(){
    function getUser(){
        return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {};
    }
    const user = getUser();
    function setUser(value){
        localStorage.setItem("user",JSON.stringify(value));
    }
    return {user, setUser};
}