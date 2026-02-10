



// import React from "react";
// import "./Home.css";
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="home-container">

//       {/* HERO SECTION */}
//       <section className="hero">
//         <div className="hero-content" data-aos="fade-right">
//           <h1>Diabetic Retinopathy Detection</h1>
//           <p>
//             AI-powered screening system to detect diabetic retinopathy at early stages using
//             Deep Learning and Explainable AI to save vision and improve diagnosis.
//           </p>
//           <Link to="/upload" className="btn-primary">Start Detection</Link>
//         </div>

//         <div className="hero-img" data-aos="zoom-in">
//           <img
//             src="https://cdn.pixabay.com/photo/2017/04/07/01/51/eye-2213135_1280.png"
//             alt="Retina AI"
//           />
//         </div>
//       </section>

//       {/* FEATURES SECTION */}
//       <section className="features">
//         <h2 data-aos="fade-up">Why Our System?</h2>
//         <div className="features-grid">
//           <div className="feature-card" data-aos="zoom-in-up">
//             <img src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png" alt="Accuracy" />
//             <h3>High Accuracy</h3>
//             <p>Deep learning detects DR with strong clinical reliability.</p>
//           </div>

//           <div className="feature-card" data-aos="zoom-in-up">
//             <img src="https://cdn-icons-png.flaticon.com/512/2847/2847440.png" alt="Explainable AI" />
//             <h3>Explainable AI</h3>
//             <p>Heatmaps provide visual understanding of disease areas.</p>
//           </div>

//           <div className="feature-card" data-aos="zoom-in-up">
//             <img src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png" alt="Fast" />
//             <h3>Instant Results</h3>
//             <p>Upload a retinal image and get prediction in seconds.</p>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT SECTION */}
//       <section className="about">
//         <div className="about-img" data-aos="fade-right">
//           <img
//             src="https://cdn.pixabay.com/photo/2021/03/23/10/58/doctor-6119474_1280.png"
//             alt="Doctor"
//           />
//         </div>

//         <div className="about-content" data-aos="fade-left">
//           <h2>About Diabetic Retinopathy</h2>
//           <p>
//             Diabetic Retinopathy is an eye condition caused by high blood sugar damaging retinal blood vessels.
//             Early detection can prevent blindness and vision loss.
//           </p>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="cta" data-aos="fade-up">
//         <h2>Scan Now. Save Vision.</h2>
//         <Link to="/upload" className="btn-secondary">Upload Image</Link>
//       </section>

//       <footer>
//         <p>© 2025 DR-AI Detection • All Rights Reserved</p>
//       </footer>
//     </div>
//   );
// }






import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            AI-Powered Diabetic Retinopathy Detection
          </h1>
          <p className="hero-subtitle">
            Fast, Accurate & Reliable Diagnosis Using Deep Learning.
          </p>

          <div className="hero-buttons">
            <Link to="/upload" className="btn-primary">Upload Image</Link>
            <Link to="/about" className="btn-secondary">Learn More</Link>
          </div>
        </div>

        {/* <div className="hero-image">
          <img src="/retina.jpg" alt="Retina Scan" />
        </div> */}
      </section>

      {/* Features */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Our System?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>🚀 Fast Predictions</h3>
            <p>Deep learning system delivers results within seconds.</p>
          </div>

          <div className="feature-card">
            <h3>🎯 High Accuracy</h3>
            <p>Uses medical-grade datasets and AI model training.</p>
          </div>

          <div className="feature-card">
            <h3>💾 Saves History</h3>
            <p>Every result is stored locally for later review.</p>
          </div>

          <div className="feature-card">
            <h3>🔒 Secure & Private</h3>
            <p>Your images stay safe and are never shared.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>

        <div className="steps">
          <div className="step-card">
            <span className="step-number">1</span>
            <h4>Select Image</h4>
            <p>Upload a retina image from your device.</p>
          </div>

          <div className="step-card">
            <span className="step-number">2</span>
            <h4>AI Analyzes</h4>
            <p>The trained model scans the image for DR signs.</p>
          </div>

          <div className="step-card">
            <span className="step-number">3</span>
            <h4>View Prediction</h4>
            <p>Get prediction, confidence & severity instantly.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
