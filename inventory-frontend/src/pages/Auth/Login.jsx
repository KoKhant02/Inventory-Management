import { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({ email: false, password: false });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (email) =>
    /^\S+@\S+\.\S+$/.test(email);

  const isValidPassword = (pass) =>
    pass.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    setError('');
    setSuccess('');

    if (!validateEmail(email) || !isValidPassword(password)) return;

    // const response = await axios.post('/api/login', { email, password });
    // const { token, user } = response.data;

    if (email === 'admin@gmail.com' && password === 'admin123') {
      setSuccess('Login successful!');
    } else {
      setError('Email or password is incorrect');
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center bg-white">
      <h2 className="mb-5 fw-bold text-center">Welcome To Inventory Management</h2>

      <div className="shadow p-5 rounded-4 bg-white" style={{ maxWidth: '400px', width: '100%' }}>
        <h5 className="fw-bold text-center mb-3">Login Here!</h5>
        <p className="text-center text-muted mb-4" style={{ fontSize: '0.9rem' }}>
          Enter your email and password to login for this app
        </p>

        <form noValidate onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className={`form-control ${touched.email && !validateEmail(email) ? 'is-invalid' : ''}`}
              placeholder="email@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
              required
            />
            {touched.email && !validateEmail(email) && (
              <div className="invalid-feedback">Please enter a valid email address.</div>
            )}
          </div>

          <div className="mb-3">
            <input
              type="password"
              className={`form-control ${touched.password && !isValidPassword(password) ? 'is-invalid' : ''}`}
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
              required
            />
            {touched.password && !isValidPassword(password) && (
              <div className="invalid-feedback">Password must be at least 6 characters long.</div>
            )}
          </div>

          {error && <div className="text-danger text-center mb-2">{error}</div>}
          {success && <div className="text-success text-center mb-2">{success}</div>}

          <button type="submit" className="btn btn-dark w-100">
            Sign up with email
          </button>
        </form>

        <p className="text-center text-muted mt-3" style={{ fontSize: '0.8rem' }}>
          By clicking continue, you agree to our{' '}
          <a href="#" className="text-decoration-none">Terms of Service</a> and{' '}
          <a href="#" className="text-decoration-none">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
