import Image from "next/image";

interface ServiceCard {
  title: string;
  type: string;
  description: string;
  color?: string;
  opacity?: string;
  className?: string;
  imageUrl?: string;
}

export default function ServiceCard({
  title,
  type,
  description,
  color,
  opacity,
  className,
  imageUrl,
}: ServiceCard) {
  return (
    <div
      className={`relative flex min-h-80 min-w-120 flex-col gap-4 bg-[#F5F5F5] p-4 shadow-[-12px_12px_5px_-5px_rgba(0,0,0,0.25)] sm:p-8 ${className}`}
      style={{ opacity }}
    >
      <div className="service-image image-container-hsc relative flex h-[65%] w-full flex-col justify-end overflow-hidden bg-gray-200">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
            loading="lazy"
          />
        )}
        <div
          className="relative z-10 h-[10%] w-full"
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <div>
        <h1 className="service-title-text font-family-gill-condensed-bold text-4xl font-bold text-black">
          {title}
        </h1>
        <h2
          className="service-type-text font-family-impact w-fit px-4 text-lg text-white uppercase"
          style={{ backgroundColor: color }}
        >
          {type}
        </h2>
        <p className="service-description-text font-family-gill font-bold text-black">
          {description}
        </p>
      </div>
      <Image
        src="/images/pages/home/sobekan-community-service.webp"
        alt="Service Image"
        width={1000}
        height={1000}
        draggable={false}
        className="absolute bottom-[-7.5%] left-0 z-20"
        loading="lazy"
      />
    </div>
  );
}
