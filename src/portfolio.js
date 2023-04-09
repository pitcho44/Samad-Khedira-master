import aboutpic from "./components/Access/moi.jpeg";

const header = {

  homepage: "https://morganbb104.github.io/HW_20_Portfolio_withReact/",
  title: "Samad Khedira",
};

const about = {
  photo: aboutpic,

  name: "Abdessamad Lakhdira",
  role: "Full stack developer",
  description:
    "Je suis Abdessamad Lakhdira, un développeur web passionné et expérimenté. J'ai une solide expertise en programmation et en conception de sites web, ainsi qu'en développement de logiciels et d'applications. Mon expérience dans le domaine du développement web m'a permis de maîtriser plusieurs langages de programmation tels que HTML, CSS, JavaScript, PHP, et bien d'autres.Je suis également compétent dans l'utilisation de différents outils de développement web tels que WordPress, Magento, Drupal, Laravel, AngularJS et VueJS. Mon approche centrée sur l'utilisateur me permet de créer des sites web intuitifs et facilement navigables. En outre, je suis en mesure de gérer des projets de développement web de bout en bout, de l'analyse des besoins à la livraison du produit final. Je suis enthousiaste à l'idée de travailler sur de nouveaux projets de développement web et je suis toujours à la recherche de défis pour continuer à développer mes compétences et ma créativité.",
  resume: "https://docs.google.com/document/d/1fqPuEn2gpcqqIEN5P5m5XgOx6OEKGCdr/edit?usp=sharing&ouid=105287205919700901402&rtpof=true&sd=true",
  social: {
    linkedin: "https://www.linkedin.com/in/samad-khedira-b847a223a/",
    github: "https://github.com/pitcho44",
  },
};

const projects = [

  {
    name: "GREEEN-OFFICE",
    description:
      "As users, we see a page that lets anyone look for the movies from the search bar by key words, and obtaining the actual or similar movies with their years, actors, rating, and description information by recommendation. In addition, they can search the nearby theaters from where they currently are located.",
    stack: ["HTML", "CSS"],
    sourceCode: "https://github.com/pitcho44/GREEEN-OFFICE",

  },
  {
    name: "turky33",
    description:
      "Event Planner was designed with the partier in mind, the one who wants to find fine dinning or a friend to have a good time. Event Planner is the easiest way for anyone to find an event to attend, create or host your own event or browse whats happening in your local area.",
    stack: ["HTML", "CSS"],
    sourceCode: "https://github.com/pitcho44/turky33",
   
  },
  {
    name: "CARLOS-ALOGNON",
    description:
      "Resource Planner is able to distrute the current resource including human resource,time and budget in one company in order to help user to manahe their projects",
    stack: ["HTML", "CSS"],
    sourceCode: "https://github.com/pitcho44/CARLOS-ALOGNON",
  
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "GitHub",
];

const contact = {

  email: "khedirasamad@gmail.com",
};

export { header, about, projects, skills, contact };
