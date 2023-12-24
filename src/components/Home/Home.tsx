import style from "./Home.module.scss";
import EntryList from "../EntryList/EntryList";
import useFetch from "../../utils/hooks/useFetch";

function Home() {
  const {
    error,
    isPending,
    data: entries,
  } = useFetch("http://localhost:8000/entries");

  return (
    <div className={style.root}>
      {error && <div className={style.status}>{error}</div>}
      {isPending && <div className={style.status}>Loading...</div>}
      {entries && <EntryList entries={entries} title="All Entries" />}
    </div>
  );
}

export default Home;
