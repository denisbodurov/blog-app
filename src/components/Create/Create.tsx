import style from './Create.module.scss';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const [title, setTitle] = useState<string>('');
const [body, setBody] = useState<string>('');
const navigate = useNavigate();



function Create() {

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const entry = { title, body };
    
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
      <h2 className={style.title}>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label className={style.label}>Blog title:</label>
        <input
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button className={style.add}>Add Entry</button>
      </form>
    </div>
  );
}
 
export default Create;