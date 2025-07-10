import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";
// client-side you initialize the Chat client with your API key
// Define values.
// const api_key = process.env.NEXT_PUBLIC_STREAM_API_KEY;
// const api_secret = process.env.STREAM_API_SECRET;

const api_key = "w3abnkwk68fm";
const api_secret =
  "tmawe5nwqtxnavbxyh5jpuux3ywk4seky2ed8a4eejh7g3guanmfwyc7bzryg3tw";

// const user_id = process.env.NEXT_PUBLIC_STREAM_USER_ID;

export async function POST(request) {
  // Initialize a Server Client
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json();

  // Create User Token
  const token = serverClient.createToken(user.data.id);
  console.log("user created", token);
  const client = await clerkClient();
  await serverClient.upsertUser({ id: user.data.id });

  function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token,
    },
  });
  const slugs = [
    "react-new",
    "next-new",
    "html-css-new",
    "frontend-general-new",
    "backend-development-new",
    "python-new",
    "devops-hosting-new",
    "apis-integrations-new",
    "open-source-new",
  ];
  slugs.forEach(async (slug) => {
    const channel = serverClient.channel("messaging", slug, {
      image: "https://getstream.io/random_png/?name=react",
      name: "Let's Discuss about " + capitalize(slug),
      created_by_id: user.data.id,
    });
    await channel.create();
    channel.addMembers([user.data.id]);
  });

  return Response.json({ message: "Hello World" });
}
