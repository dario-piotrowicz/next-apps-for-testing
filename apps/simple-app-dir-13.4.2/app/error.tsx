'use client'
 
import Link from 'next/link'
import { useEffect } from 'react'

import ErrorMessage from './error-message.mdx'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='grid min-h-screen place-items-center bg-red-400 text-black'>
        <div className='flex flex-col gap-5'>
            <ErrorMessage />
            <button className='border-solid border-2 border-red-900 p-1 mt-9 self-center' onClick={() => reset()}>
                Try again
            </button>
            <Link className='border-solid border-2 border-red-900 p-1 mt-9 self-center' href='/'>
                Back to home
            </Link>
        </div>
    </div>
  )
}