import { useState } from "react";
import SettingsMenu from "./SettingsMenu.jsx";
import UsersSettings from "./UsersSettings.jsx";
import AccountSettings from "./AccountSettings.jsx";
import ThemeSettings from "./ThemeSettings.jsx";
const Settings = ({ isAuth }) => {
  const [selectedPage, setSelectedPage] = useState(0);
  const choices = [
    <UsersSettings isAuth={isAuth} />,
    <AccountSettings />,
    <ThemeSettings />,
  ];
  return (
    <main>
      <SettingsMenu setSelectedPage={setSelectedPage} />
      {choices[selectedPage]}
    </main>
  );
};
export default Settings;
