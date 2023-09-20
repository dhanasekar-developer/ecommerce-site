import axios from "axios";
import React, { useState, useEffect } from "react";
import { URL_API } from "../URL"
import { useNavigate } from "react-router-dom";
import "./Login.css"


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [apiData, setapiData] = useState([]);
    const Navigate = useNavigate();
    let elseview = document.getElementById('elseview')

    const callAPI = async () => {
        const resp = await axios.get(URL_API)
        setapiData(resp.data)
    }
    useEffect(() => {
        callAPI()
    }, [])
    var userEmail=email.trim();
    var userPassword=password.trim();
    const login = () => {
        apiData.map((e) => {
            if (e.email === userEmail && e.password === userPassword) {
                return Navigate('/');
            }
            else {
                return elseview.innerHTML = "Invalid Email or Password"
            }
        })
    }
    const signinPage = () => {
        Navigate('/signin')
    }


    return (
        <div className="form">
            <div className="middle_form">
                <span className="borderline"></span>
                <div className="inside_form">
                    <div className="login">
                        <h1 className="form_head"> Login Page</h1><br />
                    </div>
                    <div className="login">
                        <label>Email id</label><br />
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}></input><br />
                    </div>
                    <div className="login">
                        <label>Password</label><br />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}></input><br />
                    </div>
                    <div className="login">
                        <button className="loginsubmitbtn" onClick={() => login()}>Submit</button><br />
                    </div>
                    <div id="elseview"></div>
                    <div className="user">
                        If you are a new user please signin
                    </div>
                    <div className="login">
                        <button onClick={() => signinPage()} className="signinbtn">Signin</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;