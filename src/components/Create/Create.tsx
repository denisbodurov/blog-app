import { useState } from "react";
import { useNavigate } from "react-router-dom";

const [title, setTitle] = useState<string>('');
const [body, setBody] = useState<string>('');
const navigate = useNavigate();



function Create() {

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const entry = { title, body };
    
        fetch('http://localhost:8000/entries/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(entry)
        }).then(() => {
          navigate('/');
        })
    }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
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
        <button>Add Entry</button>
      </form>
    </div>
  );
}
 
export default Create;