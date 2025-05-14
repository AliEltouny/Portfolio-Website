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
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 2, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 70, suffix: "%", label: "Client Retention Rate" },
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
      "Ali's Unity kitchen simulator showcased impressive game mechanics and creativity. The attention to detail in modeling and interactivity was outstanding.",
    imgPath: "/images/exp6.png", // Editable image for the card
    logoPath: "/images/logo6.png", // Editable logo for the circle
    imgStyle: { width: "50%", height: "auto" }, // Allow resizing the image in the card
    logoStyle: { width: "50px", height: "50px", objectFit: "contain", marginLeft: "-7px" }, // Added marginLeft for fine-tuning logo position
    title: "Game Developer – Kitchen Chaos",
    date: "January 2023 – June 2023",
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
    title: "Machine Learning Engineer – Nutrition Detection",
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
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
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