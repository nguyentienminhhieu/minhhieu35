// import Routine from "./pages/Routine";
import React from 'react';
import Login from "./components/Login"
// import {Route, Switch, BrowserRouter} from 'react-router-dom';
import { Routes , Route, BrowserRouter} from "react-router-dom";
import ChatRoom from "./components/ChatRoom/index"
import AuthProvider from './Context/AuthProvider'


function App() {
  
  
  return (
    // <AuthProvider>
    //   <Routes>
    //     <Route component={Login} path="/login" />
    //     <Route component={ChatRoom} path="/" />
    //   </Routes>
    // </AuthProvider>
    <ChatRoom/>
    )
}



export default App;