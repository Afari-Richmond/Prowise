"use client";

import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <button onClick={() => signIn("github")} className="cursor-pointer">
      Login
    </button>
  );
};

export default LoginButton;
