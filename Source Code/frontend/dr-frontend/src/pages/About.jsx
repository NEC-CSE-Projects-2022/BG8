// // import React from "react";
// // import "./About.css";

// // const About = () => {
// //   return (
  
// //     <div className="about-container">

// //       {/* Header Section */}
// //       <section className="about-header">
// //         <h1>About Our Diabetic Retinopathy Detection Platform</h1>
// //         <p>
// //           Our platform leverages advanced Artificial Intelligence and
// //           Explainable Deep Learning models to detect Diabetic Retinopathy (DR)
// //           with high precision. We combine medical expertise with cutting-edge
// //           technology to provide fast, reliable, and transparent retinal analysis.
// //         </p>
// //       </section>

// //       {/* What is DR Section */}
// //       <section className="about-dr">
// //         <h2>What is Diabetic Retinopathy?</h2>
// //         <p>
// //           Diabetic Retinopathy is a serious complication of diabetes that affects
// //           the blood vessels of the retina. If untreated, it can lead to vision
// //           loss or permanent blindness. Early detection plays a crucial role in
// //           protecting vision and preventing long-term damage.
// //         </p>
// //         <ul>
// //           <li>Damage to retinal blood vessels due to high blood sugar</li>
// //           <li>Early stages show microaneurysms and small hemorrhages</li>
// //           <li>Advanced stages lead to retinal swelling or bleeding</li>
// //           <li>Timely screening significantly reduces complications</li>
// //         </ul>
// //       </section>

// //       {/* XAI Section */}
// //       <section className="about-xai">
// //         <h2>Explainable AI (XAI) for Medical Transparency</h2>
// //         <p>
// //           Our system uses Explainable AI (XAI) to provide visual interpretations
// //           of predictions. Instead of presenting just a label, the model highlights
// //           the exact regions of the retina responsible for the diagnosis.
// //         </p>
// //         <p>
// //           This enhances clinical trust and enables doctors to verify how the AI
// //           reaches each conclusion.
// //         </p>

// //         <div className="xai-points">
// //           <div className="xai-card">
// //             <h3>Heatmap Visualization</h3>
// //             <p>
// //               Shows critical regions contributing to the model’s prediction using
// //               Grad-CAM based techniques.
// //             </p>
// //           </div>

// //           <div className="xai-card">
// //             <h3>Model Transparency</h3>
// //             <p>
// //               Enables clinicians to understand whether the model focuses on
// //               medically relevant retinal features.
// //             </p>
// //           </div>

// //           <div className="xai-card">
// //             <h3>Reliable Decision Support</h3>
// //             <p>
// //               Ensures that each prediction aligns with medical standards and
// //               assists in second-opinion validation.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Team Section */}
// //       <section className="about-team">
// //         <h2>Meet Our Team</h2>

// //         <div className="team-grid">
// //           <div className="team-card">
// //             <img src="/assets/team1.jpg" alt="Team Member" />
// //             <h3>Dr. Aishwarya Menon</h3>
// //             <p>Chief Ophthalmology Advisor</p>
// //             <span>
// //               12+ years experience in retinal diseases and diabetic eye care.
// //             </span>
// //           </div>

// //           <div className="team-card">
// //             <img src="/assets/team2.jpg" alt="Team Member" />
// //             <h3>Rohan Sharma</h3>
// //             <p>Lead Machine Learning Engineer</p>
// //             <span>
// //               Expert in deep learning, medical imaging, and XAI model design.
// //             </span>
// //           </div>

// //           <div className="team-card">
// //             <img src="/assets/team3.jpg" alt="Team Member" />
// //             <h3>Priya Patel</h3>
// //             <p>Full-Stack Developer</p>
// //             <span>
// //               Builds seamless user experiences and ensures fast, secure
// //               deployment.
// //             </span>
// //           </div>
// //         </div>
// //       </section>

// //     </div>
// //   );
// // };

// // export default About;











// import React from "react";
// import "./About.css";

// export default function About() {
//   return (
//     <div className="about-container">

//       <div className="header">
//         <h1>About the Project</h1>
//         <p>AI-based Diabetic Retinopathy Detection with Explainable AI</p>
//         <lottie-player
//           src="https://assets2.lottiefiles.com/packages/lf20_iv4dsx3q.json"
//           background="transparent"
//           speed="1"
//           loop autoplay
//           style={{ height: "250px" }}
//         />
//       </div>

//       <section className="section">
//         <h2>Project Purpose</h2>
//         <p>
//           Diabetic Retinopathy is a leading cause of blindness among diabetic patients.
//           This system uses Deep Learning to detect and classify DR severity with instant automated reporting.
//         </p>
//       </section>

//       <section className="section dataset">
//         <h2>Dataset Information</h2>
//         <p>We used APTOS 2019 Blindness Detection dataset from Kaggle.</p>
//         <a href="https://www.kaggle.com/competitions/aptos2019-blindness-detection"
//            target="_blank" className="btn-link">
//           View Dataset →
//         </a>
//       </section>

