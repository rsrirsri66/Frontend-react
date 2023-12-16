import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';

const ResetPassword = () => {
    const navigate = useNavigate(); 
  
    const handleSubmit = (event) => {
      // Perform form submission logic here
  
      // After successful submission, navigate to the login page
      navigate('/login');
  
      // Prevent the default form submission behavior
      event.preventDefault();
    };
  return (
    <div className='pass'>
      <title>Reset</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" />
     
      <form className='ress' onSubmit={handleSubmit}>
        
      <div className="mb-3">
              <label className="form-label" htmlFor="inputemail"><b>EMAIL ID</b></label>
              <input type="email" className="form-control" id="inputemail" placeholder="Email" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="inputPassword"><b>PASSWORD</b></label>
              <input type="password" className="form-control" id="inputPassword" placeholder="Password" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="inputPassword"><b>CONFIRM PASSWORD</b></label>
              <input type="password" className="form-control" id="inputPassword" placeholder="Password" required />
            </div>
            <button type="submit" className="sign">submit</button>
        
      </form>
    </div>
  );
};

export default ResetPassword;
