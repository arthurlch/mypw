import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route index path='/' component={Home} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
