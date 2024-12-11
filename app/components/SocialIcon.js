export default function SocialIcon({ href, children }) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
        {children}
      </a>
    );
  }