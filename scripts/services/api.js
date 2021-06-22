import { serialize } from '../utils/serialize'

export const api = async ({ method, headers, queryParams}) => {
  let baseUrl = 'https://front-br-challenges.web.app/api/v2/green-thumb/?';
  const config = {
    method,
    headers: new Headers(headers)
  }

  const response = await fetch(`${baseUrl}${queryParams && serialize(queryParams)}`, config);

  return response.json();
}
