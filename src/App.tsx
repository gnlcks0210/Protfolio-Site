import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import profileImage from 'figma:asset/55722f2b28a95ede0b9158f653c34d962affdc39.png';

export default function App() {
  const portfolioData = {
    name: '엄휘찬',
    birthDate: '02.12.31',
    email: 'gnlcks0210@gmail.com',
    phone: '010-9737-9917',
    address: '인천광역시 부평구 길주로 623 대덕리치아노 101동 1708호',
    profileImage: profileImage
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Sidebar
        profileImage={portfolioData.profileImage}
        name={portfolioData.name}
        birthDate={portfolioData.birthDate}
        email={portfolioData.email}
        phone={portfolioData.phone}
        address={portfolioData.address}
      />
      <MainContent />
    </div>
  );
}
