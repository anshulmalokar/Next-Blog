import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold">MyBlogApp</div>
      <div>
        <Link href={'/'}>
          <span className="mr-4 cursor-pointer">Home</span>
        </Link>
        <Link href={'/posts'}>
          <span className="cursor-pointer">Post</span>
        </Link>
      </div>
    </div>
  );
}
