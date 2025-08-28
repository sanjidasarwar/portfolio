export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];


export const myProjects = [
  {
    title: 'Connectify - Real-Time Chat App',
    desc: 'Connectify is a real-time chat platform that supports both one-to-one and one-to-many conversations, enabling seamless communication with live updates and secure authentication.',
    subdesc:
      'Built with React, Node.js, Express, MongoDB, Socket.io, and JWT authentication, this app offers instant messaging, user authentication, password reset, and responsive design for all devices.',
    href: 'https://chatapp-597g.onrender.com/', 
    texture: '/textures/project/chat-app.mp4',
    logo: '/assets/chat-logo.png',
    logoStyle: {
      backgroundColor: '#1B1F23',
      border: '0.2px solid #2D333B',
      boxShadow: '0px 0px 60px 0px #4A90E24D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Node.js', path: '/assets/nodejs.png' },
      { id: 3, name: 'Socket.io', path: '/assets/socketio.png' },
      { id: 4, name: 'MongoDB', path: '/assets/mongodb.png' },
    ],
  },
  {
    title: 'ShopEase - E-Commerce Platform',
    desc: 'ShopEase is a modern e-commerce application that delivers fast, SEO-optimized shopping experiences with a focus on responsive design and smooth user interactions.',
    subdesc:
      'Developed using React, Tailwind CSS, Redux, and Node.js, it supports product listing, cart management, authentication, and payment gateway integration.',
    href: 'https://ecommercefrontend-y58n.onrender.com/', 
    texture: '/textures/project/ecommerce.mp4',
    logo: '/assets/ecommerce-logo.webp',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.png' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      { id: 3, name: 'Redux', path: '/assets/redux.png' },
      { id: 4, name: 'Node.js', path: '/assets/nodejs.png' },
    ],
  },
  {
    title: 'PlayListify - YouTube Playlist Manager',
    desc: 'PlayListify allows users to create and manage personalized YouTube playlists, organize favorite videos, and quickly access recent playlists in a sleek dark-themed interface.',
    subdesc:
      'Built with React, Material UI, and YouTube API, featuring custom theme colors, responsive design, and smooth animations.',
    href: 'https://reactyoutubeplaylist.netlify.app/', 
    texture: '/textures/project/playlist.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.png' },
      { id: 2, name: 'Material UI', path: '/assets/mui.png' },
      { id: 3, name: 'YouTube API', path: '/assets/utube.jpg' },
      { id: 4, name: 'JavaScript', path: '/assets/js.png' },
    ],
  },
  // {
  //   title: 'FinTrack - Monthly Financial Dashboard',
  //   desc: 'FinTrack helps users track their monthly income, expenses, and savings with a clean, easy-to-use dashboard that supports fixed expense categories and dynamic charts.',
  //   subdesc:
  //     'Built with React, Bootstrap, and Chart.js, it provides an interactive interface to analyze spending patterns and manage personal finances effectively.',
  //   href: 'https://github.com/sanjidasarwar/financial-dashboard', 
  //   texture: '/textures/project/finance.mp4',
  //   logo: '/assets/project-logo-finance.png',
  //   logoStyle: {
  //     backgroundColor: '#60f5a1',
  //     background:
  //       'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
  //     border: '0.2px solid rgba(208, 213, 221, 1)',
  //     boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
  //   },
  //   spotlight: '/assets/spotlight-finance.png',
  //   tags: [
  //     { id: 1, name: 'React.js', path: '/assets/react.svg' },
  //     { id: 2, name: 'Bootstrap', path: '/assets/bootstrap.png' },
  //     { id: 3, name: 'Chart.js', path: '/assets/chartjs.png' },
  //     { id: 4, name: 'JavaScript', path: '/assets/javascript.png' },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
