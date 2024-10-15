import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Hi! I'm Ethan. I'm a Senior studying Computer Science at the University of Southern Maine. I have a deep interest in tech, especially in IT, DevOps and Automation. My coursework has given me with experience in building projects using languages like Python and Java, and in my free time I enjoy working with different front-end frameworks, scripting, and contributing to open source projects. Professionally I have experience within IT and automation, completing a project to automate updates using PowerShell and Ansible during my last summer internship. I'm excited to be starting my career in the tech industry and look forward to learning more!`;

export const ABOUT_TEXT = `Before my Computer Science undergraduate I spent a year traveling across the continental U.S. in a van that I converted myself, which gave me the opportunity to explore and meet new people. My journey into Computer Science began with a genuine curiosity about how computers work, taking my first programming classes in highschool as electives. Over time, I discovered that I truly love the process of learning itself, and with technology it is always easy for me to find new things I'm excited to learn about!
I’m always seeking out new challenges and enjoy applying my knowledge to personal projects, which keeps me motivated in my studies and at work. Outside of technology, I have all sorts of interests, I enjoy skiing, reading, hiking, biking, live music, traveling and disc golf. I also like building things, playing video games, and tending to my collection of over 20 house plants. In my time traveling with my family and on my own, I've visited 3 different foreign countries and over 40 US states. Spending quality time with family, friends, my girlfriend Althea, and my cat Olive is something I'm always looking forward to as well. `;

export const EXPERIENCES = [
  {
    year: "September 2024 - Present",
    role: "Second Year IT Service Operations Intern",
    company: "Sweetser",
    description: `Leading a project with another intern to integrate a new software for imaging into IT. Working with the Director of IT and Sales Engineers ensuring adherance to all best practices during implementation. Also maintaining information on retired devices and hardware to ensure compliance with data destruction standards. Configuring software on Windows 2019 Servers using VSphere for Virtualization.`,
    technologies: ["Active Directory", "Windows Server Administration", "Virtualization", "DNS"],
  },
  {
    year: "May - August 2024",
    role: "Systems Administrator Intern",
    company: "Martin's Point Healthcare",
    description: `Successfully automated all tickets from the development team for deploying application updates using Ansible,  the Ansible Automation Platform and PowerShell scripting. Assisted with migrating the organization to Windows 11 by transferring GPOs from on-site AD to Intune. Also used SCCM to deploy weekly application updates to UAT and Production servers.`,
    technologies: ["Ansible", "SCCM", "Azure", "Intune", "MDM"],
  },
  {
    year: "January - May 2024",
    role: "IT Service Operations Intern",
    company: "Sweetser",
    description: `Maintained device and hardware inventory by updating ConnectWise with new users and retired machines. Provided excellent customer service to end users.`,
    technologies: ["Active Directory", "ConnectWise Automate", "Customer Service"],
  },
  {
    year: "May - August 2023",
    role: "Cybersecurity Engineer Intern",
    company: "Central Maine Healthcare",
    description: `Conducted vulnerability assessments and routine system checks for a network of over 3,000 employees. Utilized tools such as Ivanti Neurons, Lansweeper, Medigate, Tyler MDR, and Tenable Nessus for network monitoring, vulnerability management, and threat detection.`,
    technologies: ["DNS", "IPv4", "Tenable Nessus", "MDR", "Patch Management"],
  },
];

export const PROJECTS = [
  {
    title: "Apache Web Server",
    image: project2,
    description:
      "Setup a dedicated home Linux Apache server to aid with Web development. I learned how to install and configure Apache and how to deploy websites using a Docker container. Helped solidify my knowledge of Linux, networking, and Git. Also created a script to parse Apache server logs using Bash to display HTTP codes and connection counts.",
    technologies: ["UNIX/Linux", "Apache", "Bash", "Firebase"],
  },
  {
    title: "This Website!",
    image: project3,
    description:
      "My personal portfolio website showcasing projects, skills, and info about me. I loosely designed the website using Figma, then I learned the React framework in this project, using different libraries like Framer Motion and Slick to create responsive components for the site. I used Tailwind CSS for styling and Pixlr for photo editing and the custom logo. I deployed it on my school's webserver.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML"],
  },
];

export const CONTACT = {
  address: "",
  phoneNo: "",
  email: "ehgilles01@gmail.com",
};
