import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Client() {
  const router = useRouter()

  const clients = [
    { id: "talha", name: "Client ID Page" }
  ];

  return (
    <div>
      <h1>This is a client page</h1>

      <ul>
        {clients.map((client) => (
          <>
            <li> <Link href={`/client/${client.id}`}>{client.name}</Link></li>
          </>
        ))}
      </ul>
    </div>
  );
}
