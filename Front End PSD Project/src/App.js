import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Navbar from "./components/Globals/Navbar";
import Home from "./components/Pages/Home/Home";
import AboutUs from "./components/Pages/About/AboutUs";
import Services from "./components/Pages/Serivces/Services";
import WeDo from "./components/Pages/WeDo/WeDo";
import OurTeam from "./components/Pages/OurTeam/OurTeam";
import OurWork from "./components/Pages/OurWork/OurWork";
import Reviews from "./components/Pages/Reviews/Reviews";
import Blogs from "./components/Pages/Blogs/Blogs";

import Footer from "./components/Globals/Footer";

function App() {

 
  return (
    <Fragment>
      <Router>
        <Navbar />

        <Switch>
          
          <Route path="/" exact component={Home} />
          <Route path="/about-us"  component={AboutUs} />
          <Route path="/services"  component={Services} />
          <Route path="/we-do"  component={WeDo} />
          <Route path="/ourTeam" component={OurTeam} />
          <Route path="/ourWork" component={OurWork} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/blogs" component={Blogs} />

        </Switch>

        <Footer/>
      </Router>
    </Fragment>
  );
}

export default App;
