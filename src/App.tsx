import styled, { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/defaultTheme';

import Navbar from './components/Navbar';

import MainPage from './pages/MainPage';
import MapPage from './pages/MapPage';
import ProfilePage from './pages/ProfilePage';
import GuestBookPage from './pages/GuestBookPage';
import TimeTablePage from './pages/TitmeTablePage';
import NoticePage from './pages/NoticePage';

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  background: ${(props) => props.theme.colors.layoutBackground};
  overflow: hidden;
`;

function Layout() {
  return (
    <Container>
      <Outlet />
      <Navbar />
    </Container>
  );
}

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

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
