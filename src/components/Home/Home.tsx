import { useState } from 'react'
import style from './Home.module.scss'
import BlogList from '../BlogList/BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
      { title: 'Meow', body: 'lorem ipsum...', author: 'Sonia', id: 1 },
      { title: 'Sass is weird', body: 'lorem ipsum...', author: 'Denis', id: 2 },
      { title: 'Bingus', body: 'lorem ipsum...', author: 'Aelx', id: 3 }
    ])

    const handleDelete = (id:number) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }
    return (
      <div className={style.root}>
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      </div>
    );
  }
   
  export default Home;