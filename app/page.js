import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    title: "Jamper Financial",
    description: "This is a project that I worked on for a client with a team. It is a financial management application that allows users to track their expenses and income. The application is built using C#.",
    link: "https://github.com/emildave/Jamper-Financial",
    progress: 20,
  },
  {
    title: "TBD",
    description: "TBD",
    link: "https://example.com/TBD",
    progress: 0,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:w-2/4 flex flex-col justify-between bg-background p-8">
        <Header />
        <Footer />
      </div>
      <div className="lg:w-4/4 flex flex-col p-8 sm:p-20 flex-grow">
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold text-accent mb-4">About Me</h2>
          <p className="text-secondary">
            I am a student in Software Development with a passion for creating amazing projects. I have been working on various projects that allow me to follow my passions and continuously learn new skills. My journey in software development has been driven by curiosity and a desire to solve real-world problems through technology.
          </p>
        </section>
        {/* <section id="experience" className="mb-16">
          <h2 className="text-3xl font-bold text-accent mb-4">Experience</h2>
          <p className="text-secondary">Details about my professional experience.</p>
        </section> */}
        <section id="projects" className="mb-16 flex-grow">
          <h2 className="text-3xl font-bold text-accent mb-4">Projects</h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                progress={project.progress}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}