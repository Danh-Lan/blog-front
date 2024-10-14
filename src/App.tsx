import MainContent from './components/MainContent';
import React from 'react';
import NavBar from './components/NavBar';
import BottomBar from './components/BottomBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostDetails from './components/PostDetails';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col">
          <NavBar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/blog/posts/:slug" element={<PostDetails />} />
            </Routes>
          </div>
          <BottomBar />
        </div>
      </Router>
    </ThemeProvider>
  )
};

export default App;
