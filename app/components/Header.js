export default function Header() {
  return (
    <header className="flex flex-col items-center py-6">
      <img
        src="https://github.com/emildave.png"
        alt="Profile Picture"
        className="w-24 h-24 rounded-full mb-4"
      />
      <h1 className="text-4xl font-bold text-accent mb-4">Emil Cabutotan</h1>
      <nav>
        <ul className="flex flex-col space-y-4">
          <li><a href="#about" className="text-secondary hover:text-accent">About Me</a></li>
          {/* <li><a href="#experience" className="text-secondary hover:text-accent">Experience</a></li> */}
          <li><a href="#projects" className="text-secondary hover:text-accent">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}