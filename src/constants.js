const htmllogo= "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg";
const cssLogo = "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg";
const javascriptLogo = "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg";
const reactjsLogo = "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg";
const reduxLogo = "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg";
const nextjsLogo = "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg";
const tailwindcssLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png";
const bootstrapLogo = "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg";
const nodejsLogo = "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg";
const expressjsLogo = "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg";
const mysqlLogo = "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg";
const mongodbLogo = "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg";
const javaLogo = "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg";
const typescriptLogo = "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg";
const gitLogo = "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg";
const githubLogo = "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png";
const vscodeLogo = "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg";
const postmanLogo = "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg";
const aimdekLogo = "https://tse3.mm.bing.net/th/id/OIP.n3I2kWYT1DnYrGHrEd8SRwHaD4?rs=1&pid=ImgDetMain&o=7&rm=380";
const indusUniversityLogo = "https://th.bing.com/th/id/R.298148233e6c02fdf55ae16942868926?rik=g0aCDXIBwsSQ6w&pid=ImgRaw&r=0";
const seventhdayLogo = "https://static.wixstatic.com/media/944ab9_982914b7d7614da2a8f3efc7b605f058~mv2.png/v1/fill/w_120,h_129,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo.png";
const wanderlustLogo = "https://tse4.mm.bing.net/th/id/OIP.hQ4Bu6X1LTKPHoORMr2KgAHaEW?rs=1&pid=ImgDetMain&o=7&rm=3";
const groceryLogo = "https://th.bing.com/th/id/R.f99f4cf46871e1ee7c213fb07f9633a9?rik=nWVovexw9DuGCA&pid=ImgRaw&r=0";
const fitnessLogo = "https://tse3.mm.bing.net/th/id/OIP.mGJlkvj0krRxW-7Ej7SbrQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3";
const simonsaysLogo = "https://tse4.mm.bing.net/th/id/OIP._DqbfuQBpdbyhocLTFYu1QAAAA?rs=1&pid=ImgDetMain&o=7&rm=3";
const musicplayerLogo = "https://tse1.mm.bing.net/th/id/OIP.st0OTMpDIUtoXVgOKlM3xwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3";
const minipostsLogo = "https://tse1.mm.bing.net/th/id/OIP.QKqMu0zqysY1Ncp0ssg38QAAAA?rs=1&pid=ImgDetMain&o=7&rm=3";
const amazoncloneLogo = "https://tse3.mm.bing.net/th/id/OIP.5o2KeyA_SrYy7luL1fj53AAAAA?w=350&h=197&rs=1&pid=ImgDetMain&o=7&rm=3";
import profileImage from "./assets/professional.jpg";

