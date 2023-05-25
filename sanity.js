import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

let PROJECT_ID = "9bzu4okb";
let DATASET = "production";
let QUERY = encodeURIComponent('*[_type == "featured"]');
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

const client = sanityClient({
  projectId: "9bzu4okb",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;

