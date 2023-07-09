import axios from "axios";

export async function fetchApiDbData<TResponse = unknown, TRequest = unknown>(
  action: string,
  request?: TRequest,
): Promise<TResponse> {
  const url = `/api/db?action=${action}`;
  const response = await axios.post(url, request || {});
  return response.data as TResponse;
}
