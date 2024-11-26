import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  return {
    "gamer": "Veer"
  };
};

export default function App() {
  const data: any = useLoaderData();

  return (
    <div>{data.gamer}</div>
  );
};