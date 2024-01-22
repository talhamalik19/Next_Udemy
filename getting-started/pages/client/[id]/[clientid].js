import React from 'react'
import { useRouter } from 'next/router'

export default function CientID() {
  const router = useRouter()

  console.log(router.query)
  return (
    <div>
      <h1>This is a specific client id for a specific client Project</h1>
    </div>
  )
}
