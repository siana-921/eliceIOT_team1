import Link from "next/link";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <main>
        <div>
          <Link href="/dashboard">대시보드로가기</Link>
        </div>
      </main>
    </RecoilRoot>
  );
}
