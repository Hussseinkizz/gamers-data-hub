import Header from "./modules/Header";
import { DataCategories, Home, NationalOverview, Page404 } from "./Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from './lib/test'
//? work around the spinner? 🤔 

const App = () => {

  return (
    <Router>
      <div
        id="app"
        className="cursor-pointer pb-24 z-auto relative"
      >
        <Header />
        <main className="pt-5 px-0 w-full h-full">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/test" exact component={Test} />
            <Route path="/categories" exact component={DataCategories} />
            <Route path="/national-overview" exact component={NationalOverview} />
            <Route path="*" exact component={Page404} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
