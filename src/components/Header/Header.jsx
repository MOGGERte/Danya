import s from "./styles.module.css"

export const Header = () => {
    return (
        <div className={s.Header}>
            <div>
                <img className={s.logo} src="https://upload.wikimedia.org/wikipedia/ru/thumb/4/4e/Patrick_star-4854.jpg/274px-Patrick_star-4854.jpg"/>
            </div>
            <input className={s.search} placeholder="введите текст"></input>
            <button className={s.auth}>auth</button>
        </div>
    );
};