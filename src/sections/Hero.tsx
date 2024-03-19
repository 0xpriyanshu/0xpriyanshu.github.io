import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/Button"; // Adjust the path as per your project structure
import { motion } from "framer-motion";

function Hero() {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentImage(currentImage === 1 ? 2 : 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [currentImage]);

  return (
    <div className="hero">
      <motion.h1
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
        style={{ marginBottom: "-0.5rem" }}
      >
        PRIYANSHU
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
        style={{ 
          marginTop: "0rem",
        }}
      >
        KUMAR
      </motion.h2>

      <div className="hero-image-container">
      {currentImage === 1 && (
        <img
          src="./img1.png"
          alt="Description of the first image"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}
        />
      )}
      {currentImage === 2 && (
        <img
          src="./img2.png"
          alt="Description of the second image"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}
        />
      )}
      </div>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        Hi I&apos;m <strong>Priyanshu Kumar</strong>, a fresher software engineer specializing in <strong>Full-stack development, AI/ML, Generative AI and Blockchain</strong>. Currently, pursuing a Bachelor's degree at <strong>Delhi Technological University</strong>.&nbsp;<Link href="https://medium.com/naukri-engineering/building-conversational-resume-search-chatbot-using-langchain-pinecone-openai-ffb3b60f5c5f" className="link" target="_blank">
              <strong>(Read my articles)</strong>
            </Link>
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        <Button link="mailto:priyanshukumarweb3@gmail.com" text="Get In Touch" />
      </motion.div>
    </div>
  );
}

export default Hero;
