import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <>
        <Layout>
          <Switch>
            <Route index path='/' component={Home} />
          </Switch>
        </Layout>
      </>
    </BrowserRouter>
  );
}

export default App;
