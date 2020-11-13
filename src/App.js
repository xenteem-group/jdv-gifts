import Layout from './containers/Layout/Layout'
import Home from './containers/Home/Home'
import { Route, Switch } from "react-router-dom";


import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
      <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
