import ChatForum from "@/app/components/ChatForum";
import React from "react";
import { currentUser } from "@clerk/nextjs/server";

const Page = async ({ params }) => {
  const user = await currentUser();


  if (!user) {
    throw new Error("User not found");
  }

  const { slug } = params;

  if (!slug) {
    throw new Error("Slug missing in params.");
  }

  console.log("User object:", user);

  let token = user.publicMetadata?.token;

  if (!token) {
    throw new Error(
      "User token is missing in Clerk publicMetadata. Please call /api/create to generate the token first."
    );
  }

  const name = user.firstName ?? "Anonymous";

  return (
    <ChatForum
      slug={slug}
      clerkUser={{
        id: user.id,
        name,
        token,
      }}
    />
  );
};

export default Page;
