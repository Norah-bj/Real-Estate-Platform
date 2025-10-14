import "./registerPage.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function Register() {
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const data = { username, email, password };
    // const data = Object.fromEntries(formData);
    console.log(data);

    try{
      const response = await axios.post("http://localhost:8800/api/auth/register",{
        username,
        email,
        password
    })
    console.log(response.data)
    }catch(err){
      console.log(err)
      //setError(err.response.data)
    }
  }
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button >Register</button>
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;