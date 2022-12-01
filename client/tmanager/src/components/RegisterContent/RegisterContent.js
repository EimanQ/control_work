import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import style from './RegisterContent.module.css';
import { request } from '../../hooks/http.hook';
import { userID } from '../../context/auth';



const RegisterContent = () => {
    const navigate = useNavigate();
    const [nameInput, setNameInput] = useState();
    const [emailInput, setEmailInput] = useState();
    const [fPassInput, setFPassInput] = useState();
    const [sPassInput, setSPassInput] = useState();


    const doReg = async () => {
        const response = await request('http://localhost:3003/users/register', 'POST', { name: nameInput, email: emailInput, password: fPassInput })
        if (response[0] != false) {
            userID.id = response[1][0].id
            navigate('/tasks', { state: { id: userID.id } });
        }
    }
    return (
        <>
            <section className={style["reg-section"]}>
                <div className={style["reg-zone"]}>
                    <div className={style["reg-text"]}>
                        <p>Already have an account?</p>
                        <a href="./login"><p className={style["sign"]}>Sign in</p></a>
                    </div>
                    <div className={style["welcome"]}>
                        <p>Welcome to</p>
                        <div className={style["hs-logo"]}></div>
                    </div>
                    <p className={style["enjoy-text"]}>Join and plan your week with Hschool</p>
                    <div className={style["inputs-reg"]}>
                        <input
                            type="text"
                            className={style["reg-fname"]}
                            placeholder="Full name"
                            required
                            onChange={(e) => setNameInput(e.target.value)}
                        />
                        <input
                            type="email"
                            className={style["reg-email"]}
                            placeholder="Email"
                            required
                            onChange={(e) => setEmailInput(e.target.value)}
                        />
                        <input
                            type="password"
                            className={style["reg-password"]}
                            placeholder="Password"
                            required
                            onChange={(e) => setFPassInput(e.target.value)}
                        />
                        <input
                            type="password"
                            className={style["reg-password-conf"]}
                            placeholder="Confirm Password"
                            required
                            onChange={(e) => setSPassInput(e.target.value)}
                        />
                    </div>
                    <div className={style["button-reg"]} onClick={doReg}>
                        <p>Create an account</p>
                    </div>
                </div>
                <div className={style["task-footage"]}></div>
            </section>
        </>
    )
}

export default RegisterContent;