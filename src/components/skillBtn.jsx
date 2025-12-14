import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

function SkillBtn({ name }) {
  const { darkTheme } = useContext(GlobalContext);
  return (
    <>
      <div
        className={` ${
          darkTheme
            ? "dark-theme-bg dark-theme-text dark-theme-border-sm"
            : "light-theme-bg light-theme-text light-theme-border-sm"
        } ${name} tech-icon rounded-full px-4 py-2`}
      >
        {name}
      </div>
    </>
  );
}

export default SkillBtn;
