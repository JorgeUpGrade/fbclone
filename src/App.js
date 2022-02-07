import React from "react";
import './App.css';
import Header from "./Header"
import "./Sidebar"
import Sidebar from "./Sidebar";
import Feed from "./Feed"



function App() {
  const user = "Jorge ";
  return (
    <div className="App">
    {!user ? "Login":(
      <>
      <Header />
 <div className="App_body">
 <Sidebar />
  <Feed />
   </div>
</>
    )}
  
    </div>
  );
}

export default App;
