import style from './MainContent.module.css'

const MainContent = () => {
    return (

        <section className={style['main-section']}>
            <div className={style["reg-bar"]}>
                <p className={style["info-title"]}>Task Management & To-Do List</p>
                <p className={style["info-main"]}>
                    This productive tool is designed to help you better manage your task
                    conveniently!
                </p>
                <a href="/Login">
                    <div className={style["button-start"]}>
                        <p className={style["start"]}>Let's Start</p>
                        <div className={style["arrow"]}>
                        </div>
                    </div>
                </a>
            </div>
            <div className={style["wave"]}></div>
            <div className={style["footage"]}></div>
        </section>

    );
}
export default MainContent

