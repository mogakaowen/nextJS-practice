import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Next.js Tutorial</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={36} />
      <div>
        <Link href="/users">Users</Link>
      </div>
      <div>
        <Link href="/users/new">New User</Link>
      </div>
      <ProductCard />
    </main>
  );
}
