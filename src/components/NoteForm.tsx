import { api } from "~/utils/api";

import { useForm } from "react-hook-form";

interface FormData {
  title: string,
  content: string,
}

export default function NoteForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const { mutate } = api.note.addNote.useMutation();
  const onSubmit = (formData: FormData) => {
    mutate({ content: formData.content, title: formData.title });
    reset();
  };

  return <form className="flex flex-col gap-4 text-center mx-auto py-6 px-12 border-2 max-w-sm"
               onSubmit={handleSubmit(onSubmit)}>
    <input placeholder="Title" className="bg-transparent text-center" {...register("title")} />
    <textarea placeholder="Content goes here"
              className="bg-transparent text-center" {...register("content", { required: true })} />
    {/* errors will return when field validation fails  */}
    {errors.exampleRequired && <span>This field is required</span>}
    <button className="border-2 rounded bg-rose-400 px-3 text-white py-1.5">Submit</button>
  </form>;
}