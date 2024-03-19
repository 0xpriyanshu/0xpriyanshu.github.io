import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef ,useState} from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [hovered, setHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState("/New1.png");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(prevImage => prevImage === "./New1.png" ? "./New2.png" : "./New1.png");
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
            Hola Amigo! I'm <strong>Priyanshu</strong>. Tech enthusiast, coding aficionado, and co-founder extraordinaire. I dabble in <strong>Full stack development, Generative AI, Vector databases, Web3 & Blockchain </strong>, but don't worry, I'm not here to overwhelm you with jargon.

          </p>
          <p className="about-grid-info-text">
          Senior from <strong>Delhi Technological University</strong>, I've dipped my toes into the coding pool with gigs at {" "}<Link href="https://medium.com/naukri-engineering/building-conversational-resume-search-chatbot-using-langchain-pinecone-openai-ffb3b60f5c5f" className="link" target="_blank">
              <strong>Naukri.com</strong>
            </Link> as <strong>SDE intern</strong> and as a <strong>co-founder</strong> of <strong>DappNest</strong>, a crypto investment and learning startup. Now, I'm on the hunt for the next big thing in tech. Join me on this wild ride through the digital cosmos! 
          </p>

          
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Blockchain</li>
            <li className="about-grid-info-list-item">Langchain</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">ML & AI</li>
            <li className="about-grid-info-list-item">AWS</li>
            <li className="about-grid-info-list-item">Tailwind</li>
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
