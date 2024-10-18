type Props = {
  params: {
    id: string;
  };
};

export default async function IDPage({ params }: Props) {
  return <div>{params.id}</div>;
}
