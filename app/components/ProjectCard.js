export default function ProjectCard({ title, description, link, progress }) {
    return (
      <div className="p-6 border rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2">{description}</p>
        <div className="mt-4">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-accent rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-secondary mt-1">{progress}% complete</p>
        </div>
        <a
          className="mt-4 inline-block text-accent hover:underline"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    );
  }