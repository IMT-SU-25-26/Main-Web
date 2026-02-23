export function formatDate<T extends object, K extends keyof T>(
  obj: T,
  field: K,
): string {
  const value = obj[field];

  if (value === null || value === undefined) return "";

  const date = new Date(value as unknown as string | number | Date);

  if (Number.isNaN(date.getTime())) return "";

  return date
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .toUpperCase();
}
