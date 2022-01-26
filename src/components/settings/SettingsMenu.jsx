import { useState, useRef, useLayoutEffect } from "react";

const SettingsMenu = ({ setSelectedPage, isAuth }) => {
  const [active, setActive] = useState(() => {
    return isAuth.role === "Admin" ? 0 : 1;
  });
  const [bgStyle, setBgStyle] = useState({
    width: "0px",
    transform: `translate(0px, 0px)`,
  });

  const firstLiRef = useRef();
  const backgroundRef = useRef();
  useLayoutEffect(() => {
    setBgStyle({
      width: document.getElementById(active).getBoundingClientRect().width,
      transform: `translate(${
        document.getElementById(active).getBoundingClientRect().x -
        firstLiRef.current.getBoundingClientRect().x
      }px, 0px)`,
    });
    setSelectedPage(active);
  }, [active]);
  const changeActive = (e) => {
    const id = e.target.id;
    setActive(id);
  };
  return (
    <nav className={"settingsSubmenu"}>
      {isAuth.role === "Admin" ? (
        <ul>
          <li
            className={active == 0 ? "active" : null}
            ref={firstLiRef}
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
            Account
          </li>
          <li
            className={active == 2 ? "active" : null}
            id={"2"}
            onClick={changeActive}
          >
            Theme
          </li>
          <li className={"background"} ref={backgroundRef} style={bgStyle}></li>
        </ul>
      ) : (
        <ul>
          <li
            ref={firstLiRef}
            className={active == 1 ? "active" : null}
            id={"1"}
            onClick={changeActive}
          >
            Account
          </li>
          <li
            className={active == 2 ? "active" : null}
            id={"2"}
            onClick={changeActive}
          >
            Theme
          </li>
          <li className={"background"} ref={backgroundRef} style={bgStyle}></li>
        </ul>
      )}
    </nav>
  );
};
export default SettingsMenu;
