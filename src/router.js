import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import PostsPage from './routes/PostsPage';
import UserPage from './routes/UserPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <PostsPage />
      },
      {
        path: '/user/:userId',
        element: <UserPage />
      },
    ]
  }
])

export default router