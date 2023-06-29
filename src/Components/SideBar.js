import react from 'react';

import styles from './SideBar.module.css';
import {AiOutlineHome, AiOutlineSearch, AiOutlineMessage, AiOutlineHeart} from 'react-icons/ai';
import {IoCreateOutline} from 'react-icons/io';
import { Link } from 'react-router-dom';

import SideBarItem from './SideBarItem';

const items = [
    'Home',
    'Search',
    'Message',
    'Notification',
    'Create'
];

const SideBar = () => {
    return (<div className={styles.bar}>
        <header>
            <Link to="/">
                <h2 className={styles.ins}>Instagram</h2> 
            </Link>   
        </header>

        <div className={styles.item}>
        {items.map(item => <SideBarItem title={item} key={item}/>)}
        </div>
    </div>);
}

export default SideBar;