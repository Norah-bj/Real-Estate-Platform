import "./login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

function Login() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("")
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    // const data = { username, password };
    // const data = Object.fromEntries(formData);
    // console.log(data);

    try{
      const response = await apiRequest.post("/auth/login",{
        username,
        password
    })
    // console.log(response)

    localStorage.setItem("user", JSON.stringify(response.data));
    // console.log(response.data)
    navigate("/")
    }catch(err){
      console.log(err)
      setError(err.response.data.message || "Something went wrong")
    }finally{
      setIsLoading(false);
    }
  }

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" required minLength={3} maxLength={20} type="text" placeholder="Username" />
          <input name="password" type="password" required placeholder="Password" />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;