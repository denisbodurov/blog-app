import style from './entryList.module.scss'

interface Entry {
  id: number;
  title: string;
  author: string;
}

interface EntryListProps {
  entries: Entry[];
  title: string;
}

function EntryList ({ entries, title } : EntryListProps) {
  return (
    <div className={style.root}>
      <h2>{title}</h2>
      {entries.map((entry) => (
        <div className={style.entry} key={entry.id}>
          <div>
            <h2 className={style.title}>{entry.title}</h2>
            <p>Written by {entry.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EntryList;
