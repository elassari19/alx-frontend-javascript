import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // promise all with uploadPhoto and createUser as promises
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((res) => {
      console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
