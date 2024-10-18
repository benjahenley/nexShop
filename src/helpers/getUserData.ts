export default async function getUserData(token: string) {
  const urlKey = process.env.NEXT_PUBLIC_API_URL;
  const url = urlKey + "/api/me";
  console.log(token);

  try {
    const response = await fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + token,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (e: any) {
    console.log(e);
    return null;
  }
}
