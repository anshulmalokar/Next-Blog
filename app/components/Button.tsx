"use client"
import React from "react";
import { useFormStatus } from "react-dom";
type Props = {};

export default function Button({}: Props) {
  const { pending } = useFormStatus();

  return (
    <button
      type = "submit"
      className={`inline-block px-6 py-3 text-lg font-medium leading-6 text-white ${
        pending
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600"
      } border border-transparent rounded-md focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700`}
    >
      {
        pending ? <>Loading...</> : <>Submit Form</>
      }
    </button>
  );
}
