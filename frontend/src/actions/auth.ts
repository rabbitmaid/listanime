'use server';

import { LoginFormSchema, FormState } from '@/lib/definitions'
import { loginService } from '@/services/authService';
import { createSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import { cookies } from "next/headers";

export async function login(state: FormState, formData: FormData) {
    // Validate form fields
    const validatedFields = LoginFormSchema.safeParse({
        username: formData.get('username'),
        password: formData.get('password'),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            success: false,
            message: "Invalid form data",
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // call service provider
    const { username, password } = validatedFields.data;

    let data;

    try {
        data = await loginService({ username, password });
    } catch (error) {
        return {
            success: false,
            message: 'Invalid username or password',
        };
    }

    await createSession(data.token);

    return {
        success: true,
        message: 'Authentication successful',
        redirectTo: "/dashboard",
    };
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete("session");
    redirect("/auth/login");
}