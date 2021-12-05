import Navbar from "./components/navbar/navbar";
//import './App.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from "react-router";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Home from "./components/homePage/Home";
import TeamPage from "./components/teamPage/TeamPage";
import Footer from "./components/footer/Footer";
import Articles from "./components/articlesPage/Articles.jsx";
import ServicesPage from "./components/servicesPage/ServicesPage";
import EventsPage from "./components/eventsPage/EventsPage";
import DonatePage from "./components/donatePage/DonatePage";
import ContactPage from "./components/contactPage/ContactPage";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/team" exact component={TeamPage} />
        <Route path="/articles" exact component={Articles} />
        <Route path="/services" exact component={ServicesPage} />
        <Route path="/events" exact component={EventsPage} />
        <Route path="/donate" exact component={DonatePage} />
        <Route path="/contact" exact component={ContactPage} />
        </Switch>
      </Router>
      <Footer />
      
      
      
    </div>
  );
}

export default App;
