import style from './Create.module.scss';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {

    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const date : string = new Date().toUTCString();
    const author: string = 'Sonia';
    const navigate = useNavigate();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const entry = { title, body, author, date };
    
        await fetch('http://localhost:8000/entries/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(entry)
        }).then(() => {
          navigate('/');
        })
    }

  return (
    <div className={style.root}>
      <h2 className={style.title}>Add a New Entry</h2>
      <form onSubmit={handleSubmit}>
        <label className={style.label}>Dream title</label>
        <input
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className={style.label}>Dream description</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button className={style.add}>Add Dream</button>
      </form>
    </div>
  );
}
 
export default Create;