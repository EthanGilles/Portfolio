import portfolio from "../assets/projects/portfolio-thumbnail.png";
import latex from "../assets/projects/latex.png"
import daily from "../assets/projects/daily.png"
import nvim from "../assets/projects/nvim.png"
import compiler from "../assets/projects/compiler.png"
import sports from "../assets/projects/sports.png"
import resources from "../assets/projects/resources.png"


export const HERO_CONTENT = `
Hi! I'm Ethan. 
I'm a Senior studying Computer Science at the University of Southern Maine. 
I have a deep interest in tech, especially in IT, DevOps and Automation. 
My coursework has given me with experience in building projects using languages like Python and Java. 
In my free time I enjoy working with different front-end frameworks, scripting, and learning new technologies. 
Professionally I have experience within IT and automation, completing a project to automate updates using PowerShell and Ansible during my last summer internship. 
I'm excited to be starting my career in the tech industry and look forward to learning more!`;

export const ABOUT_TEXT = `
My journey into Computer Science started with a genuine curiosity about how computers work, taking my first programming classes in highschool as electives. 
Over time, I discovered that I truly love the process of learning itself, and with technology and development, it is always easy for me to find new things I'm excited to learn about.
Before my Computer Science undergraduate I spent a year traveling across the continental U.S. in a van that I converted myself, which gave me the opportunity to explore and meet new people. 
Outside of technology, I have all sorts of interests like skiing, traveling, hiking, biking, live music, and disc golf. 
At home I like building things, playing video games, tending to my plants and reading. 
Spending quality time with family, friends, my girlfriend, and my cat Olive is always something I'm looking forward to. 
`;

export const EXPERIENCES = [
  {
    year: "September 2024 - December 2024",
    role: "Second Year IT Service Operations Intern",
    company: "Sweetser",
    description: "Successfully integrated a new imaging software into the existing infrastructure during the migration to Windows 11. Working with the director of IT and sales engineers to ensure a seamless transition. Kept Active Directory, ConnectWise Automate, Azure Intune and Sophos up to date with current users. Provided excellent customer service to end users via the IT help desk line",
    technologies: ["Active Directory", "Server Administration", "Virtualization" ],
  },
  {
    year: "January 2024 - Present",
    role: "Student Assistant and Teachers Assistant",
    company: "University of Southern Maine",
    description: "I was a Teacher's assitant for COS 161 - Algorthms in Programming and COS285 - Discrete Mathematics II where I attended labs, graded and gave feedback for over 25 students. During the summer I created student resources that are featured on the USM website using LaTeX, covering: Dynamic Programming, Divide and Conquer, Greedy Algorithms, Genetic Algorithms, Simulated Annealing, Github and Unix that you can see up in the projects section!",
    technologies: ["LaTeX", "Algorithms", "GitHub", "Unix"],
  },
  {
    year: "May - August 2024",
    role: "Systems Administrator Intern",
    company: "Martin's Point Healthcare",
    description: `Successfully automated all tickets from the development team for deploying application updates using Ansible,  the Ansible Automation Platform and PowerShell scripting. Assisted with migrating the organization to Windows 11 by transferring GPOs from on-site AD to Intune. Used SCCM to deploy weekly application updates to UAT and Production servers.`,
    technologies: ["Ansible", "SCCM", "Azure", "Intune", "MDM"],
  },
  {
    year: "January - May 2024",
    role: "IT Service Operations Intern",
    company: "Sweetser",
    description: `Maintained device and hardware inventory by updating ConnectWise with new users and retired machines. Provided excellent customer service to end users.`,
    technologies: ["Active Directory", "ConnectWise", "Customer Service"],
  },
  {
    year: "May - August 2023",
    role: "Cybersecurity Engineer Intern",
    company: "Central Maine Healthcare",
    description: `Conducted vulnerability assessments and routine system checks for a network of over 3,000 employees. Utilized tools such as Ivanti Neurons, Lansweeper, Medigate, Tyler MDR, and Tenable Nessus for network monitoring, vulnerability management, and threat detection.`,
    technologies: ["DNS", "IPv4", "Nessus", "MDR", "Patch Management"],
  },
];

