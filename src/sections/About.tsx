import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [hovered, setHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState("/New1.png");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => 
        prevImage === "/New1.png" ? "/New2.png" : "/New1.png"
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>ABOUT ME</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hi! I'm <strong>Priyanshu Kumar</strong>, a Software Development Engineer specializing in cutting-edge technologies like <strong>Generative AI</strong>, <strong>Full Stack Development</strong>, and <strong>Blockchain</strong>. Currently, I’m part of the founding team at <strong>ProcureNet</strong>, where I build scalable applications, implement RAG systems, and streamline user experiences using technologies like <strong>Node.js</strong> and <strong>LLMs</strong>.
          </p>
          <p className="about-grid-info-text">
            Previously, I worked as an SDE Intern at{" "}
            <Link 
              href="https://medium.com/naukri-engineering/building-conversational-resume-search-chatbot-using-langchain-pinecone-openai-ffb3b60f5c5f" 
              className="link" 
              target="_blank"
            >
              <strong>Naukri.com</strong>
            </Link>, 
            where I developed semantic search systems using vector databases and LLMs. Additionally, I co-founded <strong>DappNest</strong>, a crypto trading and learning platform with algorithms achieving a 72% success rate.
          </p>
          <p className="about-grid-info-text">
            My technical expertise includes working on diverse projects like web scraping with Milvus, question pair detection models, and Vidhan: The Legal Bot, which leveraged advanced AI to assist users. I thrive in dynamic environments, constantly seeking opportunities to innovate and create impactful solutions.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Generative AI</li>
            <li className="about-grid-info-list-item">LangChain</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Vector Databases (Milvus, Pinecone)</li>
            <li className="about-grid-info-list-item">AWS</li>
            <li className="about-grid-info-list-item">Tailwind CSS</li>
            <li className="about-grid-info-list-item">Docker</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src={currentImage} alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
