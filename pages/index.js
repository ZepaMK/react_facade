import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center h-screen gap-20">
        <div className="px-[20%]">
          <p className="text-[1.8rem]">
            This web application is part of a practical case study of the
            Amsterdam University of Applied Sciences. It is a research on
            applying the façade pattern with the use of React Hooks.
          </p>
          <p className="text-[1.2rem] mt-4">By Zep Swijghuisen</p>
        </div>
        <ul className="flex justify-center gap-20">
          <li className="border border-black p-3 hover:bg-black hover:text-white duration-300 cursor-pointer">
            <Link href="/hooks">Hooks explanation</Link>
          </li>
          <li className="border border-black p-3 hover:bg-black hover:text-white duration-300 cursor-pointer">
            <Link href="/nonfacade">Without the façade pattern</Link>
          </li>
          <li className="border border-black p-3 hover:bg-black hover:text-white duration-300 cursor-pointer">
            <Link href="/facade">With the façade pattern</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
