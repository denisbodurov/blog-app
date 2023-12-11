import style from './EntryList.module.scss';
import { Link }  from 'react-router-dom';

interface Entry {
  id: number;
  title: string;
  author: string;
  date: string;
}

interface EntryListProps {
  entries: Entry[];
  title: string;
}

function EntryList ({ entries, title} : EntryListProps) {
  return (
    <div className={style.root}>
      <h2>{title}</h2>
      {entries.map((entry) => (
        <div className={style.entry} key={entry.id}>
          <div>
            <Link to={'/entries/' + entry.id} className={style.title}>{entry.title}</Link>
            <p>Written by {entry.author}</p>
          </div>
          <p>{entry.date}</p>
        </div>
      ))}
    </div>
  );
};

export default EntryList;
