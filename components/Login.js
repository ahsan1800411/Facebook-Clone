import { signIn } from "next-auth/client";
import Image from "next/image";
export default function Login() {
  return (
    <div className='grid place-items-center'>
      <Image
        src='https://links.papareact.com/t4i'
        height={400}
        width={400}
        objectFit='contain'
      />
      <h1
        className='p-5 bg-blue-500 text-white text-center cursor-pointer'
        onClick={signIn}
      >
        Login with Facebook
      </h1>
    </div>
  );
}
