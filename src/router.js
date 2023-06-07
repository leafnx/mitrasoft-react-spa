import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import PostsPage from './routes/PostsPage';
import UserPage from './routes/UserPage';
import AboutPage from './routes/AboutPage';
import PageWrapper from './components/PageWrapper';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <PageWrapper title='Posts' element={<PostsPage />} />
      },
      {
        path: '/user/:userId',
        element: <PageWrapper title='User' element={<UserPage />} />
      },
      {
        path: '/about',
        element: <PageWrapper title='About me' element={<AboutPage />} />
      }
    ]
  }
])

export default router