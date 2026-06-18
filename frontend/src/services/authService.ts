type UserData = {
    username: string,
    email: string,
    password: string
};

export async function loginService(data: Omit<UserData, "email">) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.error || result.message);
    }
    return result;
}

export async function registerService(data: UserData) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.error || result.message);
    }
    return result;
}