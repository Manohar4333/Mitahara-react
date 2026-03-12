import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Navbar() {
	const [showMenu, setShowMenu] = useState(false);
	const token = localStorage.getItem('token');
	const loggedIn = !!token;

	const handleIconClick = () => {
		setShowMenu(!showMenu);
	};

	const handleLogout = () => {
		localStorage.removeItem('token');
		window.location.reload();
	};

	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<a className='navbar-brand'><img src={logo} style={{width:'150px'}} alt='' /></a>
			<button className="navbar-toggler"></button>
			
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link className="nav-link" to='/'>Home</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to='/blogs'>Blogs</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to='/about-us'>About Us</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to='/contact'>Contact</Link>
					</li>
				</ul>
			</div>
			
			<div className='navbar-right'>
				<Link to='/cart' className='cart-icon'>
					<i class="fa-solid fa-cart-shopping" style={{color:"rgb(0, 0, 0)"}}></i>
				</Link>
				<div className='login-icon-box'>
					<span className='login-icon' onClick={handleIconClick} title={loggedIn ? 'Logged In' : 'Login'}>
						<i className={loggedIn ? 'fas fa-user-check' : 'fas fa-user'} style={{fontSize: '28px', color: loggedIn ? '#4caf50' : '#333'}}></i>
					</span>
					{showMenu && (
						<div className='login-menu'>
							{loggedIn ? (
								<button className='login-menu-btn' onClick={handleLogout}>Logout</button>
							) : (
								<Link to='/login' className='login-menu-btn' onClick={() => setShowMenu(false)}>Login</Link>
							)}
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;