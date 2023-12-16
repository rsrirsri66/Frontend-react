import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate(); 
  
    const handleSubmit = (event) => {
      // Perform form submission logic here
  
      // After successful submission, navigate to the login page
      navigate('/login');
  
      // Prevent the default form submission behavior
      event.preventDefault();
    };
  return (
    
    <div className='r'>
      
      <title>Register</title>
      <meta charSet="utf-8" />
      <meta name="viewpoint" content="width=device-width,initial-scale=1" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" />
      <h1>User Registration</h1>
      <form className='res' onSubmit={handleSubmit}>
    
      
        <table>
          <tbody>
            <tr>
              <td style={{ color: 'rgb(0, 0, 0)' }}>
                <label className='reslab' htmlFor="fname"><b>FIRST NAME:</b></label>
              </td>
              <td>
                <input type="text" id="fuser" name="firstname" placeholder="firstname" required />
              </td>
            </tr>
            <tr>
              <td style={{ color: 'rgb(0, 0, 0)' }}>
                <label className='reslab'  htmlFor="lname"><b>LAST NAME:</b></label>
              </td>
              <td>
                <input type="text" id="luser" name="lastname" placeholder="lastname" required />
              </td>
            </tr>
            <tr>
  <td style={{ color: 'rgb(0, 0, 0)' }}>
    <label className='reslab' htmlFor="uemail"><b>EMAIL ID:</b></label>
  </td>
  <td>
    <input type="email" id="mail" name="Email" placeholder="abc123@gmail.com" required />
  </td>
</tr>
<tr>
  <td style={{ color: 'rgb(0, 0, 0)' }}>
    <label className='reslab'  htmlFor="MbNo"><b>MOBILE NO:</b></label>
  </td>
  <td>
    <input type="number" id="mob" name="mobilenum" placeholder={1234567890} required />
  </td>
</tr>
<tr>
  <td style={{ color: 'rgb(0, 0, 0)' }}>
    <label className='reslab'  htmlFor="pass"><b>NEW PASSWORD:</b></label>
  </td>
  <td>
    <input type="password" id="passw" name="password" placeholder="e.g:abcd@123" required />
  </td>
</tr>
<tr>
  <td style={{ color: 'rgb(0, 0, 0)' }}>
    <label className='reslab' htmlFor="newpass"><b>CONFIRM PASSWORD:</b></label>
  </td>
  <td>
    <input type="password" id="newpas" name="newpassword" placeholder="abcd@123" required />
  </td>
</tr>

  <td />
            {/* <tr>
              <td>
               
              </td>
            </tr> */}
          </tbody>
        </table>
        <div className="button-container">
        <button type="submit" className="btn btn-success">submit</button>
                <button type="reset" className="btn btn-warning">reset</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
