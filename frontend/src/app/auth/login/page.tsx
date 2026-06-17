import type { Metadata } from "next";
import LoginForm from "@/sections/Auth/LoginForm";

export const metadata: Metadata = {
  title: "Login – ListAnime",
  description:
    "Sign in to your ListAnime account to track your anime, manage your watchlist, and get personalized recommendations.",
  keywords: [
    "ListAnime login",
    "anime account",
    "sign in",
    "anime tracker login",
    "watchlist login",
  ],
  openGraph: {
    title: "Login – ListAnime",
    description:
      "Sign in to your ListAnime account and continue tracking your favorite anime.",
    url: "https://your-domain.com/login",
    siteName: "ListAnime",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Login – ListAnime",
    description:
      "Access your ListAnime account to manage your anime watchlist and preferences.",
  },
};

export default function Page() {
  return (
    <>
      <section className="w-full py-10 px-5 md:py-18 md:px-20 min-h-screen flex items-center justify-center">
          <LoginForm />
      </section>
    </>
  );
}
