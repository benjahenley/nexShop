export default async function getTokenFromCode(email: string, code: number) {
  const url = process.env.NEXT_PUBLIC_API_URL + "/api/auth/token";

  try {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        code,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const token = await response.json();
    return token;
  } catch (e: any) {
    console.error(e.message);
    alert("no se ha podido ingresar");
    return null;
  }
}
