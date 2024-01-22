import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function IndividualClient() {
  const DEMO = [
    { id: "1", name: "Client ID apge" },
    { id: "project", name: "Client Project Page" },
  ];

  const router = useRouter();
  const pathname = router.query.id
  console.log(pathname)

  return (
    <div>
      <h1>This is a Individual Client page</h1>

      <ul>
        {DEMO.map((client) => (
          <li>
            <Link href={`/client/${pathname}/${client.id}`}>
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
