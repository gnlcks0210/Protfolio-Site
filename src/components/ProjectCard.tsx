interface ProjectCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

export function ProjectCard({ title, description, onClick }: ProjectCardProps) {
  return (
    <div 
      onClick={onClick}
      className="border-2 border-gray-300 rounded-lg p-6 cursor-pointer hover:border-gray-500 hover:shadow-lg transition-all duration-200"
    >
      <h3 className="mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
