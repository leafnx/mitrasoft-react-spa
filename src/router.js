import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import PageWrapper from './components/PageWrapper';
import PostsPage from './routes/PostsPage';
import UserPage from './routes/UserPage';
import AboutPage from './routes/AboutPage';
import ErrorPage from './routes/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageWrapper title='Error' element={<ErrorPage />} />,
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