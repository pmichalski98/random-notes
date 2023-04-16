import React from "react";
import { api } from "~/utils/api";
import { GoTrashcan } from "react-icons/go";

const NoteList = () => {
  const utils = api.useContext();
  const { data, isLoading, error } = api.note.getNotes.useQuery();
  const { mutate } = api.note.deleteNote.useMutation({
    onSuccess: async () => {
      await utils.note.getNotes.invalidate()
    }
  });
  if (isLoading) return <div>is loading...</div>;
  if (error) return <div>something went wrong...</div>;
  return (
    <div className="">
      {data && data.map(note => {
        return (
          <div key={note.id} className="mt-6">
            <div className="border-2 m-4 rounded flex flex-col max-w-md">
              <div className="flex border-b-2">
                <h2 className=" flex-1 pl-4 capitalize text-2xl py-1">
                  {note.title}
                </h2>
                <div className=" flex items-center">
                  <span className=" px-2">{note.createdAt.toLocaleDateString()}</span>
                  <GoTrashcan onClick={() => mutate(note.id)} className="text-rose-400 mr-2 h-8 cursor-pointer" />
                </div>
              </div>
              <p className="pl-4 py-2">{note.content}</p>
            </div>
          </div>
        );
      })}
    </div>

  );
}
  ;

  export default NoteList;
  