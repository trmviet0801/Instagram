import react, { useState } from 'react';

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
    const [buttonLogOut, setButtonLogOut] = useState(false);

    const moreHandler = () => {
        setButtonLogOut(prevState => !prevState);
    }

    return (<div className={styles.bar}>
        <header>
            <Link to="/">
                <h2 className={styles.ins}>Instagram</h2> 
            </Link>   
        </header>

        <div className={styles.item}>
        {items.map(item => <SideBarItem title={item} key={item}/>)}
        </div>

        <div className={styles.setting}>
            <div className={buttonLogOut ? styles.logout : styles.hidden}>
                <Link to='/loggin'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height='30' width='30' stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    <span>Log out</span>
                </Link>
            </div>
            <button className={styles.settings} onClick={moreHandler}>
                <img src='../Icons/Setting.png' width="20" />
                <span>More</span>
            </button>
        </div>
    </div>);
}

export default SideBar;