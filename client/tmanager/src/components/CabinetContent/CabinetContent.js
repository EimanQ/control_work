import { useEffect, useState } from 'react';
import style from './Cabinet.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

const CabinetContent = () => {

    const [saveBtn, setSaveBtn] = useState(false);

    const [updateName, setUpdateName] = useState(``);

    const [updateEmail, setUpdateEmail] = useState(``);

    const [updatePass, setUpdatePass] = useState(``);

    const { state } = useLocation();

    const currentID = state.id;
    let currentUserName = state.name;
    let currentEmail = state.email;

    const navigate = useNavigate();

    const goTaskManager = () => {
        navigate('/tasks', { state: { id: currentID, name: currentUserName, email: currentEmail } })
    }

    const sendUpdates = async () => {

        if (updateName) { };
        if (updateEmail) { };
        if (updatePass) { };
    }

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
                                <p className={style['name']}>{currentUserName}</p>
                                <p className={style['email']}>{currentEmail}</p>
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