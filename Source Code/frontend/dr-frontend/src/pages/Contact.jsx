// import React, { useState } from "react";
// import "./Contact.css";

// const Contact = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Thank you for contacting us!");
//     setForm({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="contact-page">
//       <h1>Contact Us</h1>
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
//         <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;







// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
// import "./Contact.css";

// const Contact = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     emailjs
//       .send(
//         "service_oelqr4p",
//         "template_cfc3e7s",
//         form,
//         "Fd-JON4ucY4tbnxHo"
//       )
//       .then(
//         () => {
//           setStatus("Message sent successfully!");
//           setForm({ name: "", email: "", message: "" });
//         },
//         (error) => {
//           console.error(error);
//           setStatus("Failed to send message. Try again!");
//         }
//       );
//   };

//   return (
//     <div className="contact-wrapper">
//       <div className="contact-card">

//         {/* LEFT SECTION */}
//         <div className="contact-info">
//           <h2>Get in Touch</h2>
//           <p>Feel free to reach out to us anytime. We respond within 24 hours.</p>

//           <div className="info-box">
//             <strong>📞 Phone:</strong>
//             <p>+91 9010865146</p>
//           </div>

//           <div className="info-box">
//             <strong>📧 Email:</strong>
//             <p>prasannachowdhary77@gmail.com</p>
//           </div>

//           <div className="info-box">
//             <strong>🏢 Address:</strong>
//             <p>Hyderabad, Telangana, India</p>
//           </div>

//           <div className="social-links">
//             <a href="https://facebook.com" target="_blank">🌐 Facebook</a>
//             <a href="https://linkedin.com" target="_blank">💼 LinkedIn</a>
//             <a href="https://instagram.com" target="_blank">📸 Instagram</a>
//           </div>
//         </div>

//         {/* RIGHT SECTION FORM */}
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <h2>Send Message</h2>

//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={form.name}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />

//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={form.message}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">Send Message</button>

//           {status && <p className="form-status">{status}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;








// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
// import "./Contact.css";

// const Contact = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//     time: new Date().toLocaleString(),
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     emailjs
//       .send(
//         "service_oelqr4p",
//         "template_a0qm1rn",
//         {
//           name: form.name,
//           email: form.email,
//           message: form.message,
//           time: form.time,
//         },
//         "Fd-JON4ucY4tbnxHo"
//       )
//       .then(
//         () => {
//           setStatus("Message sent successfully!");
//           setForm({
//             name: "",
//             email: "",
//             message: "",
//             time: new Date().toLocaleString(),
//           });
//         },
//         (error) => {
//           console.error("EmailJS Error:", error);
//           setStatus("Failed to send message. Check console.");
//         }
//       );
//   };

//   return (
//     <div className="contact-wrapper">
//       <div className="contact-card">

//         {/* LEFT INFO */}
//         <div className="contact-info">
//           <h2>Contact Us</h2>
//           <p>We respond within 24 hours.</p>

//           <div className="info-box">
//             <strong>📞 Phone:</strong>
//             <p>+91 9010865146</p>
//           </div>

//           <div className="info-box">
//             <strong>📧 Email:</strong>
//             <p>prasannachowdhary77@gmail.com</p>
//           </div>

//           <div className="info-box">
//             <strong>📍 Location:</strong>
//             <p>Hyderabad, Telangana, India</p>
//           </div>

//           <div className="social-links">
//             <a href="https://facebook.com" target="_blank">Facebook</a>
//             <a href="https://linkedin.com" target="_blank">LinkedIn</a>
//             <a href="https://instagram.com" target="_blank">Instagram</a>
//           </div>
//         </div>

//         {/* RIGHT FORM */}
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <h2>Send Message</h2>

//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="Your Email"
//             required
//           />

//           <textarea
//             name="message"
//             value={form.message}
//             onChange={handleChange}
//             placeholder="Write your message..."
//             required
//           />

//           <button type="submit">Send Message</button>

//           {status && <p className="form-status">{status}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;








import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    time: new Date().toLocaleString(),
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_oelqr4p", // Correct Gmail Service ID
        "template_ksl09bg", // Your Template ID
        {
          title: "New Contact Message",
          name: form.name,
          email: form.email,
          message: form.message,
          time: form.time,
        },
        "Fd-JON4ucY4tbnxHo" // Your Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully! ✅");
          setForm({
            name: "",
            email: "",
            message: "",
            time: new Date().toLocaleString(),
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("Failed to send message. ❌");
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        
        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>We respond within 24 hours.</p>

          <div className="info-box">
            <strong>📞 Phone:</strong>
            <p>+91 9010865146</p>
          </div>

          <div className="info-box">
            <strong>📧 Email:</strong>
            <p>prasannachowdhary77@gmail.com</p>
          </div>

          <div className="info-box">
            <strong>📍 Location:</strong>
            <p>Hyderabad, Telangana, India</p>
          </div>

          <div className="social-links">
            <a href="https://facebook.com" target="_blank">Facebook</a>
            <a href="https://linkedin.com" target="_blank">LinkedIn</a>
            <a href="https://instagram.com" target="_blank">Instagram</a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Message</h2>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
          />

          <button type="submit">Send Message</button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
