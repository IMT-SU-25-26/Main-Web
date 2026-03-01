"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

interface SearchableItem<T = string> {
  id: T;
  title?: string;
  name?: string;
}

interface CategoryFilter extends SearchableItem<number> {
  id: number;
  name: string;
}

interface SearchSectionProps<T, C extends CategoryFilter> {
  items: T[];
  categories?: C[];
  children: (filteredItems: T[]) => React.ReactNode;
  className?: string;
  placeholder?: string;
  getSearchValue?: (item: T) => string;
  getItemCategoryId?: (item: T) => string | number;
  additionalElements?: React.ReactNode;
  childrenOverflow?: boolean;
  isCentered?: boolean;
}

export default function SearchBar<
  T extends SearchableItem,
  C extends CategoryFilter = CategoryFilter,
>({
  items,
  categories,
  children,
  className,
  placeholder = "Search Here...",
  getSearchValue = (item) => item.title ?? item.name ?? "",
  getItemCategoryId = (item) =>
    (item as T & { categoryId?: string | number }).categoryId ?? "",
  additionalElements = null,
  childrenOverflow = false,
  isCentered = false,
}: SearchSectionProps<T, C>) {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<
    (string | number)[]
  >([]);

  // Category Toggle
  const toggleCategory = (categoryId: string | number) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  // Item Filter
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = getSearchValue(item)
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(getItemCategoryId(item));

      return matchesSearch && matchesCategory;
    });
  }, [items, search, selectedCategories, getSearchValue, getItemCategoryId]);

  return (
    <div className={`w-full ${className ?? ""}`}>
      {/* Search Bar */}
      <div
        className={`my-1 ${isCentered ? "m-auto justify-center" : "justify-start"} flex w-full max-w-100 items-center gap-2`}
      >
        <div className="relative w-full max-w-65 sm:max-w-sm md:max-w-md">
          <Image
            src="/images/layout/search-icon.webp"
            alt="Search Icon"
            width={18}
            height={18}
            className="absolute top-1/2 left-3 -translate-y-1/2"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={placeholder}
            className="w-full rounded-full border-[2.5px] border-[#FF4712] bg-white py-2 pr-4 pl-10 text-sm text-black placeholder-gray-400 focus:outline-none"
          />
        </div>

        {additionalElements}
      </div>

      {/* Category Filter Buttons */}
      {categories && (
        <div className="my-2 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategories.includes(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => toggleCategory(cat.id)}
                className={`rounded-full border px-3 py-1 transition ${
                  isActive
                    ? "border-[#FF4712] bg-[#FF4712] text-white"
                    : "border-[#FF4712] bg-white text-black hover:bg-gray-100"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      )}

      {/* Render Children */}
      <div className={`w-full ${childrenOverflow ? "overflow-x-auto" : ""}`}>
        {children(filteredItems)}
      </div>
    </div>
  );
}
