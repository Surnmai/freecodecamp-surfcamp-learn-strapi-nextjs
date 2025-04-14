import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

const loader = async () => {
  // const path = "/api/home-page";
  // const BASE_URL = "http://localhost:1337/api/home-page";
  // const url = "http://127.0.0.1:1337/api/home-page";
  // const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337";
  // const url = new URL(path, BASE_URL);

  // const res = await fetch(url);
  // const data = await res.json();
  // console.log(data);

  // return { ...data.data };

  const data = await getHomePage();
  if (!data) notFound;
  console.log(data);
  return { ...data.data };
};

export default async function Home() {
  const data = await loader();

  return (
    <div>
      <h1>{data.tittle}</h1>
      <p>{data.description}</p>
      {/* <p>{data.createdAt}</p> */}
    </div>
  );
}
