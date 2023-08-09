const BASE_URL = import.meta.env.VITE_GEOCODING_API_URL;
export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `${BASE_URL}?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}
