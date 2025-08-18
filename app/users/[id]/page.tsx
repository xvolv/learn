import React from "react";
import { Metadata } from "next";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { id } = await params;
  return {
    title: {
      absolute: "one",
    },
    description: `is is the profile  page `,
  };
};

const HomePage = async ({ params }: Props) => {
  const { id } = await params;
  return <div>{id} </div>;
};

export default HomePage;
