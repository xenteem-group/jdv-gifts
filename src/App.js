import Layout from './containers/Layout/Layout'
import Home from './containers/Home/Home'
import ProductView from './containers/ProductView/ProductView'
import { Route, Switch } from "react-router-dom";
import Cart from './containers/Cart/Cart'

import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
      <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/product/:id" component={ProductView} /> */}
          <Route exact path="/product" component={ProductView} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
