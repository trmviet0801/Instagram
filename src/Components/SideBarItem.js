import { Link } from 'react-router-dom';

import styles from './SideBarItem.module.css';

const SideBarItem = (props) => {
    const icon = '/Icons/' + props.title + '.png';

    return <div className={styles.navigate}>
        <Link to="/abc">
            <img alt={props.title} src={`../Icons/${props.title}.png`} width='20' height='20'/>
            <span>{props.title}</span>
        </Link>
    </div>
}

export default SideBarItem;