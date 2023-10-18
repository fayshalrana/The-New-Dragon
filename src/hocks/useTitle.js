import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - The News Drogon`;
    },[])
}

export default useTitle;