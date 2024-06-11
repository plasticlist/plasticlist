import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="min-h-screen max-w-4xl flex flex-col mx-auto p-8 justify-between gap-8">
      <div className="flex flex-col gap-8">
        <Header />
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-baseline">
            <p className="text-xs text-gray-500">2024-06-10</p>
            <Link href="/blog/2weeks" className="underline">
              PlasticList status report
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}