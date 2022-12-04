import style from './Cabinet.module.css';
import { userName, userEmail } from '../../context/auth'

const CabinetContent = () => {

    const currrentUserName = userName.name;
    const currentEmail = userEmail.email;

    console.log(currrentUserName);

    return (
        <>
            <section>
                <div className={style['back-ground']}> </div>

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
                        <p className={style['name']}>{currrentUserName}</p>
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
                            <input className={style['name-input']} placeholder='Full Name' type='text'></input>
                        </div>
                        <div className={style['email-zone']}>
                            <p>New Email</p>
                            <input className={style['email-input']} placeholder='Email'></input>
                        </div>
                        <div className={style['pass-zone']} >
                            <p>New Password</p>
                            <input className={style['pass-input']} placeholder='Password' type='number'></input>
                        </div>
                        <div className={style['button-save']}>
                            <p>Save</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CabinetContent;