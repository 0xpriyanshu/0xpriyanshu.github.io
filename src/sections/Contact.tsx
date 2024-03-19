import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="imageisthis">
        <img src="./Grid.png" alt="newimage" />
      </div>
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        I’m currently looking for <strong>new opportunities</strong>, my inbox
        is always open. Whether you have a question or just want to say <strong>hello</strong>, I’ll
        try my best to get back to you!
      </p>
      <div className="contact-cta">
        <Button link="mailto:priyanshukumarweb3@gmail.com" text="Say Hello" />
      </div>
      <div className="priyanshu">
        <div className="priyanshu-slides">
          <p>PRIYANSHU PRIYANSHU PRIYANSHU PRIYANSHU PRIYANSHU PRIYANSHU PRIYANSHU PRIYANSHU </p>
        </div>
        <div className="priyanshu-slides">
          <p> PRIYANSHU PRIYANSHU PRIYANSHU PRIYANSHU PRIYANSHU PRIYANSHU PRIYANSHU PRIYANSHU </p>
        </div>
        </div>
      <div className="kumar">
        <div className="kumar-slides">
          <p> KUMAR KUMAR KUMAR KUMAR KUMAR KUMAR KUMAR KUMAR KUMAR KUMAR KUMAR KUMAR </p>
        </div>
        <div className="kumar-slides">
          <p> KUMAR KUMAR KUMAR KUMAR KUMAR KUMAR KUMAR KUMAR KUMAR KUMAR KUMAR KUMAR </p>
        </div>
      </div>

    </motion.div>
  );
}


export default Contact;
