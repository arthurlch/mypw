import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index path='/' element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
