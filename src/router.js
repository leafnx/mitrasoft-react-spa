import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Posts from './features/posts/Posts';
import User from './features/user/User';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Posts />
      },
      {
        path: '/user/:userId',
        element: <User />
      },
    ]
  }
])

export default router