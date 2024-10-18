export default async function verifyEmail(email: string) {
  const url = process.env.NEXT_PUBLIC_API_URL + "/api/email";

  try {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // const token = await response.json();
    return response;
  } catch (e: any) {
    console.error(e.message);
    alert("no se ha podido ingresar");
    return null;
  }
}
