import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="container flex flex-row items-center justify-between py-4 mx-auto border-b">
        <Link href={"/"} className="font-bold text-2xl">
          Acervo de Cursos
        </Link>
        <Link
          href={"https://github.com/gabrielfel1x/course-collection"}
          target="_blank"
          className="absolute top-6 left-2/4"
        >
          <Image src="github-mark.svg" alt="" width={34} height={34} />
        </Link>
      </div>
    </header>
  );
}