const about= {
  img: profileImage,
  description: "An Enthusiastic and self-motivated IT fresher with a willingness to learn. I am a quick learner and keen to work on a new technologies with a great interest. Eager to apply theoretical knowledge intoreal-world Scenario to organizational goals. A proactive approach to learning new technologies. Good in communication and team work abilities, with a keen interest in collaborating with Experienced professionals to gain valuable knowledge and experience in the IT field."
}

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmllogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo }
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: aimdekLogo,
      role: "Fullstack Developer",
      company: "Aimdek Technologies pvt ltd",
      date: "Feb 2025 - Sept 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: indusUniversityLogo,
      role: "Machine Learning Intern",
      company: "Indus University",
      date: "Nov 2023 - Dec 2023",
      desc: "worked on various machine learning projects, including data preprocessing, model development, and evaluation. Gained hands-on experience with popular ML libraries and frameworks, and contributed to improving model accuracy and performance through feature engineering and hyperparameter tuning.",
      skills: [
        "Python",
        "Machine Learning",
        "Data Analysis",
        "Pandas",
        "Numpy",
      ],
    },
    {
      id: 2,
      img: indusUniversityLogo,
      role: "Flutter Development Intern",
      company: "Indus University",
      date: "June 2022 - July 2022",
      desc: "Worked on developing cross-platform mobile applications using Flutter and Dart. Implemented user interfaces, integrated APIs, and ensured optimal performance across different devices. Collaborated with the team to deliver high-quality mobile solutions within project timelines.",
      skills: [
        "Flutter",
        "Dart",
        "Firebase",
        "Git",
        "GitHub",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: indusUniversityLogo,
      school: "Indus University, Ahmedabad",
      date: "Sept 2021 - May 2025",
      grade: "9.84 CGPA",
      desc: "I am currently pursuing my Bachelor of Computer Engineering (B.Tech) at Indus University, Ahmedabad. I have completed my 6th and 7th semesters with a CGPA of 9.84, maintaining a consistent academic record throughout my studies.",
      degree: "Bachelor of Computer Engineering - B.tech (CE)",
    },
    {
      id: 1,
      img: seventhdayLogo,
      school: "SeventhDay Adventist Higher Secondary School, Ahmedabad",
      date: "Mar 2020 - Aug 2021",
      grade: "86%",
      desc: "I completed my class 12 education from SeventhDay Adventist Higher Secondary School, Ahmedabad, under the ISC board, where I studied Physics, Chemistry, Mathematics, and Computer Science.",
      degree: "ISC(XII)",
    },
    {
      id: 2,
      img: seventhdayLogo,
      school: "SeventhDay Adventist Higher Secondary School, Ahmedabad",
      date: "Mar 2018 - Aug 2019",
      grade: "79%",
      desc: "I completed my class 10 education from SeventhDay Adventist Higher Secondary School, Ahmedabad, under the ICSE board, where I studied Physics, Chemistry, Mathematics, and Computer Science.",
      degree: "ICSE(XII)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Travel Website: WanderLust",
      description:
        "A responsive travel website built using HTML, CSS, and JavaScript. It features visually appealing animations and a user-friendly interface to enhance the user experience. The website provides information about various travel destinations, travel packages, and booking options.",
      image: wanderlustLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS"],
      github: "https://github.com/harini1503-git/wanderlust--travel-website-fullstack",
    },
    {
      id: 1,
      title: "Karma: Your Grocery Shopping Companion",
      description:
        "A web application that connects shoppers with local grocery stores, providing a seamless shopping experience and helping shoppers navigate their shopping jour",
      image: groceryLogo,
      tags: ["Dart", "Flutter", "Firebase", "API"],
      github: "https://github.com/harini1503-git/Flutter/tree/main/Flutter",
    },
    {
      id: 2,
      title: "Fitness Application:  Fitness Mini Trainer application ",
      description:
        "Developed a mobile fitness application called Fitness Mini Trainer using XML and Java. The application is designed to help users create personalized workout routines, track their fitness progress, and access detailed exercise instructions with diet routines and exercises for weight gain and loss.",
      image: fitnessLogo,
      tags: ["XML", "Java", "Android Studio", "Firebase"],
      github: "https://github.com/harini1503-git/Android-Application",
    },
    {
      id: 3,
      title: 'Simon Says Game',
      description: 'Technologies: HTML, CSS, JavaScript Developed an interactive, browser-based version of the classic Simon Says game using HTML, CSS, and JavaScript. The game challenges players to memorize and repeat sequences of colors and sounds generated in increasing difficulty.',
      image: simonsaysLogo,
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/harini1503-git/Simon-Says-Game-JavaScript',
    },
    {
      id: 4,
      title: 'Python Music Player',
      description: 'Technologies: Python, Tkinter Developed a fully functional music player application using Python and the Tkinter library. The player allows users to load, play, pause, and navigate through audio tracks. ',
      image: musicplayerLogo,
      tags: ['Python', 'Tkinter', 'Pygame'],
      github: 'https://github.com/harini1503-git/Python-music-player',
    },
    {
      id: 5,
      title: 'Mini-Posts Application',
      description: 'Technologies: JavaScript (Node.js, Express), MongoDB, HTML, CSS, Restful APIs Developed a full-stack web application that allows users to create, view, and manage posts, with a backend connected to a database for persistent storage.',
      image: minipostsLogo,
      tags: ['Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/harini1503-git/Mini-posts',
    },
    {
      id: 6,
      title: 'Amazon Clone UI',
      description: 'Technologies: HTML, CSS Developed a responsive, pixel-perfect clone of the Amazon website front-end using HTML and CSS. The project focuses on replicating the core design and layout of Amazon’s homepage, product pages, and navigation.',
      image: amazoncloneLogo,
      tags: ['HTML', 'CSS'],
      github: 'https://github.com/harini1503-git/Amazon-cloning-',
    },
  ];  

export default about;