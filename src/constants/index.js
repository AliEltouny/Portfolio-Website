const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Coding Experience" },
  { value: 4, suffix: "+", label: "Satisfied Teams" },
  { value: 8, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Team Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Ali's Restaurant Management System demonstrates strong front-end development skills using only HTML, CSS, and JavaScript. It delivers a functional and role-based interface for restaurant operations.",
    imgPath: "/images/exp7.png", // Editable project screenshot
    logoPath: "/images/logo7.svg", // Editable project logo
    imgStyle: { width: "50%", height: "auto" },
    logoStyle: { width: "50px", height: "50px", objectFit: "contain", marginLeft: "0px", marginTop: "7px" }, // Added marginLeft and marginTop for fine-tuning logo position
    title: "Front-End Developer – Restaurant Management System",
    date: "January 2023 – June 2023",
    responsibilities: [
      "Designed and built a responsive multi-page web app using HTML, CSS, and JavaScript.",
      "Created separate interfaces for admin (table & order management), staff (waitlist & reservations), and guests (online ordering).",
      "Implemented dynamic page interactions and real-time UI updates with vanilla JavaScript.",
      "Focused on user experience and interface clarity across all user roles."
    ],
  },
  {
    review:
      "Ali's Unity kitchen simulator showcased impressive game mechanics and creativity. The attention to detail in modeling and interactivity was outstanding.",
    imgPath: "/images/exp6.png", // Editable image for the card
    logoPath: "/images/logo6.png", // Editable logo for the circle
    imgStyle: { width: "50%", height: "auto" }, // Allow resizing the image in the card
    logoStyle: { width: "50px", height: "50px", objectFit: "contain", marginLeft: "-7px" }, // Added marginLeft for fine-tuning logo position
    title: "Game Developer – Kitchen Chaos",
    date: "September 2023 – January 2024",
    responsibilities: [
      "Developed a 3D multiplayer kitchen simulation game using Unity.",
      "Modeled characters, utensils, and environment assets in Blender.",
      "Designed game logic, task systems, and multiplayer interactions inspired by Overcooked.",
      "Enhanced gameplay with animations, audio, and UI elements."
    ],
  },
  {
    review:
      "Ali applied machine learning effectively in a real-world scenario. His food detection system achieved high accuracy using YOLO and a well-mapped nutrition dataset.",
    imgPath: "/images/exp4.png", // Editable image for the card
    logoPath: "/images/logo4.png", // Editable logo for the circle
    imgStyle: { width: "50%", height: "auto" }, // Allow resizing the image in the card
    logoStyle: { width: "50px", height: "50px", objectFit: "contain" }, // Allow resizing the logo in the circle
    title: "Machine Learning – Nutrition Detection",
    date: "January 2024 – June 2024",
    responsibilities: [
      "Developed a food detection system using YOLO and Python in Jupyter Notebook.",
      "Mapped detected classes to nutritional data from a public dataset with high precision.",
      "Delivered accurate real-time nutritional insights from scanned food images.",
      "Fine-tuned detection accuracy and tested across various food samples."
    ],
  },
  {
    review:
      "Ali crafted a creative and technically impressive 3D portfolio with stunning animations and responsive design. It reflects both front-end expertise and design sensibility.",
    imgPath: "/images/exp5.png", // Editable image for the card
    logoPath: "/images/logo5.png", // Editable logo for the circle
    imgStyle: { width: "40%", height: "auto" }, // Allow resizing the image in the card
    logoStyle: { width: "50px", height: "50px", objectFit: "contain" }, // Allow resizing the logo in the circle
    title: "Frontend Developer – 3D Portfolio",
    date: "January 2025 – Present",
    responsibilities: [
      "Created a 3D portfolio website using Next.js, Three.js, and GSAP animations.",
      "Displayed projects as 3D scenes with responsive and interactive design.",
      "Optimized animations and models for smooth performance across devices.",
      "Focused on UI/UX to make navigation intuitive and engaging."
    ],
  },
  {
    review:
      "Ali demonstrated exceptional full-stack skills by building a robust university management app. His use of modern frameworks and deployment tools ensured a smooth and scalable experience.",
    imgPath: "/images/exp3.png", // Editable image for the card
    logoPath: "/images/logo3.png", // Editable logo for the circle
    imgStyle: { width: "50%", height: "auto" }, // Allow resizing the image in the card
    logoStyle: { width: "50px", height: "50px", objectFit: "contain" }, // Allow resizing the logo in the circle
    title: "Full Stack Developer – University App",
    date: "January 2025 – Present",
    responsibilities: [
      "Built a university portal using Next.js, TypeScript, and Django backend.",
      "Containerized the app using Docker for smooth deployment and environment consistency.",
      "Integrated REST APIs with Python/Django for dynamic data management.",
      "Implemented role-based features for students and admins with responsive design."
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Sarah Mahmoud",
    mentions: "@sarahmahmoud",
    review:
      "Ali was a key player in our final year group project. His work on the backend with Django and containerization with Docker helped streamline our deployment process massively. Always reliable and sharp under pressure.",
    imgPath: "/images/sarah.png",
    style: { width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }, // Added style for circular image and resizing
  },
  {
    name: "Mohamed Tarek",
    mentions: "@tarek.tech",
    review:
      "Working with Ali on our machine learning coursework was a great experience. He handled the YOLO model training and Jupyter integration with ease. His ability to link technical components to practical outputs stood out.",
    imgPath: "/images/killua.gif",
    style: { width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" },
  },
  {
    name: "Nour ElDin Saeed",
    mentions: "@noureldin",
    review:
      "Ali’s 3D portfolio project blew us away. His work with Three.js and GSAP looked so polished and professional. He’s not only a great coder but also has a solid eye for design and UX.",
    imgPath: "/images/zoro2.gif",
    style: { width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" },
  },
  {
    name: "Lina Adel",
    mentions: "@lina.3d",
    review:
      "Ali’s Blender modeling skills really impressed me. He helped create detailed and optimized 3D assets for our game project, and his attention to shape and texture made everything look professional inside Unity.",
    imgPath: "/images/lina.png",
    style: { width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" },
  },
  {
    name: "Mohamed Amgad",
    mentions: "@mohamedamgad",
    review:
      "Ali and I worked together on a restaurant management web app for our coursework. He handled key front-end features using HTML, CSS, and JavaScript, including order flows, table interfaces, and role-based UI. His code was clean and easy to integrate with the rest of the project.",
    imgPath: "/images/amgad.png",
    style: { width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" },
  },
  {
    name: "Khaled Gamal ",
    mentions: "@khaleddev",
    review:
      "I’ve collaborated with Ali on Unity game dev, and I can confidently say he’s both creative and technically skilled. His Blender models and game logic in our kitchen sim project brought everything to life.",
    imgPath: "/images/pfp2.png",
    style: { width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" },
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    href: "https://www.instagram.com/ali.eltouny/", // Added href for Instagram
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    href: "https://www.facebook.com/ali.eltouny.39", // Added href for Facebook
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    style: { width: "22.5px", height: "22.5px" }, // Added style property for resizing
    href: "https://github.com/AliEltouny", // Added href for GitHub
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    href: "https://www.linkedin.com/in/ali-eltouny-076aa3279/", // Added href for LinkedIn
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};