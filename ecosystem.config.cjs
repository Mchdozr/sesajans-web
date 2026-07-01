/** PM2 — Natro VPS deploy */
module.exports = {
  apps: [
    {
      name: "sesajans-web",
      script: ".next/standalone/server.js",
      cwd: __dirname,
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        NEXT_PUBLIC_SITE_URL: "https://sesajans.com.tr",
        CONTACT_EMAIL: "info@sesajans.com.tr",
      },
    },
  ],
};