export const PROJECTS = [
  {
    title: "PleaseLang / Please Compiler",
    image: compiler,
    description:
      "The Please Compiler is a fun project that enforces politeness in a programming language I made called PleaseLang, a language where code must include polite expressions. This project incorporated humor while providing hands-on experience in language design and compiler construction.",
    technologies: ["C++", "CMake", "x86 Assembly"],
    url: "https://github.com/EthanGilles/pleaselang",
  },
  {
    title: "Sports Classification Convolutional Neural Network",
    image: sports,
    description:
      "Implemented a Convolutional Neural Network (CNN) using PyTorch to classify images of various sports. The primary objective was to develop a model that can accurately identify the sport being played in any given image.",
    technologies: ["Python", "PyTorch", "Sklearn", "Matplotlib"],
    url: "https://github.com/EthanGilles/sports-classification",
  },
  {
    title: "Apache Web Server",
    image: latex,
    description:
      "Setup a dedicated home Linux Apache server to aid with web development and creating LaTeX documents. I learned how to install and configure Apache and how to deploy services using a Docker container. This allowed me to deploy the open-source service OverLeaf on a home server, so I could create documents without having to use an IDE and gain the functionality of a fully paid Overleaf subscription. This helped solidify my knowledge of Linux, networking, Git and containerization.",
    technologies: ["UNIX/Linux", "Apache", "Bash", "Docker"],
    url: "https://github.com/EthanGilles/apache_parser",
  },
  {
    title: "NeoVim Configuration",
    image: nvim,
    description:
      "My personal NeoVim configuration that I can easily use on any new Debian based machine. It has support for editing code in any language I normally use as well as snippets, autocomplete, and syntax highlighting. Creating the configuration helped me learn Lua and more about configuring Linux machines. Additionally, I created a script to install all the needed dependencies for the configuration using Bash. I made sure to take time and document all of the features of the configuration to make it easy for me to remember keybinds, plugin configuration, and other things.",
    technologies: ["Bash", "Lua", "Technical Documentation"],
    url: "https://github.com/EthanGilles/nvim",
  },
  {
    title: "Reddit News Script - Python",
    image: daily,
    description:
      "This script grabs the titles from a list of subreddits you can customize. It uses the praw library in python and the Reddit API for authentication. It is meant to be a simple CLI tool for listing some information from the internet. The script is called daily as its meant to be called daily, to update you on whatever Subreddits you're interested in.",
    technologies: ["Python", "PRAW", "APIs" ],
    url: "https://github.com/EthanGilles/daily",
  },
  {
    title: "This Website!",
    image: portfolio,
    description:
      "My personal portfolio website showcasing projects, skills, and info about me. I loosely designed the website using Figma, then I learned the React framework in this project, using different libraries like Framer Motion and Slick to create responsive components for the site. I used Tailwind CSS for styling and Pixlr for photo editing and the custom logo. I deployed it using Vercel.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML"],
    url: "https://github.com/EthanGilles/Portfolio",
  },
  {
    title: "Computer Science Student Resources",
    image: resources,
    description:
      "I created student resources that are featured on the USM Website using LaTeX, with topics covering: Dynamic Programming, Divide and Conquer, Greedy Algorithms, Genetic Algorithms, Simulated Annealing, Github, and Unix. I also created course specific cheat sheets to help students at the University of Southern Maine with their coursework. I worked under the chair of the Computer Science Department to create these resources.",
    technologies: ["LaTeX", "Algorithms", "Unix", "GitHub"],
    url: "https://github.com/EthanGilles/Algorithms-Resources/tree/main/finished-pdf",
  },
];

export const CONTACT = {
  address: "Lewiston, ME",
  phoneNo: "(207) 530-2580",
  email: "ehgilles01@gmail.com",
};
