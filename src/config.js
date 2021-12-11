export function getConfig() {

  return {
    domain: process.env.DOMAIN,
    returnTo: process.env.PUBLIC_URL,
    clientId: process.env.CLIENTID,
    audience: process.env.AUDIENCE,
  };
}
