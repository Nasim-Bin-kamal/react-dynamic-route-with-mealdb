import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Categories from './components/Categories/Categories';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Meals from './components/Meals/Meals';
import NotFound from './components/NotFound/NotFound';
import SingleMealDetails from './components/SingleMealDetails/SingleMealDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/meals">
            <Meals></Meals>
          </Route>
          <Route path="/meal/:mealId">
            <SingleMealDetails></SingleMealDetails>
          </Route>
          <Route path="/categories">
            <Categories></Categories>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
