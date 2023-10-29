import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 font-semibold">
      <p>Página em Construção</p>
      <Link
        href="https://www.linkedin.com/in/nathaliabuchholz/"
        className="hover:text-blue-600 hover:cursor-pointer"
      >
        LinkedIn
      </Link>
    </main>
  );
}
