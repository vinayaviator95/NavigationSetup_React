import React from "react";
import Header from "./Header";
import Home from "./Home";
import Post from "./Post";
import Footer from "./Footer";
import Profile from "./Profile";
import Contact from "./Contact";
import PostDetails from "./Postdetails";
import { BrowserRouter, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home} />
        <Route exact path="/post" component={Post} />
        {/* param routing */}
        <Route exact path="/postDetails/:topic" component={PostDetails} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
