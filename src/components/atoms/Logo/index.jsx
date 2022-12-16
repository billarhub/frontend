import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ white }) => {
  return (
    <>
    <Link href="/">
      <Image
        style={{cursor:"pointer"}}
        src={white ? "/logo-white.svg" : "/logo-black.svg"}
        alt="Billarhub Logo"
        width={250}
        height={40}
        />
    </Link>
  </>
  );
};

export default Logo;
