import Link from "next/link";

export default function Details() {
  return (
    <>
      <h1>
        Escolha uma cryptomoeada no ranking para ver os detalhes.
      </h1>
      <Link href='/'>
        Voltar para home
      </Link>
    </>
  )
}