export async function fetchApiDbData<TResponse = unknown, TRequest = unknown>(
  action: string,
  request?: TRequest,
): Promise<TResponse> {
  const url = `/api/db?action=${action}`;
  const body = JSON.stringify(request || null);
  const method = "POST";
  const init: RequestInit = { body, method };
  const response = await fetch(url, init);
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  throw new Error(`Failed to fetch ${url}, status: ${response.status}, body: ${await response.text()}`);
}
