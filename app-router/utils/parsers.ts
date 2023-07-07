import { NextRequest } from "next/server";

export function parseDate(
  value: Date | string | number | null | undefined,
): Date | null {
  if (!value) {
    return null;
  }

  if (typeof value === "string") {
    try {
      return new Date(value);
    } catch (error) {
      console.error(`Unable to parse date from string "${value}"`, error);
    }
  }

  if (typeof value === "number") {
    try {
      return new Date(value);
    } catch (error) {
      console.error(`Unable to parse data from number ${value}`, error);
    }
  }

  return new Date(value);
}

export function parsePath(source: string | NextRequest): string[] {
  function removeEmptyStrings(aggregate: string[], current: string) {
    if (current && current.length) {
      aggregate.push(current);
    }
    return aggregate;
  }

  if (typeof source === "string") {
    return source.split("/").reduce(removeEmptyStrings, []);
  }

  if ((source as NextRequest)?.nextUrl?.pathname) {
    return (source as NextRequest).nextUrl.pathname
      .split("/")
      .reduce(removeEmptyStrings, []);
  }

  throw new Error(`Unable to parse path from source: ${source}`);
}
