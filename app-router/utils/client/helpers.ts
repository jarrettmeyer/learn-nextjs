export function toDateString(value: Date | string | null | undefined): string | undefined {
  if (value === null || value === undefined || value === "") {
    return undefined;
  }
  if (typeof value === "string") {
    value = new Date(value);
  }
  const year = value.getFullYear();
  const month = (value.getMonth() + 1).toString().padStart(2, "0");
  const day = value.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}
