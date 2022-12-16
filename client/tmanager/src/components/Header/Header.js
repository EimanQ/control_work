import { auth } from '../../context/auth';
import style from './Header.module.css';
import HeaderItems from './HeaderItem';

const Header = () => {
    
    const link = [`Contact`, `Eu`];

    if (window.location.href === 'http://localhost:3000/') auth.isMain = true;
    
    else auth.isMain = false;

    return (

        <header>

            <div className={style['hs-logo']}></div>

            {
                auth.isMain ? <div className={style['active-buttons']}>
                    <div className={style["nt-slider"]}></div>
                    <div className={style['text-header']}>

                        {
                            link.map((el) => <HeaderItems name={el}{...el} />)
                        }
                        
                    </div>
                    <a href="/register">
                        <div className={style["registration"]}>
                            <p className={style["reg"]}>Sign Up</p>
                        </div>
                    </a>
                    <a href="/login">
                        <div className={style["login"]}>
                            <p className={style["log"]}>Login</p>
                        </div>
                    </a>
                </div > : null
            }

        </header >
    )
}

export default Header