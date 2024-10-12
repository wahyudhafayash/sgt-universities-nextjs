"use client";
import React, { useEffect } from "react";
import LoginForm from "./_components/LoginForm";

const Page = () => {
  useEffect(() => {
    document.title = "auth";
  }, []);

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Page;
