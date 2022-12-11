import React, {FC, useEffect, useRef} from 'react';
import {connectWithSocket} from "./utils/wssConnection/wssConnection";
import {BrowserRouter,Routes} from "react-router-dom";

const App:FC = () => {
    // 获取页面第一次渲染，解决页面渲染两次问题
    const firstRenderRef = useRef<boolean>(true)
    useEffect(():void=>{
        if(firstRenderRef.current){
            firstRenderRef.current = false;
            return;
        }
        connectWithSocket();
    },[])
    return (
        <BrowserRouter>
            <Routes></Routes>
        </BrowserRouter>
    );
}

export default App;
