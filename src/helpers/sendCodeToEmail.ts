export default async function sendCodeToEmail(email: string) {
  const url = process.env.NEXT_PUBLIC_API_URL + "/api/auth";

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

    console.log("success! Email sent to: " + email);
    return response;
  } catch (e: any) {
    console.log(e.message);
    return null;
  }
}
