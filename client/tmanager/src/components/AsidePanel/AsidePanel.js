import style from './AsidePanel.module.css';

const AsidePanel = () => {
    return (
        <aside className={style['aside-panel']}>
            <div className={style['burger']}></div>
            <a href='/tasks'>
                <div className={style['select-cube']}></div>
            </a>
            <a href='/cabinet'>
                <div className={style['settings']}></div>
            </a>
        </aside>
    )
}

export default AsidePanel