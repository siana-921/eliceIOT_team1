import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header class="">
        <div class="header_logo">
          <p>안셍세요</p>
        </div>
        <div class="header_menu">
          <p>메입니니</p>
        </div>
      </header>
      <div>
        <video src="/images/backgroundVideo.mp4" loop autoPlay muted></video>
        <div class="content">
          <span>바질팜팜팜</span>
        </div>
      </div>
    </main>
  );
}
