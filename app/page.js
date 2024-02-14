import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <main>
      <Heading
        title="My Contact Book"
        description="All contacts are given below with details"
      />
      <Navbar />
    </main>
  );
};

export default page;
