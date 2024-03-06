export default function uploadPhoto(filename) {
  // reject with Error
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
