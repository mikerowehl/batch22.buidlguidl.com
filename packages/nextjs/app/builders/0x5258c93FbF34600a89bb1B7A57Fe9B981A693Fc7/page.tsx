import Image from "next/image";
import { AddressBlock } from "./AddressBlock";
import type { NextPage } from "next";

const KhanoPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-10 text-center">
      <Image
        src="https://github.com/MrKhano.png"
        alt="Khano avatar"
        width={160}
        height={160}
        className="rounded-full shadow-lg"
      />

      <h1 className="text-4xl font-bold">Khano</h1>

      <p className="max-w-xl text-lg text-gray-700 dark:text-gray-300">
        Crypto trader, builder, and Web3 adventurer — exploring the Ethereum rabbit hole one challenge at a time. Proud
        member of BuidlGuidl Batch 22.
      </p>

      {/* Client-side address rendering */}
      <AddressBlock />

      <div className="mt-6 flex space-x-8 text-lg">
        <a href="https://x.com/MrKhano" target="_blank" className="text-blue-400 hover:underline">
          Twitter
        </a>

        <a href="https://github.com/MrKhano" target="_blank" className="text-purple-400 hover:underline">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default KhanoPage;
