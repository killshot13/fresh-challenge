import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Entries from "./pages/Entries";
import actions from "./services/api";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/entries/:entryType"
          render={(props) => <Entries {...props} />}
        />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
