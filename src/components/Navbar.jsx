import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-[1000] w-full bg-gradient-to-r from-[#ff5f4a] to-[#ff845e]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3">

          {/* TEXT LOGO */}
          <Link to="/" className="text-2xl font-extrabold tracking-wide">
            <span className="text-white">Recipe</span>
            <span className="text-[#4ade80]">Room</span>
          </Link>

          {/* SEARCH BAR (DESKTOP) */}
          <div className="relative hidden flex-1 max-w-[420px] md:block">
            <input
              type="text"
              placeholder="What are you craving today?"
              className="w-full rounded-full px-4 py-3 pr-11 text-sm outline-none shadow-lg"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-gray-600 cursor-pointer">
              🔍
            </span>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="text-3xl text-white md:hidden"
            aria-label="Menu"
          >
            ☰
          </button>

          {/* DESKTOP LINKS */}
          <nav className="hidden items-center gap-6 md:flex">
            {["Home", "About", "Create"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative font-medium text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                {item}
              </Link>
            ))}

            <Link
              to="/login"
              className="rounded-full bg-white px-5 py-2 font-semibold text-[#ff5f4a] transition hover:bg-[#ffe7e1]"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <aside
        className={`fixed top-0 right-0 z-[1001] h-screen w-[260px] bg-white
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-2xl"
        >
          ✕
        </button>

        <div className="flex flex-col gap-6 px-6 pt-20">

          {/* MOBILE SEARCH */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full rounded-full border px-4 py-3 pr-10 text-sm outline-none"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2">
              🔍
            </span>
          </div>

          {/* LINKS */}
          {["Home", "About", "Create"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-gray-800"
            >
              {item}
            </Link>
          ))}

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="rounded-full bg-[#ff5f4a] px-5 py-3 text-center font-semibold text-white"
          >
            Login
          </Link>
        </div>
      </aside>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[900] bg-black/40"
        />
      )}
    </>
  );
}
