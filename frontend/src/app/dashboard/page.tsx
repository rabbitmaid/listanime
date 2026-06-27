import { verifySession } from "@/lib/dataAccessLayer";
import { logout } from "@/actions/auth";

export default async function Page() {
  const session = await verifySession();
  return (
    <div className="uppercase text-2xl text-white py-5 px-8">
      <p>Username: {session.username}</p>
      <p>Role: {session.role}</p>
      <p>UserId: {session.userId}</p>

      <form action={logout}>
        <button type="submit" className="py-1 px-3 bg-red-600 text-white rounded cursor-pointer uppercase text-sm tracking-widest mt-5">Logout</button>
      </form>
    </div>
  );
}
