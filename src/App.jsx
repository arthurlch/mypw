import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home/Home';
import { About } from './components/About/About';
import { Project } from './components/Project/Project';
import { Contact } from './components/Contact/Contact';
import { Blog } from './components/Blog/Blog';

function App() {
  return (
    <>
      <Layout>
        <AnimatePresence>
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
            <Route
              path='*'
              element={
                <div className='error' style={{ padding: '1rem' }}>
                  <p className='error-not-found'>There's nothing here :( </p>
                </div>
              }
            />
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default App;
