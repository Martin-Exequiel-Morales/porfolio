import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Allow the dev server to accept requests from other devices on the LAN
	// (e.g. testing the site from a phone). Next 16 blocks cross-origin
	// requests to `/_next/*` dev assets by default; this opts in specific
	// hosts. Production is unaffected — this only applies to `next dev`.
	allowedDevOrigins: ["192.168.0.237"],
};

export default nextConfig;

