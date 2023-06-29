import { NavLink } from 'react-router-dom';

import styles from './SideBarItem.module.css';

const SideBarItem = (props) => {
    const icon = '/Icons/' + props.title + '.png';

    let path = props.title.toLowerCase();

    if (path === 'home') {
        path = '';
    }

    return <div className={styles.navigate}>
        <NavLink to={`/${path}`} className={({ isActive }) => (isActive ? styles.active : '')}>
            <img alt={props.title} src={`../Icons/${props.title}.png`} width='20' height='20' className={styles.image}/>
            <span>{props.title}</span>
        </NavLink>
    </div>
}

export default SideBarItem;