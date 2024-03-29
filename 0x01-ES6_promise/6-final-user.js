import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  // promise allSettled with signUpUser and uploadPhoto as promises
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      res.map((o) => ({
        status: o.status,
        value: o.status === 'fulfilled' ? o.value : String(o.reason),
      }))
    ));
}
