import Layout from './components/Layout';

import MainPage from './pages/MainPage';
import MapPage from './pages/MapPage';
import ProfilePage from './pages/ProfilePage';
import GuestBookPage from './pages/GuestBookPage';
import TimeTablePage from './pages/TitmeTablePage';
import NoticePage from './pages/NoticePage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/map', element: <MapPage /> },
      { path: '/timetable', element: <TimeTablePage /> },
      { path: '/guestbook', element: <GuestBookPage /> },
      { path: '/profile', element: <ProfilePage /> },
      { path: '/notices', element: <NoticePage /> },
    ],
  },
];

export default routes;
