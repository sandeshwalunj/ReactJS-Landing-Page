import React from 'react';

const Navbar = () => {
  return (
    <div className="text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4">
            <h1 className='my-auto '>Sandesh Walunj</h1>
          </div>
          <div className="col-6">
            <ul className="nav justify-content-between" style={{fontSize:'20px'}}>
              <li className="nav-item">
                <a className="nav-link text-white" href="#articles">Articles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#chats">Chats</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#awards">Awards</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#about">About</a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <button className="btn btn-warning btn-lg ">Get in touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
