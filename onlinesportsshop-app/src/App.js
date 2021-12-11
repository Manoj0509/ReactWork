import "./App.css";

import Nav from "./components/nav";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import customer from "./components/customer";
import UpdateCustomer from "./components/updatecustomer";
import AddCustomer from "./components/addcustomer";
import Cart from "./components/cart";
import Logout from "./components/logout";
import PageNotFound from "./components/pagenotfound";
import Counter from "./components/counter";
import Products from "./components/products";
import ProductDetails from "./components/productdetails";
import Payment from "./components/payment";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={AddCustomer} />
        <Route path="/cart" component={Cart} />
        <Route path="/customers/update/:rollNo" component={UpdateCustomer} />
        <Route path="/customers/add" component={AddCustomer} />
        <Route path="/customers" component={customer} />
        <Route path="/counter" component={Counter} />
        <Route path="/logout" component={Logout} />
        <Route path="/payment" component={Payment} />
        <Route path="/product/details/:id" component={ProductDetails} />
        <Route path="/products" component={Products} />
        <Redirect exact path="/" to="/home" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;