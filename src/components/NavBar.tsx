import { SignOutButton, useUser } from "@clerk/nextjs";


export default function NavBar () {
    const { user } = useUser();

    return <nav className=" flex  py-4 justify-between items-center border-b-2 px-10">
        <span className="capitalize">{user?.firstName}</span>
        <div className="rounded border p-2">
          <SignOutButton />
        </div>
      </nav>
}