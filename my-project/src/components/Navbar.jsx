import React from 'react'
import "../styles/navcss.css"

const Navbar = (props) => {
  
  return (
    
  
       
    
          <div >
            <nav className="item1 navbar navbar-expand-lg bg-body-tertiary">
              <div className="nav1 container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="but1 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                  </ul><div >Cart value:<span>{props.total}</span> </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="but1 btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
                
              </div>
            </nav>
          </div>
        );
      }
    

export default Navbar