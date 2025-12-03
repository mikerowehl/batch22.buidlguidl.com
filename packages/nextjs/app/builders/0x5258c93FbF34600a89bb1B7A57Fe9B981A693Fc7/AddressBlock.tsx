"use client";

import { Address } from "@scaffold-ui/components";

export function AddressBlock() {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-sm font-semibold">Address:</p>
      <Address address="0x5258c93FbF34600a89bb1B7A57Fe9B981A693Fc7" />
    </div>
  );
}
