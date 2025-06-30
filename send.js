export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { link, kategori, negara, tag, deskripsi } = req.body;

  try {
    const response = await fetch("https://groupsor.link/api/group", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        link,
        kategori,
        negara,
        tag,
        deskripsi,
      }),
    });

    const data = await response.json();
    return res.status(200).json({ message: "Terkirim ke groupsor.link!" });
  } catch (error) {
    return res.status(500).json({ message: "Gagal mengirim ke target." });
  }
}
