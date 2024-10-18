type Props = {
  params: {
    id: string;
  };
};

export function GET(_: Request, { params }: Props) {
  return new Response(`ID: ${params.id}`);
}
