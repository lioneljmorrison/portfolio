/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Next 16 otherwise writes an AGENTS.md block into the repo on `next dev`.
  agentRules: false,
};

module.exports = nextConfig;
