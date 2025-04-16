import { HeroSection } from "@/components/blocks/HeroSection";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";
// import qs from "qs";

// trying without the Strapi fetch
// const homePageQuery = qs.stringify({
//   populate: {
//     blocks: {
//       on: {
//         "blocks.hero-section": {
//           populate: {
//             image: {
//               fields: ["url", "alternativeText"],
//             },
//             logo: {
//               populate: {
//                 image: {
//                   fields: ["url", "alternativeText"],
//                 },
//               },
//             },
//             cta: true,
//           },
//         },
//         "blocks.info-block": {
//           populate: {
//             image: {
//               fields: ["url", "alternativeText"],
//             },
//             cta: true,
//           },
//         },
//       },
//     },
//   },
// });

const loader = async () => {
  // const path = "/api/home-page";
  // const BASE_URL = "http://localhost:1337/api/home-page";
  // const url = "http://127.0.0.1:1337/api/home-page";
  // const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337";

  // const url = new URL(path.href, BASE_URL);
  // url.search = homePageQuery;

  // const res = await fetch(url);
  // const data = await res.json();
  // if (!data) notFound;
  // console.log(data);

  // return { ...data.data };

  const data = await getHomePage();
  if (!data) notFound;
  console.log(data);
  return { ...data.data };
};

export default async function Home() {
  const data = await loader();
  const blocks = data?.blocks || [];

  return (
    <div>
      {/* <h1>{data.tittle}</h1>
      <p>{data.description}</p>
      <p>{data.createdAt}</p> */}

      <HeroSection {...blocks[0]} />
    </div>
  );
}
