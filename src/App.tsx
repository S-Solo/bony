import React, { Suspense, lazy } from "react";
import Layout from "components/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "components/Header";

const MVP = lazy(() => import("./containers/MVP"));

const App = () => {
  return (
    <div>
      <Header />
      <Layout>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={MVP} />
            </Switch>
          </Suspense>
        </Router>
      </Layout>
    </div>
  );
};

export default App;
