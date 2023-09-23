import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL_API } from "../URL"
import { useNavigate } from "react-router-dom";
import "./Signin.css"

function Signin() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const nameAlert = document.getElementById("nameAlert");
    const emailAlert = document.getElementById("emailAlert");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatpassword] = useState("");
    const passwordAlert = document.getElementById('passwordAlert')
    const repeatPasswordAlert = document.getElementById("repeatPasswordAlert");
    const [apiData, setapiData] = useState([]);
    const Navigate = useNavigate();

    const callAPI = async () => {
        const resp = await axios.get(URL_API)
        setapiData(resp.data)
    }
    useEffect(() => {
        callAPI()
    }, [])

    var userName = name.trim();

    const nameVerify = () => {
        if (userName === "") {
            nameAlert.innerHTML = "please enter name";

        }
        else {
            nameAlert.innerHTML = "";
        }
    }
    var userEmail = email.trim();
    const emailVerify = () => {
        const emailValidateAlert = document.getElementById('emailValidateAlert');

        if (userEmail === "") {
            emailAlert.innerHTML = "please enter email";
            emailValidateAlert.innerHTML = '';
        }
        else {
            emailAlert.innerHTML = "";
        }
    }
    var userPassword = password.trim();
    const passwordVerify = () => {
        if (userPassword === "") {
            passwordAlert.innerHTML = "please enter password";
        }
        else {
            passwordAlert.innerHTML = "";
        }
    }
    var userRepeatPassword = repeatPassword.trim();
    const repeatPasswordVerify = () => {
        if (userRepeatPassword === "") {
            repeatPasswordAlert.innerHTML = "please enter repeat password";
        }
        else if (password !== repeatPassword) {
            repeatPasswordAlert.innerHTML = "Password and Repeat Password Mismatch";
        }
        else {
            repeatPasswordAlert.innerHTML = "";
        }
    }

    const postData = async () => {
        const emailValidation = document.getElementById('emailValidation');
        const emailAlert = document.getElementById('emailAlert');
        const regx = /([a-zA-Z0-9]{3,15})+@+([a-zA-Z]{3,10})+\.+([a-zA-Z]{2,10})/;

        if (userName !== '' && userEmail !== '' && userPassword !== "" && userPassword === userRepeatPassword) {
            const emailValidateAlert = document.getElementById('emailValidateAlert');

            if (regx.test(userEmail)) {
                await axios.post(URL_API, {
                    name,
                    email,
                    password,
                    repeatPassword
                })
                console.log(name, password);
                Navigate('/login');
            }
            else {
                emailValidateAlert.innerHTML = 'Invalid email type';
                emailAlert.innerHTML = "";
            }
        }
    }

    const loginPage = () => {
        Navigate('/login')
    }

    return (
        <div className="signin_form">
            <div className="middle_signin_form">
                <span className="borderline_signin"></span>
                <div className="inside_signin_form">
                    <div>
                        <div className="signin">
                            <h1 className="form_head"> Signin Page</h1><br />
                        </div>

                        <div className="signin name_input"><h6>Name</h6>
                            <input
                                type="text"
                                name="username"
                                value={name}
                                className="input_boxes"
                                autoComplete="name"
                                onChange={(e) => setName(e.target.value)}></input><br />
                            <div id="nameAlert"></div>
                        </div>

                        <div className="signin email_input">
                            <h6>Email id</h6>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                autoComplete="email"
                                className="input_boxes"
                                onChange={(e) => setEmail(e.target.value)}></input><br />
                            <div id="emailAlert"></div>
                            <div id="emailValidateAlert"></div>
                        </div>

                        <div className="signin password_input">
                            <h6>Password</h6>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                className="input_boxes"
                                onChange={(e) => setPassword(e.target.value)}></input><br />
                            <div id="passwordAlert"></div>
                        </div>
                        <div className="signin repeatPassword_input">
                            <h6>Repeat Password</h6>
                            <input
                                type="password"
                                name="repeatPassword"
                                value={repeatPassword}
                                className="input_boxes"
                                onChange={(e) => { setRepeatpassword(e.target.value) }}></input><br />
                            <div id="repeatPasswordAlert"></div>

                        </div>
                        <div className="signin">
                            <button
                                onClick={() => {
                                    postData()
                                    emailVerify()
                                    nameVerify()
                                    passwordVerify()
                                    repeatPasswordVerify()
                                }} id="signinsubmitbtn">Submit</button><br />
                        </div>
                        <div></div>
                        <div className="user">
                            If you are a user please login
                        </div>
                        <div className="signin">
                            <button onClick={() => loginPage()} className="loginbtn">Login</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
};

export default Signin;