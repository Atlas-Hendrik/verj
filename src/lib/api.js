/**
 * API föll.
 * @see https://lldev.thespacedevs.com/2.2.0/swagger/
 */

/**
 * Sækjum týpurnar okkar.
 * @typedef {import('./api.types.js').Launch} Launch
 * @typedef {import('./api.types.js').LaunchDetail} LaunchDetail
 * @typedef {import('./api.types.js').LaunchSearchResults} LaunchSearchResults
 */

/** Grunnslóð á API (DEV útgáfa) */
const API_URL = 'https://lldev.thespacedevs.com/2.2.0/';

/**
 * Skilar Promise sem bíður í gefnar millisekúndur.
 * Gott til að prófa loading state, en einnig hægt að nota `throttle` í 
 * DevTools.
 * @param {number} ms Tími til að sofa í millisekúndum.
 * @returns {Promise<void>}
 */
export async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(undefined), ms);
  });
}

/**
 * Leita í geimskota API eftir leitarstreng.
 * @param {string} query Leitarstrengur.
 * @returns {Promise<Launch[] | void>} Fylki af geimskotum eða `null` ef villa
 *  kom upp.
 */
// Assuming you have some API module to fetch launches, replace 'apiModule' with the actual module or API you are using.

async function searchLaunches(query) {
  try {
      const launches = await apiModule.getLaunches(query);
      const processedLaunches = processLaunches(launches);

      return processedLaunches;
  } catch (error) {
      console.error('Error fetching launches:', error);
      throw new Error('Failed to fetch launches');
  }
}

function processLaunches(launches) {
  return launches.map(launch => ({
      name: launch.name,
      date: new Date(launch.date),
  }));
}


/**
 * Skilar stöku geimskoti eftir auðkenni eða `null` ef ekkert fannst.
 * @param {string} id Auðkenni geimskots.
 * @returns {Promise<LaunchDetail | void>} Geimskot.
 */
export async function getLaunch(id) {
  
  try {
    const response = await fetch(`https://lldev.thespacedevs.com/2.2.0/${id}`);  
    if (!response.ok) {
      throw new Error(`Tókst ekki að opna ${id}`);
    }
    const launchData = await response.json();
    return launchData;
  } 
  catch (error) {
    console.error(error.message);
  }
  
}
