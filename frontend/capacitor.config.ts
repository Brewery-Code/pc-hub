import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.breweryCode.pcHub",
  appName: "pcHub",
  webDir: "dist",
  server: {
    url: "http://192.168.1.5:5173", // URL вашого сервера
    cleartext: true, // Якщо сервер використовує HTTP, це дозволить працювати з ним
  },
};

export default config;
