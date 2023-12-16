import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import GamePlay from '../pages/GamePlay';
import SelectMode from '../pages/SelectMode';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/gameplay/:wordCount',
    element: <GamePlay />,
  },
  {
    path: 'selectmode',
    element: <SelectMode />,
  },
]);

export default router;
