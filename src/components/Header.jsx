import { useState } from "react";
import Logo from "../assets/images/logo.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = ["About", "Services", "Trainers", "Contact"];

  return (
    <header className="flex sm:flex-col xl:flex-row justify-around items-center bg-gray-800 text-white font-light py-4 md:py-6 sticky top-0 z-10">
      <div className="flex items-center relative">
        <a href="#">
          <img src={Logo} alt="" className="w-36 h-16" />
          <span className="sr-only">4ever24fit logo</span>
        </a>

        <button
          className={
            !isOpen
              ? `rounded focus:outline-none focus:ring focus:ring-gray-800 lg:hidden absolute top-4 -right-20`
              : `rounded focus:outline-none focus:ring focus:ring-sky-400 lg:hidden absolute top-4 -right-20`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
            onClick={() => {
              setIsOpen((prevState) => !prevState);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <span className="sr-only">Dropdown Menu</span>
        </button>
      </div>

      <ul
        className={
          !isOpen
            ? `hidden lg:flex justify-around space-x-4 relative text-lg`
            : `flex flex-col absolute top-12 border-t-2 border-white mt-10 w-full text-lg bg-gray-800 z-10`
        }
      >
        {tabs.map((tab) => (
          <li
            className="inline-block w-auto m-2 after:content-[''] after:block lg:after:border after:border-sky-400 after:scale-x-0 after:transition-transform after:origin-[0%_50%] hover:after:scale-x-100 hover:cursor-pointer active:text-sky-400 md:active:text-white my-2 pl-2"
            key={tab}
          >
            <a
              href={`#${tab.toLowerCase()}`}
              onClick={() => {
                setIsOpen(isOpen ? false : false);
              }}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
export default Header;
