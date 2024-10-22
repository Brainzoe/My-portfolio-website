import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import your Navbar
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import BlogPost from './components/BlogPost'; // Import BlogPost component
import './App.css';
import myImage from './images/my-image.jpg';

function App() {
  return (
    <Router>
      {/* Navbar will always be rendered */}
      <Navbar />
      <Routes>
        {/* Render everything on the Home route */}
        <Route path="/" element={
          <div>
            <Home image={myImage} />
            <About />
            <Skills />
            <Portfolio />
            <Blog />
            <Contact />
          </div>
        } />
        
        {/* Blog Post Route */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Skills from './components/Skills';
// import Portfolio from './components/Portfolio';
// import Blog from './components/Blog';
// import Contact from './components/Contact';
// import './App.css';
// import myImage from './images/my-image.jpg';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         {/* Render everything on the Home route */}
//         <Route path="/" element={
//           <div>
//             <Home image={myImage} />
//             <About />
//             <Skills />
//             <Portfolio />
//             <Blog />
//             <Contact />
//           </div>
//         } />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


