import style from "./PopUpErrorContent.module.css"

const PopUpError = () => {
    return () => {
        <div className={style["pop-up-error"]}>
            <div className={style["pop-up-error-container"]}>
                <div className={style["pop-up-error-body"]}>
                    <p className={style["pop-up-error-title"]}>Something went wrong</p>
                    <p className={style["pop-up-error-description"]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className={style["pop-up-error-button"]}>Close</div>
                </div>
            </div>
        </div>
    }
}

export default PopUpError