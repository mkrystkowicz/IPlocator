require('dotenv').config();
import 'regenerator-runtime/runtime';

export default async function getIPLocation(IPAddress) {
  const URL = `https://geo.ipify.org/api/v1?apiKey=${process.env.GEO_API_KEY}&ipAddress=${IPAddress}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error('err', err);
  }
}
