import { SignUpForm } from '@/components/component/sign-up-form';
import React from 'react';

const page = () => {
    return (
        <section className="flex justify-center items-center flex-col min-h-svh w-full bg-[#D8F1FE]">
        <div className=''>
          <img src="assets/RezoinLogo.png" alt="logo" width={300} height={200} />
        </div>
        <div className="w-96">
        <SignUpForm />
        </div>
      </section>
    );
};

export default page;