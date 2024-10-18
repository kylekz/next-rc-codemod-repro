export function GET(_: Request, { params }: { params: { id: string } }) {
  return new Response(`ID: ${params.id}`);
}
