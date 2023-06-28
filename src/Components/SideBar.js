import react from 'react';

import styles from './SideBar.module.css';
import {AiOutlineHome, AiOutlineSearch, AiOutlineMessage, AiOutlineHeart} from 'react-icons/ai';
import {IoCreateOutline} from 'react-icons/io';

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
            <h3 className={styles.ins}>Instagram</h3>    
        </header>

        {items.map(item => <SideBarItem title={item} key={item}/>)}
    </div>);
}

export default SideBar;