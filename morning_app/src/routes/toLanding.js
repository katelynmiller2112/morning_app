import {
    TransitionGroup,
    CSSTransition
  } from "react-transition-group";
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation,
    useParams
  } from "react-router-dom"; 


export const LandingScreenLink = () => (
    <div>
        <Link to="/landingPage">Start your day</Link>
    </div>
)