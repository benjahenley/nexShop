export default async function getAllProducts(id: string) {
  const urlKey = process.env.NEXT_PUBLIC_API_URL;
  const url = urlKey + "/api/products?productId=" + id + "&offset=0&limit=20";

  try {
    const response = await fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
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
