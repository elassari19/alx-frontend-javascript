export default function loadBalancer(chinaDownload, USDownload) {
  // promise loadBalancer with chinaDownload and USDownload as promises
  return Promise
    .race([chinaDownload, USDownload])
    .then((res) => res);
}
