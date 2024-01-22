import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      This is a Home Page
      <ul>
        <li>
          <Link href={"/portfolio"}>Portfolio page</Link>
        </li>
        <li>
          <Link href={"/client"}>Client page</Link>
        </li>
      </ul>
    </div>
  );
}
