import Head from "next/head";
import React from "react";
import AppLayout from "../components/AppLayout";

const profile = () => {
  return (
    <>
      <Head>
        <title>My Profile</title>
      </Head>
      <AppLayout>
        <div>Profile Page</div>
      </AppLayout>
    </>
  );
};

export default profile;
