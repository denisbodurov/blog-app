import style from './Navbar.module.scss'
import { Link } from 'react-router-dom';

function Navbar (props:any) {
    return (
      <nav className={style.root}>
        <h1 className={style.title}>{props.title}</h1>
        <div className={style.links}>
          <Link to="/">Home</Link>
          <Link className={style.create} to="/create">New Entry</Link>
        </div>
      </nav>
    );
}

  export default Navbar;