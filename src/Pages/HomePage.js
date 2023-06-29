import styles from './HomePage.module.css';
import SideBar from '../Components/SideBar';

import Post from '../Components/Post';

const HomePage = () => {
    return <main>
        <div className={styles.central}>
           <Post /> 
        </div>
    </main>;
}

export default HomePage;