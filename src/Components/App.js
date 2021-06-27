import Homepage from "./Homepage";
import Cart from "./Cart";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}

export default App;
