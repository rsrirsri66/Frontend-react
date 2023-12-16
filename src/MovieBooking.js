import React from 'react';
import './MovieBooking.css'
import JailerImage from './pic/9041036.jpg';
import VikramImage from './pic/vikram.jpg';
import Johnwick from './pic/download.jpg';
import { Link } from 'react-router-dom';

const MovieBooking = () => {
  return (
    
    <div className='book'>
      <title>Booking</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="style.css" />
      <center><h3 style={{ color: 'rgb(201, 131, 1)' }}><b>MOVIES</b></h3></center>
      <div className="tabular" style={{ color: 'rgb(201, 131, 1)' }}>
        <ul>
          <Link to="/login" style={{ color: 'rgb(201, 131, 1)' }}><li>Home</li></Link>
          <a href=" " style={{ color: 'rgb(201, 131, 1)' }}><li>About us</li></a>
          <a href="snack.html" style={{ color: 'rgb(201, 131, 1)' }} target="_blank"><li>Food &amp; Beverage</li></a>
          <Link to="/register" style={{ color: 'rgb(201, 131, 1)' }}><li>Signup</li></Link>
        </ul>
      </div>
      <div className="u">
        <div className="card">
          <img src={JailerImage} className="card-img-top" alt="JAILER" />
          <div className="card-body text-center">
            <h5 className="card-title"><b>Jailer</b></h5>
            <p className="card-text">Super Star Rajnikanth in Jailer.
              Written-Directed <br />
              Nelson
            </p>
            <p><button>Book</button></p>
          </div>
        </div>
        <div className="card" style={{ width: '300px' }}>
          <img src={VikramImage} className="card-img-top" alt="JAILER" />
          <div className="card-body text-center">
            <h5 className="card-title"><b>Vikram</b></h5>
            <p className="card-text">Ulaganayagan Kamal Hassan in Vikram.
              Written-Directed <br />
              Lokeshkanagaraj
            </p>
            <p><button>Book</button></p>
          </div>
        </div>
        <div className="card" style={{ width: '300px' }}>
          <img src={Johnwick} className="card-img-top" alt="John wick" />
          <div className="card-body text-center">
            <h5 className="card-title"><b>John Wick</b></h5>
            <p className="card-text">Keanu Reeves in John Wick.<br />
              Written-Directed <br />
              Chad Stahelski
            </p>
            <p><button>Book</button></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBooking;
