// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Home from "./pages/Home";
// // import Upload from "./pages/Upload";
// // import Result from "./pages/Result";
// // import About from "./pages/About";
// // import Contact from "./pages/Contact";
// // import "./App.css";

// // import Dataset from "./pages/dataset";
// // function App() {
// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/upload" element={<Upload />} />
// //         <Route path="/Result" element={<Result />}/>

// //         <Route path="/about" element={<About />} />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path="/dataset" element={<Dataset />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;





// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";

// import Home from "./pages/Home";
// import Upload from "./pages/Upload";
// import Result from "./pages/Result";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Dataset from "./pages/Dataset";   // ✅ Capitalized for consistency

// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/upload" element={<Upload />} />
//         <Route path="/result" element={<Result />} />   {/* lowercase best practice */}
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/Dataset" element={<Dataset />} />
//       </Routes>

//     </Router>
//   );
// }

// export default App;





import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Result from "./pages/Result";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dataset from "./pages/dataset";  

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/result" element={<Result />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dataset" element={<Dataset />} />
      </Routes>

    </Router>
  );
}

export default App;
