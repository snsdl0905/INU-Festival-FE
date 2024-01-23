import Article from '../components/Article';
import ProfileSection from '../components/Profile/ProfileSection';
import HelpSectioin from '../components/Profile/HelpSection';

export default function ProfilePage() {
  return (
    <>
      <ProfileSection />
      <Article>
        <HelpSectioin />
      </Article>
    </>
  );
}
