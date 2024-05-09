import React from "react";
import Link from "next/link";
import prisma from "../db";
type Props = {};

export default async function Posts({}: Props) {
  const data = await prisma.posts.findMany({});
  return (
    <>
      {/* Right side: Blogs */}
      <div className="w-3/5 h-full">
        {data.map((item, idx) => (
          <Link href={`/post/${item.id}`}>
            <div key={idx} className="bg-white shadow-md rounded-md p-6 mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
