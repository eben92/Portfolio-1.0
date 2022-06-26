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
  const addSlider = () => {
    const slider = document.querySelector(".items");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider?.addEventListener("mousedown", (e) => {
      isDown = true;
      // slider.classList.add("cursor-grabbing");
      slider.classList.replace("cursor-grab", "cursor-grabbing");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider?.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.replace("cursor-grabbing", "cursor-grab");
    });
    slider?.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.replace("cursor-grabbing", "cursor-grab");
    });
    slider?.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  };

  const languages = [
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
      <ul
        onClick={addSlider}
        className='flex md:gap-2 items  cursor-grab overflow-auto'
      >
        {languages.map((language, index) => (
          <li
            key={index}
            className='flex flex-col w-full    items-center gap-2'
          >
            <div className='md:w-[100px] w-[80px] h-[60px] flex items-center justify-center'>
              <img
                src={language.icon}
                alt=''
                className='  hover:shadow  rounded-full transition'
              />
            </div>

            <p className='uppercase text-sm font-[500]'>{language.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
