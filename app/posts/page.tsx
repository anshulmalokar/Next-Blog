import prisma from "../db";
import React from "react";
import FormData from "../components/FormData";
import Posts from "../components/Posts";
import { Suspense } from "react";
type Props = {};

export default async function page({}: Props) {
  return (
    <>
      <div className="h-screen flex">
        {/* Left side: FormData */}
        <div className="w-2/5 h-full mr-8">
          <div className="sticky top-0 h-full">
            <FormData />
          </div>
        </div>

        {/* Right side: Blogs */}
        <Suspense fallback={<>Loading...</>}>
          <Posts />
        </Suspense>
      </div>
    </>
  );
}


