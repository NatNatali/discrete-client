import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import CreateLesson from "./components/Admin/Create Lesson";
import Test from "./components/Test";
import Comment from "./components/Comment";
import Lesson from "./components/Lesson";

const isAdmin = localStorage.getItem('user-type') === 'admin';
console.log('isAdmin', isAdmin)

const App = () => {
  return (
      <Router>
        <Header />
        <Switch>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-in">
              <SignUp />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/lesson">
            <Lesson />
          </Route>
          {
          <Route path="/admin">
              <CreateLesson/>
          </Route>
          }
          <Route path="/test">
             <Test />
          </Route>
          <Route path="/comments">
             <Comment />
          </Route>
        </Switch>
          <Footer />
      </Router>
  );
}

export default App;
