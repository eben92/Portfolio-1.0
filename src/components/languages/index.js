import HTML from "../../assets/html.svg";
import CSS from "../../assets/css.svg";
import JAVASCRIPT from "../../assets/javascript.svg";
import REACTJS from "../../assets/react.svg";
import NEXTJS from "../../assets/nextjs.svg";
import REDUX from "../../assets/redux.svg";
import SASS from "../../assets/sass.svg";
import TAILWINDCSS from "../../assets/tailwindcss.svg";
import GIT from "../../assets/git.svg";

const Languages = () => {
  const languages = [
    {
      name: "HTML",
      level: "Expert",
      icon: HTML,
    },
    {
      name: "CSS",
      level: "Expert",
      icon: CSS,
    },
    {
      name: "JavaScript",
      level: "Expert",
      icon: JAVASCRIPT,
    },
    {
      name: "ReactJS",
      level: "Expert",
      icon: REACTJS,
    },
    {
      name: "NextJS",
      level: "Expert",
      icon: NEXTJS,
    },
    {
      name: "REDUX",
      level: "Expert",
      icon: REDUX,
    },
    {
      name: "SCSS",
      level: "Expert",
      icon: SASS,
    },
    {
      name: "TAILWINDCSS",
      level: "Expert",
      icon: TAILWINDCSS,
    },
    {
      name: "GIT",
      level: "Expert",
      icon: GIT,
    },
  ];

  return (
    <div className=' whitespace-nowrap'>
      <ul className='flex gap-2   border  overflow-auto'>
        {languages.map((language, index) => (
          <li
            key={index}
            className='flex flex-col w-full    items-center gap-2'
          >
            <div className='w-[100px] h-[60px] flex items-center justify-center'>
              <img
                src={language.icon}
                alt=''
                className='cursor-pointer  hover:shadow  rounded-full transition'
              />
            </div>

            <p className='uppercase font-[500]'>{language.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
