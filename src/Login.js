import React from 'react';
import './LoginComponent.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginComponent=()=> {
  const navigate = useNavigate(); 
  
  const handleSubmit = (event) => {
    // Perform form submission logic here

    // After successful submission, navigate to the login page
    navigate('/movie');

    // Prevent the default form submission behavior
    event.preventDefault();
  };
    return (
      <div className='center-container'>
        <title>Check Box</title>
        <meta charSet="utf-8" />
        <meta name="viewpoint" content="width=device-width,initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" />

        <div className="m-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="inputemail"><b>Email</b></label>
              <input type="email" className="form-control" id="inputemail" placeholder="Email" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="inputPassword"><b>Password</b></label>
              <input type="password" className="form-control" id="inputPassword" placeholder="Password" required />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="checkremember" />
                <label className="form-check-label" htmlFor="checkremember"><b>Remember me</b></label>
              </div>
            </div>
            <button type="submit" className="sign">Sign in</button>
            <br />
            <Link to="/forgetpass" className="c" target="_blank">Forget Password</Link>
            <Link to="/register" className="d" target="_blank">Sign up</Link>
          </form>
        </div>
      </div>
    );
  }


export default LoginComponent;