import { auth, signOut } from "@/auth";
import React from "react";
import LoginButton from "./LoginButton";

import Image from "next/image";
import Link from "next/link";


const NavBar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="next.svg" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <form action={async () => {
                "use server";
                await signOut( );
              }} className="cursor-pointer">
                <button type="submit" className="cursor-pointer">Logout</button>
              </form>

              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <LoginButton />
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
