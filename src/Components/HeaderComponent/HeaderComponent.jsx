import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classes from './HeaderComponent.module.css'

const HeaderComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const onBack = () => navigate(-1);

    return (
        <nav className={classes.nav}>
            <h1>Logo</h1>
            <ul className={classes.nav_navbar}>
                <li>
                    <Link  className={classes.link} to="/" state={{ from: location.pathname }}>Main</Link>
                </li>
                <li>
                    <Link className={classes.link} to="/users" state={{ from: location.pathname }}>Users</Link>
                </li>
                <li>
                    <Link className={classes.link} to="/posts" state={{ from: location.pathname }}>Poat</Link>
                </li>
                <li><Link className={classes.link} to={location.state?.from} state={{ from: location.pathname }}  >Back</Link></li>
                <li>
                    <button onClick={onBack}>back</button>
                </li>

            </ul>
        </nav>
    );
}

export default HeaderComponent;
