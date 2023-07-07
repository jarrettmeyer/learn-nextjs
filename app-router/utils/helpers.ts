export function isEmptyString(value: string | undefined | null): boolean {
  if (typeof value === "string" && value.length > 0) {
    return false;
  }

  return true;
}

export function toDateString(value: Date | string | null | undefined): string {
  if (value === null || value === undefined) {
    return "";
  }
  if (typeof value === "string") {
    value = new Date(value);
  }
  const year = value.getFullYear();
  const month = (value.getMonth() + 1).toString().padStart(2, "0");
  const day = value.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}
