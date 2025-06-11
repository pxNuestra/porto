import type { NextConfig } from "next";

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
const nextConfig = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});

module.exports = nextConfig;
export default nextConfig;
