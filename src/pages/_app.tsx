import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { useRouter } from "next/router";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";

const publicPages: Array<string> = [];

const MyApp: AppType = ({ Component, pageProps }) => {
  const { pathname } = useRouter();

  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname);
  return (
    <div className=" text-slate-300 min-h-screen bg-gray-900">
    <ClerkProvider {...pageProps} >
      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <SignIn/>
          </SignedOut>
        </>
      )}
    </ClerkProvider>
    </div>
  );
};

export default api.withTRPC(MyApp);
