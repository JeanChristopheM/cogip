import { useState, useRef, useEffect } from "react";

const SettingsMenu = () => {
  const [active, setActive] = useState(0);
  const [menuSize, setMenuSize] = useState(null);
  const containerRef = useRef();
  useEffect(() => {
    console.log(containerRef.current.getBoundingClientRect().width);
  }, [containerRef]);
  const changeActive = (e) => {
    const id = e.target.id;
    setActive(id);
  };
  return (
    <nav className={"settingsSubmenu"}>
      <ul ref={containerRef}>
        <li
          className={active == 0 ? "active" : null}
          id={"0"}
          onClick={changeActive}
        >
          Users
        </li>
        <li
          className={active == 1 ? "active" : null}
          id={"1"}
          onClick={changeActive}
        >
          Theme
        </li>
        <li
          className={active == 2 ? "active" : null}
          id={"2"}
          onClick={changeActive}
        >
          Account
        </li>
      </ul>
    </nav>
  );
};
export default SettingsMenu;
