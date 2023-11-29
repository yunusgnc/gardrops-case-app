import { toast } from "react-toastify";

const toastConfig = {
  position: "bottom-right", // Bildirimin nerede görüneceğini belirtir
  autoClose: 3000, // Bildirimin otomatik kapanma süresi (ms cinsinden)
  hideProgressBar: false, // İlerleme çubuğunu gizler
  closeOnClick: true, // Bildirime tıklandığında otomatik olarak kapatır
  pauseOnHover: true, // Bildirim üzerine gelindiğinde otomatik kapanmayı duraklatır
  draggable: true, // Bildirimi sürükleyerek taşınabilir yapar
};

export const showToast = (message, type = "success") => {
  // 'success', 'error', 'warning', 'info' gibi bildirim türleriyle kullanabilirsin
  toast[type](message, toastConfig);
};
