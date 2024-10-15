import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Hi! I'm Ethan. I'm a Senior studying Computer Science at the University of Southern Maine. I have a deep interest in tech, especially in IT, DevOps and Automation. My coursework has given me with experience in building projects using languages like Python and Java, and in my free time I enjoy working with different front-end frameworks and scripting. Professionally, I have experience in IT with automation, completing a project to automate updates using PowerShell and Ansible during my last summer internship. I'm excited to be starting my career in the tech industry and look forward to learning more!`;

export const ABOUT_TEXT = `Outside of technology, I have a wide range of interests that keep me balanced and engaged. I enjoy traveling, skiing, reading, hiking, biking, live music, and disc golf. I also enjoy building things, playing video games, and tending to my collection of house plants. Spending quality time with family, friends, my girlfriend Althea, and my cat Olive is something I deeply value. Prior to beginning my Computer Science undergraduate studies, I spent a transformative year traveling across the continental U.S. in a van, which gave me the opportunity to explore diverse landscapes and meet new people.

My journey into technology began with a deep curiosity about how computers work, but over time, I discovered that I truly love the process of learning itself. I’m constantly seeking out new challenges and enjoy applying my knowledge to small projects, which allow me to explore new concepts while also helping others. This combination of curiosity and the desire to build practical solutions keeps me motivated in my studies and work.`;

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
      "A personal portfolio website showcasing projects, skills, and contact information. I learned the React framework in this project, using different libraries and components to make this site. I used Tailwind CSS for styling.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML"],
  },
];

export const CONTACT = {
  address: "",
  phoneNo: "",
  email: "ehgilles01@gmail.com",
};
