import { useEffect, useState } from "react";
import { useLocalState } from "../../logic/hooks";
import { themes, switchTheme } from "../../logic/theme";
const ThemeSettings = () => {
  const [currentTheme, setCurrentTheme] = useLocalState(
    "cogipTheme",
    themes.original
  );
  const handleClick = (e) => {
    const target = e.target;
    setCurrentTheme(themes[target.id]);
  };
  useEffect(() => {
    switchTheme(currentTheme);
  }, [currentTheme]);
  return (
    <div className="settings__themes card">
      <h2 className="settings__themes--title">Theme settings</h2>
      <div className="themeContainer">
        <div
          className="themeCard"
          id="original"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          Original :
          <div className="themeCard__colors">
            <div className="primary">
              <h3>Title</h3>
              <p>Text</p>
              <p id="lighterText">Lighter Text</p>
            </div>
          </div>
        </div>
        <div
          className="themeCard"
          id="dark"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          Dark :
          <div className="themeCard__colors">
            <div className="primary">
              <h3>Title</h3>
              <p>Text</p>
              <p id="lighterText">Lighter Text</p>
            </div>
          </div>
        </div>
        <div
          className="themeCard"
          id="salmon"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          Salmon :
          <div className="themeCard__colors">
            <div className="primary">
              <h3>Title</h3>
              <p>Text</p>
              <p id="lighterText">Lighter Text</p>
            </div>
          </div>
        </div>
        <div
          className="themeCard"
          id="forest"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          Forest :
          <div className="themeCard__colors">
            <div className="primary">
              <h3>Title</h3>
              <p>Text</p>
              <p id="lighterText">Lighter Text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThemeSettings;
