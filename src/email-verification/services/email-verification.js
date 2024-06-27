import axios from 'axios';

import GenericError from '../../services/generic-error';

import config from '../../config';

const { BACKEND_URL } = config;

const request = async (email) => {
  try {
    const { status } = await axios.post(
      `${BACKEND_URL}/email-verification`,
      {
        email,
        byLink: {
          onSuccess: `${window.location.origin}/email/verify/by-link/success`,
          onFail: `${window.location.origin}/email/verify/by-link/fail`,
        },
        byCode: `${window.location.origin}/email-verification/by-code`,
      },
    );

    return status === 200;
  } catch (e) {
    const { message } = e?.response?.data || GenericError;
    throw new Error(message);
  }
};

// const fetchToken = async ({ email, password }) => {
//   try {
//     const { token } = (
//       await axios.post(
//         `${BACKEND_URL}/login`,
//         { email, password },
//       )
//     ).data;

//     return token;
//   } catch (e) {
//     const { message } = e?.response?.data || GenericError;
//     throw new Error(message);
//   }
// };

const emailVerificationServices = {
  request,
};

export default emailVerificationServices;
