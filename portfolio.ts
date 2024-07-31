import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Althaf Azad",
  title: "Hi all, I'm Althaf",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with React.js, Java and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "https://althaf-portfolio-storage.s3.ap-south-1.amazonaws.com/Althaf-Software+Engineer.pdf",
};

export const openSource = {
  githubUserName: "althaf99",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:mohamedalthaf872@gmail.com",
  linkedin: "https://www.linkedin.com/in/althaf-azad-290aaa19b/",
  github: "https://github.com/Althaf99",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Java Spring Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Java",
          iconifyTag: "logos:java",
        },
        {
          skillName: "Linux",
          iconifyTag: "devicon:linux",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Prometheus",
          iconifyTag: "devicon:prometheus",
        },
        {
          skillName: "Kubernetes",
          iconifyTag: "devicon:kubernetes",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Grafana",
          iconifyTag: "logos:grafana",
        },
      ],
    },
  ],
};


export const educationInfo: EducationType[] = [
  {
    schoolName: "NSBM",
    subHeader: "Bachelor of Science in Software Engineer",
    duration: "February 2020 - December 2023",
    desc: "",
    grade: "Honours",
    descBullets: [], // Array of Strings
  },
];

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "80",
  },
  {
    Stack: "DevOps",
    progressPercentage: "60",
  },
];


export const experience: ExperienceType[] = [
  // {
  //   role: "Django Developer",
  //   company: "Meganos Software",
  //   companyLogo: "/img/icons/common/meganos.png",
  //   date: "Aug 2022 - Present",
  //   desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
  // },
  {
    role: "Software Engineer",
    company: "Randoli.io",
    companyLogo: "/img/icons/common/randoli.jpeg",
    date: "Nov 2023 - Present",
    desc: "",
    descBullets: [
    	"Mentored junior front-end developers on a team to expand their JavaScript, React and CSS skillsets",
    	"Collaborated with project managers to ensure alignment with the project plan and timeline.",
      "Participated in design and code review processes while providing recommendations for best practices."
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Randoli.io",
    companyLogo: "/img/icons/common/randoli.jpeg",
    date: "Nov 2022 - Nov 2023",
    desc: "",
    descBullets: [
    	"Did the full flow testing of the applications to find out the bottle neck in API request and fixed the unwanted request using proper react query.",
    	"Helped the team to migrate the prod environment from AWS to Azure.",
      "Enhanced the web application speed by refactoring the whole code base using ReactJs best practices.",
      "Created an ui-library to separate the ui components from the base code.",
      "Separated the java services to apply micro-service architecture.",
      "Added Prometheus end point and added grafana dashboard for the important services."
    ],
  },
  {
    role: "Intern Software Engineer",
    company: "Randoli.io",
    companyLogo: "/img/icons/common/randoli.jpeg",
    date: "Apr 2022 - Nov 2022",
    desc: "",
    descBullets: [
    	"Updated the product website to include the new features guidelines and instructions.",
    	"Created the testing story for UI components using Story-Book.",
      "Added integration feature with slack and pager-tree.",
      "Updated the styling from material UI version 4 to mui-meterial version 5.",
      "Wrote the common and efficient approach to manage responsiveness in all the pages.",
      "Wrote documentation for up coming features and draw flow charts and diagram in confluence."
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "Inventory management system.",
    desc: "ReacJs | Java Spring Boot | PostgresSQL",
    github: "https://github.com/Althaf99/FujicraftApplication",
    // link: "https://prod.ds9mib04jgcnk.amplifyapp.com/dashboard",
  },
  {
    name: "LMS",
    desc: "ReactJs | Java Spring Boot | PostgresSQL",
    github: "https://github.com/Althaf99/LMS",
  },
  {
    name: "E-Commerce web application",
    desc: "MongoDB | ReactJs | NodeJs | ExpressJs",
    github: "https://github.com/Althaf99/product-purchase-back-end",
  },
  {
    name: "Student Attendance Marking Module",
    desc: "Python | MongoDB | Scikit image | Pillow (PIL) | OpenCV | matplotlib",
    github: "https://github.com/Althaf99/computer-graphics-and-visualization-coursework",
  },
  {
    name: "Personal Portfolio",
    desc: "NextJs | Typescript ",
    github: "https://github.com/Althaf99/computer-graphics-and-visualization-coursework",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Althaf Azad",
  description: greetings.description,
  author: "Althaf Azad",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Althaf",
    "Althaf Azad",
    "althaf99",
    "Portfolio",
    "Althaf Portfolio ",
    "Althaf Azad Portfolio",
  ],
};
