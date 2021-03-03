import { Route, Switch } from "react-router-dom";
import { relativePath } from './config/Config'
import Layout from './containers/Layout/Layout'
import Home from './containers/Home/Home'
import ProductView from './containers/ProductView/ProductView'
import Cart from './containers/Cart/Cart'
import Signup from './containers/Signup/Signup'
import Signin from './containers/Signin/Signin'

import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
      <Switch>
          <Route exact path={`${relativePath}`} component={Home} />
          {/* <Route exact path="/product/:id" component={ProductView} /> */}
          <Route exact path={`${relativePath}/product`}  component={ProductView} />
          <Route exact path={`${relativePath}/cart`} component={Cart} />
          <Route exact path={`${relativePath}/signup`} component={Signup} />
          <Route exact path={`${relativePath}/signin`} component={Signin} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
