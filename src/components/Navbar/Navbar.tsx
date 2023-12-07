import style from './Navbar.module.scss'

const Navbar = (props:any) => {
    return (
      <nav className={style.root}>
        <h1 className={style.title}>{props.title}</h1>
        <div className={style.links}>
          <a href="/">Home</a>
          <a className={style.create} href="/create">New Blog</a>
        </div>
      </nav>
    );
  }

  export default Navbar;