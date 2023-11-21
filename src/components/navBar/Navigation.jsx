import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../home/Home'
import Blog from '../blog/Blog'
import Addblog from '../addBlog/Addblog'
import Contact from '../contact/Contact'

const Navigation = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg " id= "bootStyle">
        <div class="container-fluid">
            {/* <a class="navbar-brand" href="#">My Blog</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="bootStyle2">
                <li className="nav-item" >
                <Link to={Home} className="nav-link active" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                <Link to={Blog} className="nav-link active" aria-current="page" >Blog</Link>
                </li>
                <li className="nav-item">
                <Link to={Addblog} className="nav-link active" aria-current="page" >Addblog</Link>
                </li>
                <li className="nav-item">
                <Link to={Contact}  className="nav-link active" aria-current="page" >Contact</Link>
                </li>
                
            
            </ul>
            
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>

            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navigation