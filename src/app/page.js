"use client";
import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { IoMdGitNetwork } from "react-icons/io";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaCube } from "react-icons/fa";
import { IoGitNetworkOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaNode,
  FaDatabase,
  FaArrowDown,
  FaArrowUp,
  FaGithub,
} from "react-icons/fa";

const iconComponents = [
  {
    icon: FaHtml5,
    animationClass: "fade-up",
    title: "HTML ",
    icon2: FaCheckCircle,
  },
  // { icon: FaCheck, animationClass: "fade-down" },
  {
    icon: FaCss3Alt,
    animationClass: "fade-left",
    title: "CSS",
    icon2: FaCheckCircle,
  },
  // { icon: FaArrowDown, animationClass: "fade-down" },
  {
    icon: FaJs,
    animationClass: "fade-up",
    title: "JavaScript",
    icon2: FaCheckCircle,
  },

  // // { icon: FaArrowDown, animationClass: "fade-down" },
  {
    icon: FaReact,
    animationClass: "fade-left",
    title: "React",
    icon2: FaCheckCircle,
  },
  {
    icon: FaGithub,
    animationClass: "fade-up",
    title: "Git",
    icon2: FaCheckCircle,
  },

  {
    icon: IoMdGitNetwork,
    animationClass: "fade-left",
    title: "Projects",
    icon2: FaCheckCircle,
  },

  // {
  //   icon: IoMdGitNetwork,
  //   animationClass: "fade-left",
  //   title: "Node",
  //   icon2: FaCheckCircle,
  // },
  // // { icon: FaCheck, animationClass: "fade-right" },
  // {
  //   icon: IoArrowForwardCircleOutline,
  //   animationClass: "fade-left",
  //   title: "RestAPI",
  //   icon2: FaCheckCircle,
  // },

  // {
  //   icon: FaDatabase,
  //   animationClass: "fade-left",
  //   title: "MongoDB",
  //   icon2: FaCheckCircle,
  // },

  // {
  //   icon: FaDatabase,
  //   animationClass: "fade-left",
  //   title: "SQL",
  //   icon2: FaCheckCircle,
  // },

  // {
  //   icon: IoGitNetworkOutline,
  //   animationClass: "fade-left",
  //   title: "GraphQL",
  //   icon2: FaCheckCircle,
  // },

  // {
  //   icon: IoArrowForwardCircleOutline,
  //   animationClass: "fade-left",
  //   title: "WebPack",
  //   icon2: FaCheckCircle,
  // },

  // {
  //   icon: IoMdGitNetwork,
  //   animationClass: "fade-left",
  //   title: "Sass",
  //   icon2: FaCheckCircle,
  // },

  // {
  //   icon: FaCube,
  //   animationClass: "fade-left",
  //   title: "AWS",
  //   icon2: FaCheckCircle,
  // },

  // {
  //   icon: FaCheckCircle,
  //   animationClass: "fade-left",
  //   title: "Testing",
  //   icon2: FaCheckCircle,
  // },
];

const LetterAnimation = () => {
  const [text, setText] = useState("");

  const content = "Rooadmap to become FrontEnd Developer";

  const colors = ["blue", "green", "red", "purple", "orange"];

  useEffect(() => {
    let index = 0;
    let wordIndex = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => {
        const currentChar = content[index];

        const isSpace = currentChar === " ";

        const wordColor = colors[wordIndex % colors.length];

        const coloredChar = isSpace
          ? currentChar
          : `<span style="color: ${wordColor}", fontSize:"5px">${currentChar}</span>`;

        return prevText + coloredChar;
      });

      if (content[index] === " ") {
        wordIndex += 1;
      }

      index += 1;

      if (index === content.length - 1) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [content]);

  const [visibleIcons, setVisibleIcons] = useState(0);
  useEffect(() => {
    const delayStart = setTimeout(() => {
      const intervalId = setInterval(() => {
        setVisibleIcons((prevVisibleIcons) => {
          const nextVisibleIcons = prevVisibleIcons + 1;

          if (nextVisibleIcons === iconComponents.length * 2) {
            // Clear the interval after displaying all icons and text
            clearInterval(intervalId);
          }

          return nextVisibleIcons;
        });
      }, 1000); // Adjust the durations as needed (milliseconds)

      // Cleanup function to clear the interval on unmount
      return () => clearInterval(intervalId);
    }, 2500); // 60000 milliseconds = 1 minute

    // Cleanup function to clear the timeout on unmount
    return () => clearTimeout(delayStart);
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="container">
      <div
        className="letter-animation"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "black",
          height: "80px",
          // margin: "0 530px",
          marginLeft: "570px",
          marginRight: "500px",
        }}
      >
        <h1
          className="text"
          style={{ display: "block", fontSize: "20px" }} // Add this style to make the span elements start on a new line
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>{" "}
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          background: "green",
        }}
      >
        <div>
          <div className="app">
            {iconComponents.map((item, index) => (
              <React.Fragment key={index}>
                <div
                  // style={{ backgroundColor: "red" }}
                  className={`icon ${item.animationClass} ${
                    index * 2 < visibleIcons ? "active" : ""
                  } 
                  
              `}
                >
                  {React.createElement(item.icon, { size: 40 })}
                </div>
                {item.title && (
                  <h1
                    // style={{ backgroundColor: "red" }}
                    className={`title ${item.animationClass} ${
                      index * 2 < visibleIcons ? "active" : ""
                    }`}
                  >
                    {item.title}
                  </h1>
                )}

                <div
                  className={`icon2 ${item.animationClass} ${
                    index * 2 < visibleIcons ? "active" : ""
                  } 
                  
              `}
                >
                  {React.createElement(item.icon2, { size: 40 })}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterAnimation;
