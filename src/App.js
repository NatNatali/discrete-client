import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import CreateLesson from './components/Admin/Create Lesson';
import Test from './components/Test';
import Comment from './components/Comment';
import Lesson from './components/Lesson';
import SingleLesson from './components/SingleLesson';
import history from './histoty';
import { isAdmin } from './selectors/profile.selectors';

const App = () => {
  const isAdminType = useSelector(isAdmin);
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path='/sign-up'>
          <SignUp />
        </Route>
        <Route exact path='/sign-in'>
          <SignUp />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/lesson'>
          <Lesson />
        </Route>
        <Route path='/lesson/:chapterId/lecture/:lectureId' component={SingleLesson} />
        {
          isAdminType && (
            <Route exact path='/admin' component={CreateLesson} />
          )
        }
        <Route exact path='/test'>
          <Test />
        </Route>
        <Route exacts path='/comments'>
          <Comment />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
