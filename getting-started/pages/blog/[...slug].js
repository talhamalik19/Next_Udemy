import React from 'react'
import { useRouter } from 'next/router'

export default function IndividualBlogs() {
    const router = useRouter()

    console.log(router.query)
  return (
    <div>
      <h1>Blog Slug page</h1>
    </div>
  )
}
