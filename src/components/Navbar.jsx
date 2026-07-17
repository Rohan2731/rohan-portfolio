import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          ROHAN.
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-slate-300 font-medium">
          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Rohan2731"
            target="_blank"
            rel="noreferrer"
            className="text-xl text-slate-300 hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="YOUR_LINKEDIN_LINK"
            target="_blank"
            rel="noreferrer"
            className="text-xl text-slate-300 hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="/resume.pdf"
            className="hidden md:block px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition"
          >
            Resume
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;