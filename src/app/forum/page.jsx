"use client";

import Card from "../components/Card/Card";
const topics = [
  {
    id: 1,
    heading: "React.js",
    description:
      "Discuss React.js best practices, hooks, component design, and performance optimization.",
    btnText: "View Topic",
    slug: "react-new",
  },
  {
    id: 2,
    heading: "Next.js",
    description:
      "Talk about server-side rendering, static site generation, and app optimization with Next.js.",
    btnText: "View Topic",
    slug: "next-new",
  },
  {
    id: 3,
    heading: "HTML & CSS",
    description:
      "Share tips and discuss the latest in HTML5, CSS3, animations, and responsive design techniques.",
    btnText: "View Topic",
    slug: "html-css-new",
  },
  {
    id: 4,
    heading: "Frontend General",
    description:
      "A place for all frontend-related discussions: frameworks, tooling, animations, and more.",
    btnText: "View Topic",
    slug: "frontend-general-new",
  },
  {
    id: 5,
    heading: "Backend Development",
    description:
      "Talk about Node.js, Express, databases, authentication, and server architecture.",
    btnText: "View Topic",
    slug: "backend-development-new",
  },
  {
    id: 6,
    heading: "Python",
    description:
      "Discuss Python for web, automation, data science, AI, and general scripting tips.",
    btnText: "View Topic",
    slug: "python-new",
  },
  {
    id: 7,
    heading: "DevOps & Hosting",
    description:
      "Conversations on CI/CD, cloud platforms, VPS, security, and deployment best practices.",
    btnText: "View Topic",
    slug: "devops-hosting-new",
  },
  {
    id: 8,
    heading: "APIs & Integrations",
    description:
      "Share experiences and discuss strategies for building and consuming APIs.",
    btnText: "View Topic",
    slug: "apis-integrations-new",
  },
  {
    id: 9,
    heading: "Open Source & Community",
    description:
      "Collaborate on open source projects, share contributions, and find collaborators.",
    btnText: "View Topic",
    slug: "open-source-new",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#2e0066] to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to the Forum
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          Explore topics below and join discussions with other developers and
          enthusiasts.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((elem) => (
          <Card e={elem} key={elem.id} />
        ))}
      </div>
    </div>
  );
};

export default Page;
