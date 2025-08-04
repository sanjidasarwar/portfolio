import { navLinks } from "../data/index.js";

function NavItems({ closeMenu }) {
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
      {navLinks.map((item) => (
        <li
          key={item.id}
          className="text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5;"
        >
          <a
            href={item.href}
            className="text-lg md:text-base hover:text-white transition-colors"
            onClick={closeMenu}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavItems;
