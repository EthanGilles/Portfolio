import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Fall 2024 - Present",
    role: "IT Service Operations Returning Intern",
    company: "Sweetser",
    description: `Leading a project with another intern to integrate a new software for imaging into IT. Working with the Director of IT and Sales Engineers ensuring adherance to all best practices during implementation. Also maintaining information on retired devices and hardware to ensure compliance with data destruction standards. Configuring software on Windows 2019 Servers using VSphere for Virtualization.`,
    technologies: ["Active Directory", "Windows Server Administration", "Virtualization", "DNS"],
  },
  {
    year: "Summer 2024",
    role: "Systems Administrator Intern",
    company: "Martin's Point Healthcare",
    description: `Successfully automated all tickets from the development team for deploying application updates using Ansible,  the Ansible Automation Platform and PowerShell scripting. Assisted with migrating the organization to Windows 11 by transferring GPOs from on-site AD to Intune. Also used SCCM to deploy weekly application updates to UAT and Production servers.`,
    technologies: ["Ansible", "SCCM", "Azure", "Intune", "MDM", "Windows 11"],
  },
  {
    year: "Spring 2024",
    role: "IT Service Operations Intern",
    company: "Sweetser",
    description: `Maintained device and hardware inventory by updating ConnectWise with new users and retired machines. Provided excellent customer service to end users.`,
    technologies: ["Active Directory", "ConnectWise Automate", "Customer Service"],
  },
  {
    year: "Summer 2024",
    role: "Cybersecurity Engineer Intern",
    company: "Central Maine Healthcare",
    description: `Conducted vulnerability assessments and routine system checks for a network of over 3,000 employees. Utilized tools such as Ivanti Neurons, Lansweeper, Medigate, Tyler MDR, and Tenable Nessus for network monitoring, vulnerability management, and threat detection.`,
    technologies: ["DNS", "IPv4", "Tenable Nessus", "MDR", "Patch Management"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
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
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "",
  phoneNo: "",
  email: "ehgilles01@gmail.com",
};
