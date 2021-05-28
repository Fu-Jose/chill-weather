import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainPage from "./pages/MainPage";
import DetailsPage from "./pages/DetailsPage";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import store from "./store/index.js";

function App() {
  return (
    <Provider store={store()}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/details" component={DetailsPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
