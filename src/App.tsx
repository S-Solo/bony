import React from "react";
import Layout from "components/Layout";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "components/Header";
import MVP from "containers/MVP";

const App = () => {
  return (
    <div>
      <Header />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={MVP} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Layout>
    </div>
  );
};

export default App;
