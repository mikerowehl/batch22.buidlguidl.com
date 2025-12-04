"use client";

import Link from "next/link";
import { Address } from "@scaffold-ui/components";

type BuildersListProps = {
  builders: Array<{ builder: string; index: number }>;
  buildersWithPages: string[];
};

const BuildersList = ({ builders, buildersWithPages }: BuildersListProps) => {
  const folderMap = new Map<string, string>();
  buildersWithPages.forEach(folder => {
    folderMap.set(folder.toLowerCase(), folder);
  });

  return (
    <div className="w-full max-w-4xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {builders.map(checkedIn => {
          const checksummedAddress = folderMap.get(checkedIn.builder.toLowerCase());
          const hasPage = !!checksummedAddress;
          return (
            <div
              key={`${checkedIn.builder}`}
              className="bg-base-100 border border-base-300 rounded-lg p-4 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] flex flex-col gap-2"
            >
              <Address
                address={checkedIn.builder as `0x${string}`}
                format="short"
                onlyEnsOrAddress={true}
                disableAddressLink
              />
              {hasPage && checksummedAddress && (
                <Link href={`/builders/${checksummedAddress}`} className="btn btn-primary btn-sm mt-2">
                  View Profile
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuildersList;
