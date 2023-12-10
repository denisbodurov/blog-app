import style from './Home.module.scss';
import EntryList from '../EntryList/EntryList';
import useFetch from '../../hooks/useFetch';

function Home() {

  const { error, isPending, data: entries } = useFetch('http://localhost:8000/entries');

    return (
      <div className={style.root}>
        {error && <div>{ error }</div>}
        {isPending && <div>Loading...</div>}
        {entries && <EntryList entries={entries} title="All Entries"/>}
      </div>
    );
  }
   
  export default Home;