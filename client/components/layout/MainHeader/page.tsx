import Image from "next/image";

export default function MainHeader() {
  return (
    <nav className="navbar navbar-expand-md px-3     fixed-top">
      <div className="container-fluid justify-content-start ">
        <div className="d-flex align-items-center gap-2">
          <Image
            src="/pinoycoder.png"
            alt="PinoyCoder Logo"
            width={70}
            height={70}
            priority
          />

          <span className="text-light fw-bold fs-5">PinoyCoder</span>
        </div>
      </div>
    </nav>
  );
}
