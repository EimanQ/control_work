import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { request } from '../../hooks/http.hook';
import { auth, userID, userEmail, userName } from '../../context/auth'
import style from './LoginContent.module.css';

const LoginContent = () => {

    const navigate = useNavigate();

    const [emailInput, setEmailInput] = useState();
    const [passInput, setPassInput] = useState();

    const doLogin = async () => {

        const response = await request('http://localhost:3003/users/login', 'POST', { email: emailInput, password: passInput })

        if (response[0] != false) {

            userID.id = response[1][0].id;
            userName.name = response[1][0].fullname;
            userEmail.email = response[1][0].email;

            navigate('/tasks', { state: { id: userID.id, name: userName.name, email: userEmail.email } });
        }
    }

    return (

        <section className={style["login-section"]}>
            {
                auth.isMain = false
            }
            <div className={style["login-bar"]}>
                <p className={style["title-back"]}>Welcome back!</p>
                <div className={style["inputs-login"]}>
                    <input type="email" className={style["login-email"]} placeholder="Email" onChange={(e) => setEmailInput(e.target.value)} />
                    <input type="password" className={style["login-password"]} placeholder="Password" onChange={(e) => setPassInput(e.target.value)} />
                </div>
                <div className={style["button-login"]} onClick={doLogin}>
                    <p className={style["continue"]}>Continue</p>
                </div>
                <div className={style["text-login"]}>
                    <p>Not a member?</p>
                    <a href="/register">
                        <p className={style["create-account"]}>Create an account</p>
                    </a>
                </div>
            </div>
            <div className={style["task-footage"]}></div>
        </section>
    )
    
}

export default LoginContent