import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer Intern ",
    location: "Milano, Italy @ NesLab(Polimi)",
    description:
      `Developed a C++ Program for Bitcraze Drones called Crazyflie (STM32 and GAP8) under supervision of Professor Mottola Luca at Networked Embedded Software Lab of Polimi.\ 
      Also Designed a Python application for the AI deck of Bitcraze Drones with the purpose of enabling them to achieve flight capabilities and facial recognition.`,
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Linux System Admin",
    location: "Research Institute of Information Technology and Communications@ISFAHAN",
    description:
      "Set up security using SUDO, TCP WRAPPERS / Experience in writing shell/bash scripts",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Data Analysis in LTE​ Networks​",
    description:
      "I Utilized Supervised Machine Learning to Analyze Mobile Operator Data and Enhance Service Quality and Customer Experience..",
    tags: ["Python", "Matlab", "Cellular networks KPIs"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Information system for managing pandemic information",
    description:
      "Design, store, and a query graph data structure in a NoSQL DB for supporting a contact tracing application for COVID-19.",
    tags: ["ER diagram", "Neo4j", "SQL"],
    imageUrl: rmtdevImg,
  },
  {
    title: "IoT-Based Home Security System",
    description:
      "I engineered a comprehensive home security system, including the ESP8266 and SIM900 modules, in conjunction with advanced motion detection sensors with the help of the Internet of Things(IoT) and the MQTT Protocol.",
    tags: ["MQTT", "ESP8266", "IOT", "SIM900"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "Linux",
  "TCP/IP",
  "Wireless networks(4g & 5g)",
  "Git",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "MongoDB and MySQL",
  "GraphQL",
  "PostgreSQL",
  "Django",
  "Framer Motion",
] as const;
