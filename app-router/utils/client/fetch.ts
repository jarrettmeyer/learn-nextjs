export async function fetchApiDbData<TResponse = unknown, TRequest = unknown>(request: TRequest): Promise<TResponse> {
  const url = "/api/db";
  const body = JSON.stringify(request);
  const method = "POST";
  const init: RequestInit = { body, method };
  const response = await fetch("/api/db", init);
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  throw new Error(`Failed to fetch ${url}, status: ${response.status}, body: ${await response.text()}`);
}
