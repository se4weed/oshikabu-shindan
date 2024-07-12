import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex-col space-y-4">
        <div className="text-white font-bold">
          <h1 className="text-6xl">推し株診断</h1>
          <h2 className="text-3xl">さあ、推し株探しの旅に出よう。</h2>
        </div>
        <Link href="/diagnosis">
          <button className="bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded">
            診断を始める
          </button>
        </Link>
      </div>
    </div>
  );
}
