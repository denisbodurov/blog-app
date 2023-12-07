import style from './BlogList.module.scss'

interface Blog {
  id: number;
  title: string;
  author: string;
}

interface BlogListProps {
  blogs: Blog[];
  title: string;
  handleDelete: (id: number) => void;
}

const BlogList = ({ blogs, title, handleDelete } : BlogListProps) => {
  return (
    <div className={style.root}>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className={style.blog} key={blog.id}>
          <div>
            <h2 className={style.title}>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
          <button className={style.delete} onClick={() => handleDelete(blog.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
