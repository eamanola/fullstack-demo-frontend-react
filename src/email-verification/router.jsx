import React from 'react';

import VerifyByLink from './pages/VerifyByLink';
import VerifyByCode from './pages/VerifyByCode';

const router = [
  {
    path: 'email/verify/by-link/:status',
    element: <VerifyByLink />,
  },
  {
    path: 'email/verify/by-code',
    element: <VerifyByCode />,
  },
];

export default router;
