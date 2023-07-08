export function toDateEndOfDay(value: Date | string | null | undefined): Date | null {
  const dateOnlyPattern = /^\d{4}-\d{2}-\d{2}$/;
  if (typeof value === "string" && value.match(dateOnlyPattern)) {
    return new Date(`${value}T23:59:59.999`);
  }
  return null;
}

export function toStringOrNull(value: string | null | undefined): string | null {
  if (value === null || value === undefined) {
    return null;
  }

  value = value?.trim();
  if (value.length === 0) {
    return null;
  }

  return value;
}
