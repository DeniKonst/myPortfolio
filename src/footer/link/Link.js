import style from './Link.module.css';


export const LinkItem = (props) => {
    const aStyle = {'textDecoration': 'none'}
    return (
        <div className={style.link}>
            <a href={'n'} style={aStyle}>{props.link}</a>
        </div>
    );
}


