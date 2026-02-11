"use client";

interface HamburgerMenuProps {
  onClick: () => void;
}

export default function HamburgerMenu({ onClick }: HamburgerMenuProps) {
  return (
    <div
      className="flex lg:hidden flex-col gap-1 items-center cursor-pointer z-1001 bg-[#E93400] p-2 rounded-sm"
      onClick={onClick}
    >
      <div className="w-7 h-1 bg-white origin-center will-change-transform"></div>
      <div className="w-7 h-1 bg-white origin-center will-change-transform"></div>
      <div className="w-7 h-1 bg-white origin-center will-change-transform"></div>
    </div>
  );
}
