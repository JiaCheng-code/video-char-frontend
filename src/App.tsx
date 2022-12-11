import React, {FC, useEffect, useRef} from 'react';
import {connectWithSocket} from "./utils/wssConnection/wssConnection";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashBoard from "./pages/DashBoard/DashBoard";

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
            <Routes>
                <Route path='/' element={<LoginPage />}></Route>
                <Route path='/dashboard' element={<DashBoard />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
