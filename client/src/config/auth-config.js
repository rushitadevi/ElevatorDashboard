const domain = process.env.REACT_APP_DOMAIN;
const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URL;

const authConfig = {
  domain,
  clientId,
  redirectUri,
};

export default authConfig;
