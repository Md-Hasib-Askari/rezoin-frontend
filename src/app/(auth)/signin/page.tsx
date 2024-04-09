import { SignInForm } from "@/components/component/sign-in-form";
import React from "react";

const SignIn = () => {
  return (
    <section className="flex justify-center items-center flex-col min-h-svh bg-[#D8F1FE]">
      <div>
        <img src="assets/RezoinLogo.png" alt="logo" width={300} height={200} />
      </div>
      <div className="w-96">
        <SignInForm />
      </div>
    </section>
  );
};

export default SignIn;
