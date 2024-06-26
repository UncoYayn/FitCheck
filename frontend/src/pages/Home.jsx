import React, { useState } from "react";
import '../styles/Home.css';
import Login from "./Login.jsx"
import Register from "./Register";


function Home() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="Home">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
};

export default Home;