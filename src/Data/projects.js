
import tailwind from '../assets/Tailwind CSS.png';
import react from '../assets/react.webp';
import node from '../assets/Node.js.png';
import redux from '../assets/Redux.png';
import mysql from '../assets/MySQL.png';
import express from '../assets/Express.png';
import java from '../assets/Java.png';
import mongodb from '../assets/MongoDB.png';
import openai from '../assets/opneai.png';

const projects = [
    {
        id: 1,
        title: "React Calculator App",
        description: "A calculator built using React JS and Tailwind CSS.",
        logos:[react,tailwind]
    },
    {
        id: 2,
        title: "Full Stack Authentication System",
        description: "An authentication system using Node.js and MongoDB.",
        logos:[react,tailwind,node,mongodb]
    },
    {
        id: 3,
        title: "Quiz App",
        description: "A desktop  application built using Java and MySQL for taking quizes",
        logos:[java,mysql]
    },
    {
        id: 4,
        title: "OpenAI API Integration",
        description: "Integration of OpenAI's API in a Node.js application.",
        logos:[node,openai]
    },
    {
        id: 6,
        title: "Ecommerce Cart",
        description: "An ecommerce cart built using React and Redux Toolkit.",
        logos:[react,redux]

    },
];

export default projects;
