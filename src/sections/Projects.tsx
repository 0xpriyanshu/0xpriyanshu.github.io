import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project_1.jpg ",
      projectName: "Vidhan: The Legal Bot",
      projectLink: "https://github.com/0xpriyanshu/vidhan-the-legal-bot-",
      projectDescription:
        "Developed a Full Stack Chatbot App for legal assistance under Ministry of legal affairs,creation of SIH(Smart India Hackathon),Powered by React, Flask, LLM. This model uses embeddings and sends real-time query response and doesn't to queries not legally related.",
      projectTech: [
        "Flask",
        "React",
        "LLM",
        "Prompt Engineering",
        "Langchain",
        "Openai Api",
      ],
      projectExternalLinks: {
        github: "https://github.com/0xpriyanshu/vidhan-the-legal-bot-",
        externalLink: "https://drive.google.com/file/d/1XkWQjBeu9-3BSLWkUgzQomr4JRcJ-NXv/view?usp=drivesdk",
      },
    },
    {
      image: "/project_2.png",
      projectName: "Decem App Clone",
      projectLink: "https://decemdrinks.com/products/decem-10-gin",
      projectDescription:
        "I made a Decem app copy primarily focusing with use of Tailwind Css empowering the meticulous design of your Decem app, optimizing performance and ensuring scalability. Its utility-first approach streamlines code for efficiency.",
      projectTech: [
        "Tailwind CSS",
        "Javascript",
        "Node.js",
        "MongoDB",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "https://github.com/0xpriyanshu/decem-clone",
        externalLink: "https://drive.google.com/file/d/1BYsY0nSYTruePtuZIn4jYZV_hgM4UhNz/view?usp=drivesdk",
      },
    },
    {
      image: "/project_3.jpg",
      projectName: "UI & UX (Curry Club)",
      projectLink: "https://curryclubfrankfurt.de/",
      projectDescription:
        "I crafted website UI and UX for Curry Club Indian restaurant . From seamless navigation to visually stunning layouts, every element is designed to captivate and delight users.",
      projectTech: [
        "Bootstrap",
        "Adobe XD",
        "Adobe Photoshop",
        "HTML",
        "CSS",
        "Javascript",
      ],
      projectExternalLinks: {
        github: "https://curryclubfrankfurt.de/",
        externalLink: "https://curryclubfrankfurt.de/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
