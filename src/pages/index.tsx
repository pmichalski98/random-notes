import { type NextPage } from "next";
import Head from "next/head";
import { SignOutButton, useUser } from "@clerk/nextjs";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { user } = useUser();
  return (
    <>
      <Head>
        <title>Random Notes</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className=" flex  py-4 justify-between items-center border-b-2 px-10">
        <span className="capitalize">{user?.firstName}</span>
        <div className="rounded border p-2">
          <SignOutButton />
        </div>
      </nav>
      <main className="mx-auto w-10/12 flex justify-center">
        <h1 className="">Add new note</h1>
      </main>
    </>
  );
};

export default Home;
