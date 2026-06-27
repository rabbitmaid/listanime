import { verifySession } from "@/lib/dataAccessLayer";

export default async function Layout({ children }: { children: React.ReactNode }) {
  await verifySession();
  return <main>{children}</main>;
}
