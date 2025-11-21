const MainMenuItems = ["About", "Projects", "Skills", "Contact", "Exit"];

const projects = [
  {
    title: "Projeto 1",
    picture: "",
    description: "Lorem Ipsum et dolor sit amet",
    techs: ["Js", "Ts"],
    links: ["Live", "Github repo"],
  },
  {
    title: "Projeto 2",
    picture: "",
    description: "Lorem Ipsum et dolor sit amet",
    techs: ["Js", "Ts"],
    links: ["Live", "Github repo"],
  },
  {
    title: "Projeto 3",
    picture: "",
    description: "Lorem Ipsum et dolor sit amet",
    techs: ["Js", "Ts"],
    links: ["Live", "Github repo"],
  },
];

const skills = [
  {
    title: "Front End",
    sub: [
      { title: "HTML", icon: "akar-icons:html-fill" },
      {
        title: "CSS",
        icon: "akar-icons:css-fill",
        sub: [{ title: "Tailwind", icon: "ri:tailwind-css-fill" }],
      },
      {
        title: "Typescript",
        icon: "file-icons:typescript",
        sub: [
          { title: "React", icon: "teenyicons:react-outline" },
          { title: "Next JS", icon: "devicon-plain:nextjs" },
        ],
      },
    ],
  },
  {
    title: "Back End",
    sub: [
      {
        title: "Java",
        icon: "hugeicons:java",
        sub: [{ title: "Springboot", icon: "simple-icons:spring" }],
      },
      {
        title: "Typescript",
        icon: "file-icons:typescript",
        sub: [
          { title: "Node JS", icon: "teenyicons:nodejs-outline" },
          { title: "BunJS", icon: "simple-icons:bun" },
        ],
      },

      { title: "SQL", icon: "ph:file-sql-thin" },
      { title: "MongoDB", icon: "teenyicons:mongodb-outline" },
      { title: "Firebase", icon: "teenyicons:firebase-outline" },
      { title: "Supabase", icon: "ri:supabase-line" },
    ],
  },
  {
    title: "Misc. Techs",
    sub: [
      { title: "Postman", icon: "cib:postman" },
      { title: "Git", icon: "humbleicons:git" },
      { title: "Figma", icon: "solar:figma-bold-duotone" },
    ],
  },
];

export const getSkills = () => {
  let titles: any[] = [];

  skills.forEach((skill) => {
    titles.push(skill.title);
  });

  return { skills, titles };
};

export const getSkillByPath = (path: string) => {
  let subTitles: any[] = [];
  skills.forEach((skill) => {
    if (skill.title == path) {
      skill.sub.forEach((item: any) => {
        subTitles.push(item);
      });
    }
  });

  return subTitles;
};

export const getMainMenuItems = () => {
  return MainMenuItems;
};

const getSecondaryMenu = (name: string) => {};

export const getProjects = () => {
  let titles: any[] = [];

  projects.forEach((project) => {
    titles.push(project.title);
  });

  return { projects: projects, titles: titles };
};
