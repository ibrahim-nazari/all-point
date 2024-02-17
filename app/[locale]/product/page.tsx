import Link from "next/link";

export default function Page({ params: { lng } }: { params: { lng: string } }) {
  return (
    <>
      <h1>Hi from product page!</h1>
      <Link href={`/${lng}`}>back</Link>
    </>
  );
}
