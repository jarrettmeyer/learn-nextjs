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

export function toDueDateTimeString(value: string | null | undefined): string | null {
  if (value === null || value === undefined) {
    return null;
  }
  if (value === "") {
    return null;
  }
  if (value === "NaN-NaN-NaN") {
    return null;
  }
  console.log("value:", value);
  const date = new Date(value);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}T23:59:59.999`;
}

export function toNullableString(value: string | null | undefined): string | null {
  if (isEmptyString(value)) {
    return null;
  }
  return String(value);
}
