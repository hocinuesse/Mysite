import weatherImg from './img/Gemini_Generated_Image_dwlu7jdwlu7jdwlu.png'

export const personalInfo = {
  name: "Your Name",
  title: "Professional Frontend Developer",
  description: "I am a passionate developer specializing in building modern, responsive web applications using React. I focus on delivering excellent user experiences and writing clean, maintainable code.",
  email: "contact@example.com",
  phone: "+123 456 789",
  socials: {
    github: "#",
    linkedin: "#",
    twitter: "#"
  }
};

export const projects = [
  {
    id: 1,
    title: "Weather, Visualized.",
    description: "Experience the world's weather through a seamless blend of precise data and stunning realism. Get live, accurate forecasts for any city, presented with clarity and beauty.",
    image: `${weatherImg}`,
    tags: ["React", "Api", "Fetch"],
    link: "#"
  },
  {
    id: 2,
    title: "Not yet",
    description: "Pending...",
    image: "#",
    tags: ["Pending...", "Pending...", "Pending..."],
    link: "#"
  },
  {
    id: 3,
    title: "Not yet",
    description: "Pending...",
    image: "#",
    tags: ["Pending...", "Pending...", "Pending..."],
    link: "#"
  },
  // {
  //   id: 4,
  //   title: "Dashboard",
  //   description: "Administrative control panel displaying real-time statistics and data.",
  //   image: "https://placehold.co/600x400/1a1a1a/FFF?text=Dashboard",
  //   tags: ["React", "Charts.js", "Material UI"],
  //   link: "#"
  // }
];

export const skills = [
  { name: "React.js", level: 80 },
  { name: "JavaScript (ES6+)", level: 85 },
  { name: "CSS3 / Modules", level: 85 },
  { name: "Git & Github", level: 80 },
  { name: "UI/UX Principles", level: 80 },
  { name: "Responsive Design", level: 90 }
];

export const pricing = [
  {
    id: 1,
    title: "Basic",
    price: "$35 - 60$",
    features: ["3-5 business days ", "1-3 page website" , "Fully responsive design" , "Easy to customize" , "Contact Form", "1 Week Support"],
    recommended: false
  },
  {
    id: 2,
    title: "Professional",
    price: "$100 +",
    features: ["Basic +" , "3-7 page website", "Custom Design", "Advanced animations", "SEO Optimization", "Revisions: 2 times" , "15 days Support"],
    recommended: true
  },
  {
    id: 3,
    title: "Advanced",
    price: "$300+",
    features: [ "Professional +" , "Full Website", "5-10 page website", "API integration", "Modern framework (React)", "Advanced forms" , "1 Month Support" , "Revisions: 3 times"],
    recommended: false
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Not yet",
    role: "pending...",
    text: "pending..."
  },
  {
    id: 2,
    name: "Not yet",
    role: "pending...",
    text: "pending..."
  },
  {
    id: 3,
    name: "Not yet",
    role: "pending...",
    text: "pending..."
  }
];
