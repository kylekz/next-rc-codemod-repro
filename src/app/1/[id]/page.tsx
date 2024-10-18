import { unstable_noStore } from "next/cache";

type Props = {
  params: {
    id: string;
  };
};

export default async function IDPage({ params }: Props) {
  unstable_noStore();
  return <div>{params.id}</div>;
}
