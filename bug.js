import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

// Home.js
export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link> 
    </div>
  );
}

// About.js
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
// This code has a potential error: The Link component from 'react-router-dom' is not imported correctly. It causes a runtime error because the Link component is undefined.