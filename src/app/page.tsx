"use client";

import dynamic from "next/dynamic";
import React from "react";

const MainContainer = dynamic(() => import("../components/MainContainer"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainContainer />
    </main>
  );
}
