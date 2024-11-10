import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "ProcureNet",
      role: "Software Developer Engineer",
      url: "https://www.veerone.com",
      start: "July 2024",
      end: "Present",
      shortDescription: [
        "Implemented Retrieval-Augmented Generation (RAG) for searches, enabling file uploads with advanced querying, integrating Milvus as Vector DB.",
        "Developed media streaming from Large Language Models and revamped UI/UX with Next.js.",
        "Collaborated on backend development using Node.js and prompt engineering with LLMs like Qwen72B and LLAMA.",
      ],
    },
    {
      name: "Naukri.com",
      role: "Software Developer Engineer Intern",
      url: "https://medium.com/naukri-engineering/building-conversational-resume-search-chatbot-using-langchain-pinecone-openai-ffb3b60f5c5f",
      start: "May 2023",
      end: "July 2023",
      shortDescription: [
        "Vector search on resumes using embeddings & Large Language Models (LLMs), experimenting with AI frameworks & Vector Databases (e.g., Faiss, Pinecone) for efficiency.",
        "Building a Full-stack Chatbot app with a clean UI for querying the vector database and small folders.",
        "Researching prompt engineering & leveraging research-based approach with AI frameworks (e.g., LangChain, Hugging Face Transformers) and Vector Databases.",
      ],
    },
    {
      name: "Dappnest",
      role: "Co-founder",
      url: "https://www.instagram.com/dappnest/",
      start: "December 2022",
      end: "May 2023",
      shortDescription: [
        "Co-founded a startup with 2 other people to develop an algorithm-based crypto trading platform targeted for retail investors.",
        "Conducted market surveys and research, with initial trends showing 80% acceptance in demographics 18-35 and 60% overall.",
        "Implemented algorithms using moving average, RSI, Bollinger Bands, and MACD to achieve a success rate of 72%.",
      ],
    },
    {
      name: "Smartknower",
      role: "Software Developer Intern",
      url: "https://learn.smartknower.com/",
      start: "February 2021",
      end: "April 2021",
      shortDescription: [
        "Managed client-side website development, improving UI/UX through primary research, increasing positive reviews from 55% to 82%.",
        "Developed responsive landing pages for products marketed on social media funnels.",
      ],
    },
    {
      name: "Curry Club",
      role: "UI & UX Designer",
      url: "https://curryclubfrankfurt.de/",
      start: "February 2022",
      end: "March 2022",
      shortDescription: [
        "Crafted immersive UI/UX experiences for websites and restaurants, blending German precision with artistic flair to elevate user engagement.",
      ],
    },
  ];

  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => (
            <li
              className={`exp-slider-item ${
                index === selected && "exp-slider-item-selected"
              }`}
              onClick={() => setSelected(index)}
              key={expereince.name}
            >
              <span>{expereince.name}</span>
            </li>
          ))}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map((description, index) => (
                <li key={index} className="exp-details-list-item">
                  {description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
