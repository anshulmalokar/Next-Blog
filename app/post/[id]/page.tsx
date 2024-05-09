import React from 'react'
import prisma from '@/app/db'
type Props = {}

export default async function page({ params }: { params: { id: string } }) {
  
  const data:{
    id: string;
    title: string;
    content: string;
} | null = await prisma.posts.findFirst({
    where:{
      id: params.id
    }
  });

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      {data && (
        <div>
          <h1 className="text-3xl font-bold mb-3">{data.title}</h1>
          <div className="text-gray-500 mb-5">{data.content}</div>
        </div>
      )}
    </div>
  )
}