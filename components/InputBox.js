import firebase from "firebase";
import { useSession } from "next-auth/client";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import { db } from "../firebase";

export default function InputBox() {
  const [session] = useSession();
  const inputRef = useRef(null);

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    db.collections("posts").add({
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    inputRef.current.value = "";
  };
  return (
    <div className='bg-white p-2 rounded-2xl shadow-md  text-gray-500 font-medium mt-6 '>
      <div className='flex p-4 space-x-4 items-center'>
        <Image
          className='rounded-full'
          width={40}
          height={40}
          layout='fixed'
          src={session.user.image}
        />
        <form className='flex flex-1'>
          <input
            className='rounded-full px-5 h-12 bg-gray-100 flex-grow focus:outline-none'
            type='text'
            ref={inputRef}
            placeholder={`What on Your's mind ${session.user.name}?`}
          />
          <button hidden type='submit' onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>

      <div className='flex justify-evenly p-3 border-t'>
        <div className='inputIcon'>
          <VideoCameraIcon className='h-7 text-red-500' />
          <p className='text-xs sm:text-xs xl:text-base'>Live Video</p>
        </div>
        <div className='inputIcon'>
          <CameraIcon className='h-7 text-green-400' />
          <p className='text-xs sm:text-xs xl:text-base'>Photo/Video</p>
        </div>
        <div className='inputIcon'>
          <EmojiHappyIcon className='h-7 text-yellow-300' />
          <p className='text-xs sm:text-xs xl:text-base'>Feeling Activity</p>
        </div>
      </div>
    </div>
  );
}
