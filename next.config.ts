import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.DEPLOY_STANDALONE === "true" ? "standalone" : undefined,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.sesajans.com.tr" }],
        destination: "https://sesajans.com.tr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
