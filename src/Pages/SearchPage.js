import SearchForm from '../Components/SearchForm';
import HomePage from './HomePage';
import styles from './SearchPage.module.css';

const SearchPage = () => {
    return <div>
        <div className={styles.searchForm}>
            <SearchForm />
            <div className={styles.result}>

            </div>
        </div>
    </div>
}
export default SearchPage;