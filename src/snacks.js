import React from 'react';
import picss from "./pic/snac.jpg"
import picss1 from "./pic/pexels-photo-4113664.jpeg"
import "../src/MovieBooking.css"
const Snack=()=>{
      return (
        <div className='book'>
          <meta charSet="utf-8" />
          <meta name="viewpoint" content="width=device-width,initial-scale=1" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style dangerouslySetInnerHTML={{__html: "\n\n.flip-card {\n  background-color: transparent;\n  width: 300px;\n  height: 300px;\n  perspective: 1000px;\n}\n\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n}\n\n.flip-card:hover .flip-card-inner {\n  transform: rotateY(180deg);\n}\n\n.flip-card-front, .flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.flip-card-front {\n  background-color: #bbb;\n  color: black;\n}\n\n.flip-card-back {\n  background-color: #091e2d;\n  color: white;\n  transform: rotateY(180deg);\n}\n.flip-card {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    max-width: 300px;\n    margin: 30px;\n    text-align: center;\n    font-family: arial;\n    transition: 0.3s;\n    width: 40%;\n    border-radius: 5px;\n  }\n  .u{\n    display: flex;\n    justify-content: center;\n}\n.tabular ul {\n    list-style: none;\n    padding: 0;\n    display: flex;\n  }\n.tabular li {\n    margin-right: 20px;\n    padding: 10px;\n    padding-top: 15px;\n    font-family: 'Open Sans', sans-serif;\n    font-weight: bolder;\n    font-size: larger;\n    \n  }\n  .tabular{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(0, 0, 0);\n  }\n  .tabular a{\n    color: inherit;\n    text-decoration: none;\n  }\n  .tabular li:hover\n  {\n    background-color: #e0e0e0;\n  }\n" }} />
          <p id={1} />
          <p id={2} />
          <center>  <h3 style={{color: 'rgb(201, 131, 1)'}}><b>Beverages &amp; Snacks</b></h3></center>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="tabular" style={{color: 'rgb(201, 131, 1)'}}>
            <ul>
              <a href="login.html" style={{color: 'rgb(201, 131, 1)'}}> <li>Home</li></a>
              <a href=" " style={{color: 'rgb(201, 131, 1)'}}> <li>About us</li></a>
              <a href="snack.html" style={{color: 'rgb(201, 131, 1)'}} target="_blank"> <li>Food &amp; Beverage</li></a>
              <a href="register.html" style={{color: 'rgb(201, 131, 1)'}}> <li>Signup</li></a>
            </ul>
          </div>
          <div className="u">
            <div className="flip-card" style={{width: '300px'}}>
              <h5 className="card-title" style={{color: 'black'}}><b>Beverages</b></h5>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={picss1} alt="Avatar" style={{width: '300px', height: '300px'}} />
                </div>
                <div className="flip-card-back">
                  <h1 style={{color: 'rgb(201, 131, 1)'}}><b>Menu</b></h1> 
                  <p>Pepsi</p> 
                  <p>Coke</p>
                  <p>7Up</p>
                  <p>Lime</p>
                </div>
              </div>
              <button type="button" className="btn btn-dark" onclick="output()">Order</button>
            </div>
            <div className="flip-card">
              <h5 className="card-title" style={{color: 'black'}}><b>Snacks</b></h5>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={picss} alt="Avatar" style={{width: '300px', height: '300px'}} />
                </div>
                <div className="flip-card-back">
                  <h1 style={{color: 'rgb(201, 131, 1)'}}><b>Menu</b></h1> 
                  <p>PopCorn</p> 
                  <p>Puffs</p>
                  <p>Burger</p>
                  <p>Pizza</p>
                </div>
              </div>
              <button type="button" className="btn btn-dark" onclick="input()">Order</button>
            </div>
          </div>
        </div>
      );
    };
export default Snack;