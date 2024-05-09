'use client'
import React from "react";
import {addData,revalidate} from "@/actions/action";
import { revalidatePath } from "next/cache";
import { useRef } from 'react'
import Button from "./Button";
type Props = {};

export default function FormData({}: Props) {
//   adding a server action which will add the data to the database from the from when it's been clicked
const ref = useRef<HTMLFormElement>(null);
async function addFormData(formData: FormData){
    if(formData){
        const data = {
            title: formData.get("title") as string,
            content: formData.get("content") as string
        }
        console.log(data);
        await addData(data);
        ref.current?.reset()
        revalidate('/posts');
    }
}

  return (
    <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-md">
      <form ref={ref} action={addFormData} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-2 p-3 border border-gray-300 rounded-md w-full"
            placeholder="Enter a title for your blog post"
            required
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            className="mt-2 p-3 border border-gray-300 rounded-md w-full h-64 resize-none" // Adjusted height
            placeholder="Share your ideas here..."
            required
          />
        </div>
        <Button/>
      </form>
    </div>  
  );
}
