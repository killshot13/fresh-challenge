import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import actions from "./services/api";

function App() {
  const test = async () => {
    let res = await actions.test();
    console.log(res);
  };
  return (
    <>
      <Navbar />
      <button onClick={test}>Test</button>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/series" render={(props) => <Series {...props} />} />
        <Route exact path="/movies" render={(props) => <Movies {...props} />} />
        {/* <Route component={NotFound} /> */}
      </Switch>
      <Footer />
    </>
  );
}

export default App;