//       <section className="section process">
//         <h2>How It Works?</h2>
//         <ul>
//           <li>Upload retinal image</li>
//           <li>Model predicts DR stage (0–4)</li>
//           <li>Heatmap displays infected areas</li>
//           <li>Instant final result displayed</li>
//         </ul>
//       </section>

//       <section className="section team">
//         <h2>Team Members</h2>
//         <div className="team-grid">
//           <div className="team-card">Lakshmiprasanna<br /><span>Frontend & Deployment</span></div>
//           <div className="team-card">Meera Jasmine<br /><span>Deep Learning</span></div>
//           <div className="team-card">Jayasri<br /><span>Backend Integration</span></div>
//         </div>
//         <p className="college">Narasaraopeta Engineering College (NEC)</p>
//       </section>

//       <footer className="footer">© 2025 • DR-AI Detection System</footer>
//     </div>
//   );
// }








import React from "react";
import "./About.css";
import { Bar, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function About() {
  // Sample Model Performance Data
  const accuracyData = {
    labels: ["Correct Predictions", "Misclassifications"],
    datasets: [
      {
        data: [92, 8],
        backgroundColor: ["#0077ff", "#ff4d6d"],
      },
    ],
  };

  const distributionData = {
    labels: ["No DR (0)", "Mild (1)", "Moderate (2)", "Severe (3)", "Proliferative (4)"],
    datasets: [
      {
        data: [400, 350, 300, 250, 200],
        backgroundColor: ["#00a8ff", "#9c88ff", "#4cd137", "#e1b12c", "#c23616"],
      },
    ],
  };

  return (
    <div className="about-container">

      {/* Header Section */}
      <div className="header">
        <h1>Diabetic Retinopathy Detection</h1>
        <p>AI-Powered Medical Diagnosis with Explainable Visual Insights</p>

        <lottie-player
          src="https://assets2.lottiefiles.com/packages/lf20_iv4dsx3q.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          style={{ height: "260px" }}
        />
      </div>

      {/* Main Purpose */}
      <section className="section">
        <h2>🌟 Project Objective</h2>
        <p>
          To detect Diabetic Retinopathy efficiently using Deep Learning models
          paired with Explainable AI (XAI). This platform assists clinicians by identifying
          DR severity levels and visually explaining the predictions.
        </p>
      </section>

      {/* Dataset Section */}
      <section className="section dataset">
        <h2>📌 Dataset Used</h2>
        <p>APTOS 2019 Blindness Detection Dataset hosted on Kaggle.</p>
        <a
          href="https://www.kaggle.com/competitions/aptos2019-blindness-detection"
          target="_blank"
          rel="noreferrer"
          className="btn-link"
        >
          View Dataset →
        </a>
      </section>

      {/* Workflow */}
      <section className="section process">
        <h2>⚙️ Workflow Process</h2>
        <ul>
          <li>Upload Fundus Retina Image</li>
          <li>AI Model Classifies Stage (0–4)</li>
          <li>XAI highlights infected areas using heatmaps</li>
          <li>Report instantly displayed to doctor/patient</li>
        </ul>
      </section>

      {/* XAI Section */}
      <section className="section xai">
        <h2>🔍 Explainable AI — Grad-CAM</h2>
        <p>
          Instead of providing results blindly, our model uses Grad-CAM to highlight
          the retinal regions that influence prediction — improving clinical trust.
        </p>

        <div className="xai-visual">
          <div className="xai-card">
            <h3>Heatmap Visualization</h3>
            <p>Highlights lesions, microaneurysms, and hemorrhages contributing to DR.</p>
          </div>
          <div className="xai-card">
            <h3>Medical Transparency</h3>
            <p>Ensures decision-making aligns with ophthalmic standards.</p>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="section charts">
        <h2>📊 Model Performance</h2>

        <div className="chart-grid">
          <div className="chart-card">
            <h3>Accuracy vs Error Rate</h3>
            <Pie data={accuracyData} />
          </div>

          <div className="chart-card">
            <h3>Class Distribution</h3>
            <Bar data={distributionData} />
          </div>

          <div className="chart-card">
            <h3>Model Diagnosis Output Spread</h3>
            <Doughnut data={distributionData} />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team">
        <h2>👩‍⚕️ Our Project Team</h2>
        <div className="team-grid">
          <div className="team-card">Lakshmiprasanna<br /><span>Frontend & Deployment</span></div>
          <div className="team-card">Meera Jasmine<br /><span>Deep Learning</span></div>
          <div className="team-card">Jayasri<br /><span>Backend Integration</span></div>
        </div>
        <p className="college">Narasaraopeta Engineering College • NEC</p>
      </section>

      <footer className="footer">© 2025 • AI-Based DR Detection System</footer>
    </div>
  );
}
