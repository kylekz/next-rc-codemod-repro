export default async function IDPage({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>;
}
