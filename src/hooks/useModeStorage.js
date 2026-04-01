export default function useModeStorage(){
    function getMode(){
        return localStorage.getItem("mode") ? localStorage.getItem("mode") : "light";
    }
    const mode = getMode();
    function setMode(value){
        localStorage.setItem("mode",value);
    }
    return {mode, setMode};
}