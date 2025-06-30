export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Hanya POST' });

  const { link, kategori, negara, tag, deskripsi } = req.body;

  try {
    const response = await fetch('https://groupsor.link/group/addgroup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        link,
        kategori,
        negara,
        bahasa: "indonesia",
        tag,
        deskripsi
      })
    });

    return res.status(200).json({ message: 'Terkirim ke GroupSor.link!' });
  } catch (err) {
    return res.status(500).json({ message: 'Gagal mengirim', error: err.message });
  }
}
