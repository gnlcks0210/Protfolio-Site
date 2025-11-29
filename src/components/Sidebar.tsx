import { Mail, Phone, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SidebarProps {
  profileImage: string;
  name: string;
  birthDate: string;
  email: string;
  phone: string;
  address: string;
}

export function Sidebar({ profileImage, name, birthDate, email, phone, address }: SidebarProps) {
  const skills = [
    { name: 'Python', level: 60 },
    { name: 'Java', level: 50 },
    { name: 'C++', level: 50 },
    { name: 'SQL', level: 40 }
  ];

  const certifications = [
    { year: '2023', name: '운전면허 1종보통' },
    { year: '2020', name: 'ITQ엑셀(A)' }
  ];

  const languages = [
    { period: '2021.08-2023.02', location: '병역(필)_육군' }
  ];

  return (
    <div className="bg-black text-white w-full lg:w-80 flex-shrink-0 p-8">
      {/* Profile Image */}
      <div className="mb-8">
        <div className="w-40 h-52 overflow-hidden bg-gray-700">
          <ImageWithFallback
            src={profileImage}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contact Info */}
      <div className="mb-8">
        <h2 className="mb-2">{name}</h2>
        <p className="text-gray-400 mb-4">({birthDate})</p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
            <span className="break-all">{email}</span>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>{phone}</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>{address}</span>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h3 className="mb-4 pb-2 border-b border-gray-700">프로그램</h3>
        <div className="space-y-3">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1 text-sm">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded">
                <div
                  className="bg-yellow-500 h-2 rounded"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-8">
        <h3 className="mb-4 pb-2 border-b border-gray-700">자격증</h3>
        <div className="space-y-2 text-sm">
          {certifications.map((cert, index) => (
            <div key={index} className="flex gap-2">
              <span className="text-gray-400">{cert.year}</span>
              <span>{cert.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Military Service */}
      <div>
        <h3 className="mb-4 pb-2 border-b border-gray-700">병역사항</h3>
        <div className="space-y-2 text-sm">
          {languages.map((lang, index) => (
            <div key={index}>
              {lang.score && (
                <div>
                  {lang.name} <span className="text-gray-400">{lang.score}</span>
                </div>
              )}
              {lang.level && (
                <div>
                  {lang.name} <span className="text-gray-400">{lang.level}</span>
                </div>
              )}
              {lang.period && (
                <div className="text-gray-400">
                  {lang.period} {lang.location}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
