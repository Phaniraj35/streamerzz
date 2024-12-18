import { useState } from "react";
import logo from "../assets/logo.png";
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  const ariaLabel = isOpen ? "Close Menu" : "Open Menu";
  const hamburgerIcon = isOpen ? <RiCloseFill /> : <RiMenu3Line />;

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 mt-2">
      <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
        {/* logo image */}
        {/* <img src={logo} alt="Logo image" width={120} height={24} /> */}
        <div className="flex gap-6 items-center">
          <span className="font-bold text-2xl text-white">Stream</span>

          {/* hidden on mobile */}
          <div className="hidden md:flex space-x-6">
            <CenterNavMenu />
          </div>
        </div>

        {/* hidden on mobile */}
        {/* <div className="hidden md:flex space-x-6">
          <CenterNavMenu />
        </div> */}

        {/* hidden on mobile */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink href="#">Login</NavLink>

          <NavActionMenu />
        </div>

        {/* hamburger for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white"
            aria-label={ariaLabel}
          >
            {hamburgerIcon}
          </button>
        </div>
      </div>

      {isOpen && <MobileNav />}
    </nav>
  );
};

export default Navbar;

function NavLink({ href, children, ...props }) {
  return (
    <a href={href} className="hover:text-neutral-200" {...props}>
      {children}
    </a>
  );
}

function NavActionButton({ href, className, children, ...props }) {
  return (
    <a
      href={href}
      className={twMerge(
        "text-white py-2 px-4 rounded-lg transition",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

function CenterNavMenu() {
  return (
    <>
      <NavLink href="#works">How it works</NavLink>
      <NavLink href="#pricing">Pricing</NavLink>
      <NavLink href="#features">Features</NavLink>
      <NavLink href="#testimonials">Testimonials</NavLink>
    </>
  );
}

function NavActionMenu() {
  return (
    <>
      <NavActionButton
        href="#"
        className="border border-neutral-700 hover:bg-neutral-700"
      >
        Get a Demo
      </NavActionButton>

      <NavActionButton href="#" className="bg-blue-600 hover:bg-blue-500">
        Start Free Trial
      </NavActionButton>
    </>
  );
}

function MobileNav() {
  return (
    <div className="md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2">
      <div className="flex flex-col space-y-4">
        <CenterNavMenu />

        <NavLink href="#">Login</NavLink>

        <div className="flex justify-evenly">
          <NavActionMenu />
        </div>
      </div>
    </div>
  );
}
