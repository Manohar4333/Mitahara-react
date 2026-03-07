
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Auth.css';

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check localStorage for user info (simulate user session)
    const user = localStorage.getItem('user');
    const adminFlag = localStorage.getItem('isAdmin');
    if (user) {
      setLoggedInUser(JSON.parse(user));
      setIsAdmin(adminFlag === 'true');
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    // Static admin login
    if (isLogin && form.username === 'admin' && form.password === '4333') {
      const adminUser = { username: 'admin' };
      localStorage.setItem('user', JSON.stringify(adminUser));
      localStorage.setItem('isAdmin', 'true');
      setLoggedInUser(adminUser);
      setIsAdmin(true);
      onLogin && onLogin(adminUser);
      return;
    }
    try {
      if (isLogin) {
        const res = await axios.post('http://localhost:4300/auth/login', {
          email: form.email,
          password: form.password,
        });
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        localStorage.setItem('isAdmin', 'false');
        setLoggedInUser(res.data.user);
        setIsAdmin(false);
        onLogin(res.data.user);
      } else {
        await axios.post('/auth/register', form);
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error occurred');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isAdmin');
    setLoggedInUser(null);
    setIsAdmin(false);
    setForm({ username: '', email: '', password: '' });
    setError('');
    setIsLogin(true);
    window.location.href = '/'; // Redirect to Home page after logout
  };

  if (loggedInUser) {
    return (
      <div className="auth-container">
        <div className="auth-card logged-in-card">
          <h2 className="auth-title">Welcome!</h2>
          <div className="user-info">
            <span className="user-icon">👤</span>
            <span className="user-name">{loggedInUser.username || loggedInUser.email} has logged in</span>
            {isAdmin && <div style={{ color: 'green', fontWeight: 'bold', marginTop: '8px' }}>Admin Access Granted</div>}
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Enter your username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>
          {!isLogin && (
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="auth-btn">{isLogin ? 'Login' : 'Register'}</button>
        </form>
        <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Create an account' : 'Already have an account? Login'}
        </button>
        {error && <div className="auth-error">{error}</div>}
      </div>
    </div>
  );
}

export default Auth;

