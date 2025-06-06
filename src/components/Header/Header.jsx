import React from "react";
import Navbar from "../Navbar";

const Header = ({
  activeSection,
  scrollToSection,
  toggleTheme,
  isDarkMode,
  isMenuOpen,
  toggleMenu,
}) => {
  return (
    <header>
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
    </header>
  );
};

export default Header;
