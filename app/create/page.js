import Heading from "@/components/Heading";
import CreateForm from "@/components/CreateForm";
import React from "react";

const CreatePage = () => {
  return (
    <section>
      <Heading title="Add Contact" description="Add Contact details below" />
      <div className="flex flex-col items-center justify-center">
        <CreateForm />
      </div>
    </section>
  );
};

export default CreatePage;
