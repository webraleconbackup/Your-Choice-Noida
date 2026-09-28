import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import PartyPlaning from '../pages/PartyPlaning';
import PortFolioPage from '../pages/PortFolioPage';
import FollowUsPage from '../pages/FollowUsPage';
import Contact from '../pages/Contact';
import Kidsbirthday from '../pages/Kidsbirthday';
import Anniversary from '../pages/Anniversary';
import AdultBirthday from '../pages/AdultBirthday';
import Baby from '../pages/Baby';
import NewbornBaby from '../pages/NewbornBaby';
import JustMarried  from '../pages/JustMarried';
import Haldi from '../pages/Haldi';
import Mehndi from '../pages/Mehndi';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/Kidsbirthday-decoration',
        element: <Kidsbirthday />,
      },
      {
        path: '/anniversary-decoration',
        element: <Anniversary />,
      },
      {
        path: '/adult-birthday-decoration',
        element: <AdultBirthday />,
      },
      {
        path: '/new-born-baby-decoration',
        element: <NewbornBaby />,
      },
      {
        path: '/baby-shower-decoration',
        element: <Baby />,
      },
       {
        path: '/just-married-decoration',
        element: <JustMarried />,
      },
        {
        path: '/haldi-decoration',
        element: <Haldi />,
      },
       {
        path: '/mehndi-decoration',
        element: <Mehndi />,
      },
      {
        path: '/party-planning',
        element: <PartyPlaning />,
      },
      {
        path: '/portfolio',
        element: <PortFolioPage />,
      },
      {
        path: '/followus',
        element: <FollowUsPage />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

export default Router;
