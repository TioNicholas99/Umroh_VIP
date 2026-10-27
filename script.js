/*
  UMROH FAMILY VIP — PENGATURAN LINK

  Ganti WHATSAPP_NUMBER dengan nomor admin resmi:
  contoh: 6281234567890
  Gunakan kode negara 62, tanpa tanda +, spasi, atau angka 0 di depan.

  Link Instagram, Facebook, dan TikTok sudah dipasang di index.html.
*/
const WHATSAPP_NUMBER = "GANTI_DENGAN_NOMOR_ADMIN";
const WHATSAPP_MESSAGE =
  "Assalamu’alaikum, saya ingin konsultasi paket Umroh Family VIP dan informasi keberangkatan.";

const whatsappLinks = document.querySelectorAll('[data-link="whatsapp"]');
const validNumber = /^\d{10,15}$/.test(WHATSAPP_NUMBER);

whatsappLinks.forEach((link) => {
  if (validNumber) {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = "#";
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert(
        "Nomor WhatsApp admin belum diatur. Buka file script.js, lalu ganti GANTI_DENGAN_NOMOR_ADMIN dengan nomor admin resmi."
      );
    });
  }
});
