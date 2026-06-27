"use server";
 
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { cache } from "react";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
 
export const verifySession = cache( async () => {
 
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;
  
  if(!token) {
    redirect("/auth/login");
  }

  try {

    const session = jwt.verify(token, JWT_SECRET) as {
      userId: string;
      username: string;
      role: string;
    };

    if (!session.userId) {
      redirect("/auth/login");
    }

    return {
      isAuth: true,
      userId: session.userId,
      role: session.role,
      username: session.username
    };

  }
  catch(e) {
      redirect("/auth/login");
  }
});