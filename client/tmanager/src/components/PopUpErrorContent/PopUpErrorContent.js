import style from "./PopUpErrorContent.module.css"

const PopUpError = (props) => {
    return (props.trigger) ? (
        <div className={style["pop-up-error"]}>
            <div className={style["pop-up-error-container"]}>
                <div className={style["pop-up-error-body"]}>
                    <p className={style["pop-up-error-title"]}>Something went wrong</p>
                    <p className={style["pop-up-error-description"]}>{props.error}</p>
                    <div className={style["pop-up-error-button"]} onClick={() => props.setTrigger(false)}>Close</div>
                </div>
            </div>
        </div>
    ) : null

}

export default PopUpError