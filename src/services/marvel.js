import md5 from 'md5';
import {PRIVATE_KEY, PUBLIC_KEY} from 'react-native-dotenv';
export function getApiParams() {
  const ts = new Date().getTime();

  return {
    ts: new Date().getTime(),
    //   apikey: '417563ee41c935ced99af603ef41c182',
    apikey: PUBLIC_KEY,
    // hash: md5(`1585446000d100dc0c896a409d25a1c9a49737369eb21cb43d417563ee41c935ced99af603ef41c182`),
    hash: md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`),
  };
}
