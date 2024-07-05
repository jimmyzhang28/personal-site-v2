import discord from '../assets/discord.jpg'
import alexa from '../assets/alexa.jpg'
import website from '../assets/website.png'
import compiler from '../assets/compiler.png'

const experiences = {
  classes: [
    "15-411: Compiler Design (S24) ♡♡♡",
    "15-445: Intro to Database Systems (F23)",
    "10-707: Advanced Deep Learning (S23)",
    "10-605: Machine Learning with Large Datasets (S23)",
    "15-440: Distributed Systems (F22)",
    "15-451: Algorithm Design and Analysis (F22)",
    "15-259: Probability and Computing (S22)",
    "15-210: Parallel and Sequential Algorithms (S22)",
    "15-213: Introduction to Computer Systems (F21)",
    "15-150: Principles of Functional Programming (S21)",
  ],
  experienceInfo: [
    {
      company: "IMC Trading",
      range: "Jun 2023 - Aug 2023",
      role: "Software Engineer Intern",
      bulletPoints: [
        "Contributed performant Java to 15+ interconnected internal components under the Equity Options execution team",
        "Implemented robust error handling, fallback behavior, and interactive graphical interfaces for options quoting logic",
        "Collaborated with quantitative traders daily to fulfill ad-hoc requests and new trading features",
        "Discussed system-wide design implementations for larger scale quoting projects with full-time developers"
      ],
      tech: [
        "Java"
      ],
    },
    {
      company: "Meta",
      range: "Jun 2022 - Aug 2022",
      role: "Software Engineer Intern",
      bulletPoints: [
        "Created a Python command line interface to aggregate noise metrics when identifying performance regressions",
        "Integrated bias analysis into over 50,000 continuously running end-to-end Jest tests to report ongoing breakages",
        "Reduced number of Instagram and Messenger performance irregularities pushed to production by 30%",
        "Developed SQL queries and data aggregation libraries to allow test authors to analyze historical test data and trends",
        "Collaborated cross-functionally with developers to provide more coverage against flaky performance tests"
      ],
      tech: [
        "Python", "Jest", "SQL"
      ],
    },
    {
      company: "Grapevine AI",
      range: "Jun 2021 - Aug 2021",
      role: "Software Engineer Intern",
      bulletPoints: [
        "Implemented a dynamic calendar page in React that helps users schedule meetings and reminders with their contacts",
        "Integrated robust integration testing and error handling with Cypress and Sentry",
        "Managed quality assurance bugs and updates in a fast-paced Agile environment",
        "Collaborated with UI/UX designers to create and implement new prototypes for the dashboard website"
      ],
      tech: [
        "React", "Cypress", "Sentry", "CouchDB"
      ],
    },
    {
      company: "Boo",
      range: "May 2021 - Aug 2021",
      role: "Full Stack Software Engineer Intern",
      bulletPoints: [
        "Implemented full stack daily question board and voice messaging features that boosted app activity by 300%",
        "Prototyped frontend designs and translated wireframes to Flutter UI",
        "Led REST API lifecycle development with thorough design, documentation, and Chai integration testing",
        "Communicated with growth and product teams about business decisions, database schema designs, and other pertinent issues"
      ],
      tech: [
        "Node.js", "MongoDB", "Express", "Flutter"
      ],
    },
    {
      company: "Responsival",
      range: "Feb 2021 - Apr 2021",
      role: "Web Development Intern",
      bulletPoints: [
        "Implemented responsive, mobile-first mini web applications with HTML, CSS, and JS libraries",
        "Integrated technologies such as Webflow, AWS, and server-side JS into frontend development",
        "Developed a custom eCommerce case study website with the Shopify Liquid templating language",
        "Collaborated with marketing department to incorporate SEO and increase client traffic by 500%"
      ],
      tech: [
        "HTML", "CSS", "JS", "Shopify Liquid"
      ],
    },
  ],
  projectInfo: [
    {
      title: "C0 Compiler",
      description: <div>
        Designed a compiler in OCaml compiling C0, a safe subset of C, into x86 assembly and LLVM. 
        Semester partner project for 15-411 Compiler Design with 
        <a href="https://zacksussman.com/" aria-label="Project GitHub" target="_blank" rel="noreferrer"> Zack Sussman</a>.
        An absolute favorite, ask me about it!</div>,
      tech: [
        "OCaml", "C", "x86 Assembly", "Compiler Design"
      ],
      picture: compiler
    },
    {
      title: "\"Chessing\" Discord Bot",
      description: "Created Discord bot that allows users to play chess, listen to YouTube media, and create randomized teams. Designed using Node.js and MongoDB Atlas and deployed with Heroku and GitHub.",
      tech: [
        "Node.js", "Discord.js", "MongoDB", "Heroku"
      ],
      githubLink: "https://github.com/jimmyzhang28/ChessingDiscordBot",
      externalLink: "https://discord.com/oauth2/authorize?client_id=741773920570441910&scope=bot",
      picture: discord
    },
    {
      title: "Song Match Alexa Skill",
      description: "Created Alexa skill that allows users to receive a song match based on their preferences. Structured using Alexa Skills Kit SDK for Node.js and deployed with Alexa Developer Console and AWS Lambda endpoints.",
      tech: [
        "Node.js", "Alexa Skills Kit", "AWS Lambda", "YouTube API"
      ],
      githubLink: "https://github.com/jimmyzhang28/SongMatchSkill",
      externalLink: "https://www.amazon.com/Jimmy-Zhang-SongMatchSkill/dp/B08XQHP2LK/",
      picture: alexa
    },
    {
      title: "This Website!",
      description: "A fun project made with the React framework that taught me more about HTML, CSS, and SEO strategies. Enjoy the product!",
      tech: [
        "React", "HTML", "CSS"
      ],
      githubLink: "https://github.com/jimmyzhang28/personal-site",
      picture: website
    },
  ]
};

export { experiences };