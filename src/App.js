import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import ProtectedRoute from './utils/ProtectedRoute';
import PublicRoute from './utils/PublicRoute';
import Home from './components/homePage/Home';
import TeamPage from './components/teamPage/TeamPage';
import ArticlesPage from './components/articlesPage/Articles.jsx';
import ServicesPage from './components/servicesPage/ServicesPage';
import EventsPage from './components/eventsPage/EventsPage';
import DonatePage from './components/donatePage/DonatePage';
import ContactPage from './components/contactPage/ContactPage';
import Login from './components/login/Login';
//// PROTECTED ROUTE IMPORTS
import Dashboard from './components/dashboard/Dashboard';
import Team from './components/dashboard/teamPage/Team';
import UpdateUser from './components/dashboard/teamPage/updateUser/UpdateUser';
import CreateUser from './components/dashboard/teamPage/createUser/CreateUser';
import Articles from './components/dashboard/articlesPage/Articles';
import CreateArticle from './components/dashboard/articlesPage/createArticle/CreateArticle';
import UpdateArticle from './components/dashboard/articlesPage/updateArticle/UpdateArticle';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/team" exact component={TeamPage} />
                    <Route path="/articles" exact component={ArticlesPage} />
                    <Route path="/services" exact component={ServicesPage} />
                    <Route path="/events" exact component={EventsPage} />
                    <Route path="/donate" exact component={DonatePage} />
                    <Route path="/contact" exact component={ContactPage} />
                    <PublicRoute exact path="/login" component={Login} />
                    <ProtectedRoute
                        exact
                        path="/dashboard"
                        component={Dashboard}
                        //isAuth={isAuth}
                    />
                    <ProtectedRoute
                        exact
                        path="/dashboard/users"
                        component={Team}
                        //isAuth={isAuth}
                    />
                    <ProtectedRoute
                        exact
                        path="/update/user/:id"
                        component={UpdateUser}
                        //isAuth={isAuth}
                    />
                    <ProtectedRoute
                        exact
                        path="/add/user"
                        component={CreateUser}
                        //isAuth={isAuth}
                    />
                    <ProtectedRoute
                        exact
                        path="/dashboard/articles"
                        component={Articles}
                        //isAuth={isAuth}
                    />
                    <ProtectedRoute
                        exact
                        path="/add/article"
                        component={CreateArticle}
                        //isAuth={isAuth}
                    />
                    <ProtectedRoute
                        exact
                        path="/update/articles/:id"
                        component={UpdateArticle}
                        //isAuth={isAuth}
                    />
                    {/* <ProtectedRoute
              exact
              path="/events"
              component={Events}
              isAuth={isAuth}
            />
            
            
             */}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
