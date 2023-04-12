import { type NextPage } from "next";
import Head from "next/head";
import { useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";
import NavBar from "~/components/NavBar";
import NoteForm from "~/components/NoteForm";

interface FormData {
  title: string,
  content: string,
}
const Home: NextPage = () => {
  const { mutate } = api.note.addNote.useMutation();
  const { user } = useUser();
  const onSubmit = (formData: FormData) => {
    mutate(formData)
  }
  return (
    <>
      <Head>
        <title>Random Notes</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <main className="mx-auto w-10/12">
        <h1 className="my-6 text-4xl text-center">Add new note</h1>
       <NoteForm/>
      </main>
    </>
  );
};

export default Home;
