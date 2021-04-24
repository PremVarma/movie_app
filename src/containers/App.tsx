import './App.css'
import SearchMoviePage from './SearchMoviePage/SearchMoviePage'
import Home from './Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'

const App = () => {
  return (
    <div className="AppContainer">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/movies">
            <SearchMoviePage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
