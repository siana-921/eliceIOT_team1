import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <Link href="/dashboard">대시보드로가기</Link>
      </div>
    </main>
  );
}
