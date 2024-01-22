import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div>
      <h1>This is Portfolio page</h1>

      <ul>
        <li>
          <Link href={"/portfolio/1"}>Project page</Link>
        </li>
        <li>
          <Link href={"/portfolio/list"}>Portfolio List page</Link>
        </li>
      </ul>
    </div>
  )
}
