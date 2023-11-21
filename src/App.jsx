
import "./App.css";
import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import Addblog from "./components/addBlog/Addblog";
import Map from "./components/map/Map"
import {Routes, Route, Link } from 'react-router-dom';
import Contact from "./components/contact/Contact";
import Navigation from "./components/navBar/Navigation";


const App = () => {
  return (
    <>
    
      <div>
    <div className="topMine">
     <h3 className="mine">My Blog</h3>
      <div className="socialBtn">
                  <i className="fa-brands fa-facebook-f"style={{fontSize:'24px'}}></i>
                  <i className="fa-brands fa-twitter"style={{fontSize:'24px'}}></i>
                  <i className="fa-brands fa-instagram" style={{fontSize:'24px'}}></i>
                  <i className="fa-brands fa-pinterest"style={{fontSize:'24px'}}></i>
        </div>
    </div>
     <hr />
   
       
    </div>

    <Routes>
        <Route   
          path="/"
          element={<Home/>}
        />
        <Route   
          path="/"
          element={<Blog/>}
        />
        <Route   
          path="/"
          element={<Addblog/>}
        />

        <Route
         path="/"
         element={<Contact/>}
        />
        <Route
         path="/"
         element={<Navigation/>}
        />

    </Routes>
    <Navigation></Navigation>
      
     <Home></Home>
    <Contact></Contact>
    <Blog></Blog>
    <Addblog></Addblog>
    <Map></Map> 
    </>
  )
}

export default App
