import { useState, useEffect } from 'react';
import style from './Cabinet.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { request } from '../../hooks/http.hook';

const CabinetContent = () => {

    const [userInfo, setUserInfo] = useState([]);

    const [infoState, setInfoState] = useState(true);

    const [updateName, setUpdateName] = useState(``);

    const [updateEmail, setUpdateEmail] = useState(``);

    const [updatePass, setUpdatePass] = useState(``);

    const { state } = useLocation();

    const currentID = state.id;

    const navigate = useNavigate();

    const goTaskManager = () => {
        navigate('/tasks', { state: { id: currentID, name: userInfo[1][0].fullname, email: userInfo[1][0].email } })
    }

    const sendUpdates = async () => {
        if (updateName.length > 0) {
            const responseUpdateName = await request(`http://localhost:3003/users/updateName/${currentID}`, `PATCH`, { id: currentID, name: updateName })
            if (responseUpdateName) {
                if (!infoState) setInfoState(true)
                else setInfoState(false)
            }
        };
        if (updateEmail.length > 0) {
            const responseUpdateEmail = await request(`http://localhost:3003/users/updateEmail/${currentID}`, `PATCH`, { id: currentID, email: updateEmail })
            if (responseUpdateEmail) {
                if (!infoState) setInfoState(true)
                else setInfoState(false)
            }
        };
        if (updatePass.length > 0) {
            const responseUpdatePass = await request(`http://localhost:3003/users/updatePass/${currentID}`, `PATCH`, { id: currentID, pass: updatePass })
            if (responseUpdatePass) {
                if (!infoState) setInfoState(true)
                else setInfoState(false)
            }
        };
    }

    useEffect(() => {

        const requestDB = async () => {
            const responseGet = await request(`http://localhost:3003/users/getData/${currentID}`, 'GET');
            return setUserInfo(responseGet);
        }
        requestDB();

        console.log(infoState);

    }, [infoState, currentID])

    return (
        <>
            <section>

                <aside className={style['aside-panel']}>
                    <div className={style['burger']}></div>
                    <div className={style['select-cube']} onClick={goTaskManager}></div>
                    <div className={style['settings']}></div>
                </aside>

                <div className={style[`content`]}>

                    <div className={style['back-ground']}>
                        <div className={style['main-content']}>

                            <div className={style['header']}>
                                <div className={style['hs-logo']}></div>
                                <a href='/'>
                                    <div className={style['logout-button']}>
                                        <p>Log Out</p>
                                    </div>
                                </a>
                            </div>

                            <div className={style['contact-info']}>
                                <p className={style['name']}>{userInfo.length > 0 ? userInfo[1][0].fullname : null}</p>
                                <p className={style['email']}>{userInfo.length > 0 ? userInfo[1][0].email : null}</p>
                            </div>
                        </div>

                        <div className={style['personal-zone']}>
                            <div className={style['profile-header']}>
                                <p>My Profile</p>
                            </div>
                            <div className={style['edit-zone']}>
                                <div className={style['name-zone']}>
                                    <p>New Name</p>
                                    <input className={style['name-input']} placeholder='Full Name' type='text' onChange={(e) => setUpdateName(e.target.value)}></input>
                                </div>
                                <div className={style['email-zone']}>
                                    <p>New Email</p>
                                    <input className={style['email-input']} placeholder='Email' onChange={(e) => setUpdateEmail(e.target.value)}></input>
                                </div>
                                <div className={style['pass-zone']} >
                                    <p>New Password</p>
                                    <input className={style['pass-input']} placeholder='Password' type='number' onChange={(e) => setUpdatePass(e.target.value)}></input>
                                </div>
                                <div className={style['button-save']} onClick={sendUpdates}>
                                    <p>Save</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CabinetContent;