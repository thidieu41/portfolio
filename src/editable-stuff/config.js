// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ho",
  middleName: "",
  lastName: "Thi Dieu",
  message: " Passionate about changing the world with technology. ",
  icons: [],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/trubel.jpeg"),
  imageSize: 305,
  message:
    "My name is Ho Thi Dieu. I’m a graduate of 2022 from Passerelles Numeriques . I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like speaking English and dance.",
  resume:
    "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

const repos = {
  show: true,
  heading: "Projects",
  reposLength: 3,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 70 },
    { name: "React", value: 75 },
    { name: "HTML/CSS", value: 75 },
    { name: "Nextjs", value: 60 },
    { name: "Typescript", value: 70 },
  ],
  softSkills: [
    { name: "English", value: 60 },
    { name: "Team word", value: 90 },
    { name: "Comunication", value: 75 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 70 },
    { name: "Creativity", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions, please do not hesitate to contact me so that we can learn more about each other ",
  email: "thidieu040421@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Intern - FrontEnd Developer",
      companylogo: " https://wowz.co/wp-content/uploads/2021/07/logo2.png",
      date: "July 2021 – October 2021",
    },

    {
      role: "Intern - FrontEnd Developer",
      companylogo: "https://vieclamnhanh.vn/uploads/laidon.png",
      date: "April 2022 – September 2022",
    },
    {
      role: "Employee - FrontEnd Developer",
      companylogo:
        "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/305494681_526817002777629_4987445256027247907_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5RWun4aeAk8AX9tOrP1&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBMRDkOr44_q2NlYe15rP_zldcbTfyJ9eyQrwtKQnQy_Q&oe=64445B0B",
      date: "September 2022 – April 2023",
    },
  ],
};

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
