import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home/Home';
import { About } from './components/About/About';
import { Project } from './components/Project/Project';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
