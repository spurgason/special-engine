import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = ["About", "Services", "Trainers", "Testimonials", "Contact"];
  return (
    <header className="flex flex-col md:flex-row justify-around items-center py-4 md:py-6 bg-black text-white">
      <div className="flex items-center relative">
        <h1 className="text-3xl font-light">4 ever 24 fit</h1>
        <button className="rounded focus:outline-none focus:ring focus:ring-emerald-400 lg:hidden absolute -top-0.5 -right-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10  "
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
        </button>
      </div>

      <ul
        className={
          !isOpen
            ? `hidden md:flex justify-around space-x-7 text-xl font-light`
            : `flex flex-col border-t-2 border-white mt-5 w-full text-lg`
        }
      >
        {tabs.map((tab) => (
          <li className="ml-4 my-2 last:mb-0 pb-1 border-black border-b-2 md:hover:border-emerald-400 md:hover:cursor-pointer transition ease-in-out delay-150">
            {tab}
          </li>
        ))}
      </ul>
    </header>
  );
};
export default Header;
