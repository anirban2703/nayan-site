import NavbarComp from "./components/Navbar/NavbarComp";
import LoginFrom from "./components/LoginFrom";
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'
import "./App.css";
import React, { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Loged In!");

      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details Do not match");
      setUser({ name: "", email: "" });
      setError('Details Do not match')
    }
  };

  const Logout = () => {
    console.log("Logout");
  };

  return (
    <>


      {user.email != "" ? (
        <>
        <Topbar name={user.name}/>
        <div className="container-fluid">
           <Sidebar/>
           <Home/>
        </div>
        </>
      ) : (
      <>
        <NavbarComp/>
        <LoginFrom Login={Login} error={error} />
      </>
      )}
    </>
  );
}

export default App;
