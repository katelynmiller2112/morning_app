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


function LandingScreen() {
  return (
    <LandingScreen/>
  )
}

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={LandingScreen} />
      
    </Switch>
  );
};

export default Routes;
