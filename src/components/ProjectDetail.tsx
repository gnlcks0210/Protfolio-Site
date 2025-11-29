import { X, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  period: string;
  tech: string[];
  details: string;
  githubUrl?: string;
}

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl border-2 border-black">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h2 className="m-0">{project.title}</h2>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="GitHub에서 보기"
              >
                <Github size={20} className="text-gray-700" />
                <span className="text-sm text-gray-700">GitHub</span>
              </a>
            )}
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h3 className="mb-2">프로젝트 개요</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
          
          <div>
            <h3 className="mb-2">개발 기간</h3>
            <p className="text-gray-700">{project.period}</p>
          </div>
          
          <div>
            <h3 className="mb-2">사용 기술</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, index) => (
                <span key={index} className="bg-gray-200 px-3 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="mb-2">상세 내용</h3>
            <p className="text-gray-700 whitespace-pre-line">{project.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
