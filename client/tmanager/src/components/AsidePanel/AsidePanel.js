import style from './AsidePanel.module.css';

const AsidePanel = () => {
    return (
        <aside className={style['aside-panel']}>
            <div className={style['burger']}></div>
            <div className={style['select-cube']}></div>
            <div className={style['settings']}></div>
        </aside>
    )
}

export default AsidePanel