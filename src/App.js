import { NotFound } from 'http-errors';
import {
  BrowserRouter as Router, Switch,
  Route
} from 'react-router-dom';
import './App.css';
import AddPlace from './components/AddPlace/AddPlace';
import Features from './components/Features/Features';
import Booking from './components/Home/Booking/Booking';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Register from './components/Login/Register/Register';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import WhyUs from './components/WhyUs/WhyUs';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
          <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            {/* <PrivateRoute path="/blogs">
              <Blogs></Blogs>
            </PrivateRoute> */}
            <PrivateRoute path="/addPlace">
              <AddPlace></AddPlace>
            </PrivateRoute>
            <Route path="/whyUs">
              <WhyUs></WhyUs>
            </Route>
            <Route path="/features">
             <Features></Features>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute exact path="/booking/:placeId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
