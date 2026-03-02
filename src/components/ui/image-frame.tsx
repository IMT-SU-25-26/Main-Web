import Image from "next/image";

interface ImageFrameProps {
  src: string | null;
  className?: string;
}

export default function ImageFrame({ src, className }: ImageFrameProps) {
  if (!src) {
    return (
      <div className={`absolute z-0 bg-white p-2 ${className}`}>
        <div className="absolute -top-4 left-[22%] z-10 h-[15%] w-[55%] bg-black/50"></div>
        <div className="flex aspect-square h-auto w-full items-center justify-center bg-gray-200">
          <span className="text-sm text-gray-400">No Image</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`absolute z-0 bg-white p-2 ${className}`}>
      <div className="absolute -top-4 left-[22%] z-10 h-[15%] w-[55%] bg-black/50"></div>
      <Image
        className="aspect-square h-auto w-full object-contain"
        src={src}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
      ></Image>
    </div>
  );
}
