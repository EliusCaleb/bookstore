import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content  flex flex-c text-center text-white  ">
          <h2 className=" header-title text-capitalize">
            find the book of your choice
          </h2>
          <br />
          <p className="header-text fw-18 fs-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
