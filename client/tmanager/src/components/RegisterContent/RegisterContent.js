import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import style from './RegisterContent.module.css';
import { request } from '../../hooks/http.hook';
import { userID, userEmail, userName } from '../../context/auth';
import PopUpError from '../PopUpErrorContent/PopUpErrorContent';




const RegisterContent = () => {

    const navigate = useNavigate();

    const [nameInput, setNameInput] = useState();
    const [emailInput, setEmailInput] = useState();
    const [fPassInput, setFPassInput] = useState();
    const [sPassInput, setSPassInput] = useState();
    const [triggerPoint, setTriggerPoint] = useState(false);
    const [popUpError, setPopUpError] = useState(``);


    const doReg = async () => {
        try {
            if (!/^[a-zA-Zа-яА-Я]{2,16}$/.test(nameInput)) throw new Error(`The "FullName" field can contain only letters and contain at least two characters`);

            if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(emailInput)) throw new Error(`Check the spelling of the "Email" field`);

            if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(fPassInput)) throw new Error(`Use at least 8 characters. Use upper and lower case. Use 1 or more number. Use minimum 1 special character`);

            if (fPassInput !== sPassInput) throw new Error(`Your passwords have to match!`);

            const response = await request('http://localhost:3003/users/register', 'POST', { name: nameInput, email: emailInput, password: fPassInput });

            if (response[0] != false) {
                userID.id = response[1][0].id;
                userName.name = response[1][0].fullname;
                userEmail.email = response[1][0].email;
                navigate('/tasks', { state: { id: userID.id, name: userName.name, email: userEmail.email } });
            } else throw new Error(response[1]);
            
        } catch (error) {
            setPopUpError(error.message);
            setTriggerPoint(true);
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

                <PopUpError trigger={triggerPoint} error={popUpError} setTrigger={setTriggerPoint} />
            </section>
        </>

    )
}

export default RegisterContent;