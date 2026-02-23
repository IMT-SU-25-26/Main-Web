export function formatDate<T extends object>(
  obj: T,
  field: keyof T | string = "date"
): string {
  const value = (obj as any)[field as string];
  if (!value) return "";
  const date = new Date(String(value));
  if (Number.isNaN(date.getTime())) return "";
  return date
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .toUpperCase();
}
