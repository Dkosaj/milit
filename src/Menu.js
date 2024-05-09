import React from "react";

const Menu = ({ otwarte }) => {
  // Funkcja obsługująca kliknięcie na dowolnym elemencie listy
  const handleItemClick = (page) => {
    if (page === "kontakt") {
      window.location.href = "/Kontakt"; // Przekierowanie do strony Kontakt.js
    } else {
      window.location.href = `/${page}`; // Przekierowanie do innych stron
    }
  };

  return (
    <nav className={`menu ${otwarte ? 'otwarte' : ''}`}>
      <ul>
        {/* Każdy element listy ma przypisaną funkcję obsługującą kliknięcie */}
        <li><a href="/" onClick={() => handleItemClick('')}>Strona główna</a></li>
        <li><a href="/produkty" onClick={() => handleItemClick('produkty')}>Produkty</a></li>
        <li><a href="/o-nas" onClick={() => handleItemClick('o-nas')}>O nas</a></li>
        <li><a href="/Kontakt" onClick={() => handleItemClick('kontakt')}>Kontakt</a></li>
      </ul>
    </nav>
  );
};

export default Menu;