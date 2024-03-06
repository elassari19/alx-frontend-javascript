import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  // async function with await
  let res = {};

  // await for uploadPhoto and createUser
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    res = { photo, user };
  } catch (err) {
    res = { photo: null, user: null };
  }
  return res;
}
