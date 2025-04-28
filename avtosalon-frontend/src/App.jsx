import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Avtosalon</h1>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#cars">Cars</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h2>Welcome to Avtosalon</h2>
          <p>Your trusted car dealership.</p>
        </section>
        <section id="cars">
          <h2>Our Cars</h2>
          <p>Explore our wide range of vehicles.</p>
        </section>
        <section id="about">
          <h2>About Us</h2>
          <p>Learn more about our company and values.</p>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Get in touch with us for more information.</p>
        </section>
      </main>
      <footer>
        <p>
          &copy; <span>{new Date().getFullYear()}</span> Avtosalon. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
