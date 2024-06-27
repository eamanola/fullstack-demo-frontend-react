import React from 'react';

import VerifyByLink from './pages/VerifyByLink';

const router = [
  {
    path: 'email/verify/by-link/:status',
    element: <VerifyByLink />,
  },
];

export default router;
