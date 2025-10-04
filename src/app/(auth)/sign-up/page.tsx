import AuthForm from "@/components/modules/AuthForm";
import React from "react";

function page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <AuthForm type="sign-up" />
    </div>
  );
}

export default page;
