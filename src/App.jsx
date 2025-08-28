import React, { useState, useEffect } from "react";
import "./Terminal.css";

// Fake terminal typing effect
const Typewriter = ({ text, speed = 40 }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return (
    <span>
      {displayed}
      <span className="cursor">█</span>
    </span>
  );
};

export default function Portfolio() {
  return (
    <div className="terminal-screen min-h-screen bg-black text-green-400 font-mono p-6">
      <div className="scanline"></div>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <p className="prompt">[om@portfolio ~]$ whoami</p>
          <p>Om Prakash Chaurasia</p>
        </div>

        <div>
          <p className="prompt">[om@portfolio ~]$ echo $ROLE</p>
          <Typewriter text="MERN Stack & Core Java Trainer | Web Developer" />
        </div>

        <div>
          <p className="prompt">[om@portfolio ~]$ cat about.txt</p>
          <p>
            Passionate trainer and developer with expertise in MERN Stack and
            Core Java, committed to delivering engaging training and building
            high-performance, accessible, and user-friendly web applications.
          </p>
        </div>

        <div>
          <p className="prompt">[om@portfolio ~]$ ls skills/</p>
          <ul className="grid sm:grid-cols-2 gap-x-6">
            {[
              "React.js",
              "React-Redux",
              "Node.js | JRE",
              "Express",
              "MongoDB",
              "CSS3",
              "Tailwind CSS",
              "MaterialUI",
              "HTML5",
              "Postman",
              "JavaScript",
              "Core Java",
              "Data Structures & Algorithms",
              "Git & GitHub",
            ].map((skill) => (
              <li key={skill}>- {skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="prompt">[om@portfolio ~]$ ls projects/</p>
          <ul className="space-y-2">
            <li>
              <strong>Pack-My-Jewels</strong> - Built packmyjewels.com, a client
              website designed for digital marketing and product promotion.
              <br /> <span className="text-green-600">repo:</span>{" "}
              github.com/Om-Prakash-Chaurasia/UshanDigital-Marketing
            </li>
            <li>
              <strong>Myntra-Clone</strong> - Headless ecommerce demo.
              <br /> <span className="text-green-600">repo:</span>{" "}
              github.com/Om-Prakash-Chaurasia/my-myntra-clone
            </li>
            <li>
              <strong>Meal-Planner</strong> - This application provides meals
              ingredients, recipe and equipment needed to prepare that meal.
              <br /> <span className="text-green-600">repo:</span>{" "}
              github.com/Om-Prakash-Chaurasia/Meal-Planner-Project
            </li>
          </ul>
        </div>

        <div>
          <p className="prompt">[om@portfolio ~]$ cat experience.log</p>
          <p>
            KGiSL MicroCollege - MERN Stack & Core Java Trainer (June 2023 —
            Present)
          </p>
          <p>
            GLOINNT Solutions Pvt. Ltd - Technical Writer and Illustrator
            Trainee (April 2022 - October 2022)
          </p>
          <p>
            SOA, Neemrana - Aircraft Maintenance Engineer (AME) Trainee (January
            2020 - December 2020)
          </p>
        </div>

        <div>
          <p className="prompt">[om@portfolio ~]$ echo $CONTACT</p>
          <p>
            Email:{" "}
            <a
              href="mailto:omchaurasia2024@gmail.com"
              className="underline hover:text-green-200"
            >
              omchaurasia2024@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+916282646554"
              className="underline hover:text-green-200"
            >
              +91-62826-46554
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://www.github.com/Om-Prakash-Chaurasia"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-green-200"
            >
              github.com/Om-Prakash-Chaurasia
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/om-prakash-chaurasia/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-green-200"
            >
              linkedin.com/in/om-prakash-chaurasia
            </a>
          </p>
        </div>

        <div>
          <p className="prompt">[om@portfolio ~]$ ls documents/</p>
          <p>
            <a
              href="/Resume - Om Prakash Chaurasia.pdf"
              download
              className="text-green-500 underline hover:text-green-300"
            >
              resume.pdf
            </a>
          </p>
        </div>

        <div>
          <p className="prompt">[om@portfolio ~]$ exit</p>
          <p className="text-green-600">
            Session terminated. © {new Date().toLocaleString()} Om Prakash
            Chaurasia
          </p>
        </div>
      </div>
    </div>
  );
}
