"use client";

import { useState } from "react";

export default function BuilderPage() {
  const [copied, setCopied] = useState(false);

  const walletAddress = "0x04cdfb463600a29e8e93053b88daa11f54379907";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl">
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 sm:p-12 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                <span className="text-3xl font-bold text-white">🏗️</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-2">
                Builder
              </h1>
              <p className="text-slate-400 text-lg">Batch 22 Graduate</p>
            </div>

            {/* Bio */}
            <div className="mb-8">
              <p className="text-slate-300 text-center leading-relaxed">
                Smart contract developer and blockchain enthusiast building on Arbitrum. Passionate about creating
                secure, efficient Web3 infrastructure and exploring the potential of decentralized applications.
              </p>
            </div>

            {/* Address Card */}
            <div className="mb-8 p-4 bg-slate-700/50 border border-slate-600/50 rounded-lg">
              <p className="text-slate-400 text-sm mb-2">Wallet Address</p>
              <div className="flex items-center justify-between gap-4">
                <code className="text-sm sm:text-base text-blue-400 font-mono break-all">{walletAddress}</code>
                <button
                  onClick={copyToClipboard}
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors flex-shrink-0"
                >
                  {copied ? "✓" : "Copy"}
                </button>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-white mb-4">Skills & Focus</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Solidity", "Web3", "Arbitrum", "Smart Contracts", "Security", "Testing"].map(skill => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm text-slate-300 text-center hover:bg-slate-600/50 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-white mb-4">Achievements</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-slate-700/30 rounded-lg border border-slate-600/30">
                  <span className="text-xl">✅</span>
                  <div>
                    <p className="text-white font-medium">Check-in Complete</p>
                    <p className="text-sm text-slate-400">Successfully checked into BatchRegistry</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-700/30 rounded-lg border border-slate-600/30">
                  <span className="text-xl">🏗️</span>
                  <div>
                    <p className="text-white font-medium">Batch 22 Member</p>
                    <p className="text-sm text-slate-400">Active participant in BuidlGuidl Batch 22</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-white mb-4">Connect</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://github.com/dharmanan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-300 hover:bg-slate-600/50 transition-colors group"
                >
                  GitHub
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href={`https://arbiscan.io/address/${walletAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-300 hover:bg-slate-600/50 transition-colors group"
                >
                  Arbiscan
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center pt-8 border-t border-slate-700/50">
              <p className="text-slate-400 text-sm">
                Built with <span className="text-red-400">❤️</span> on{" "}
                <a href="https://scaffold.eth.build" className="text-blue-400 hover:text-blue-300">
                  Scaffold-ETH 2
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
