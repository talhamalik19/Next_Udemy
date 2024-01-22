import React from 'react'
import { useRouter } from 'next/router'

export default function PortfolioProjectPage() {
    const router = useRouter();

    console.log(router.pathname)
    console.log("Query ",router.query.projectid)
  return (
    <div>
      <h1>This is a Portfolio Project page</h1>
    </div>
  )
}

// the route of this page will be localhost:3000/portfolio/anything.
//It can be a number or anything because [projectid] is a placeholder.
// NOTE THAT IF WE LOAD /portfolio/list. It will load list page.