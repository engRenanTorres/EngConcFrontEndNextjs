type HttpClientResponse = {
  ok: boolean;
  body: object;
};

type FetchOptions<T> = Omit<RequestInit, 'body'> & {
  body: T;
};

export async function HttpClient<T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  url: string,
  fetchOptions: FetchOptions<T>,
): Promise<HttpClientResponse> {
  return await fetch(url, {
    ...fetchOptions,
    method: method,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      ...fetchOptions.headers,
    },
    body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
  }).then(async (response) => {
    return {
      ok: response.ok,
      body: await response.json(),
    };
  });
}

export async function HttpClientGet(
  url: string,
  fetchOptions: RequestInit,
): Promise<HttpClientResponse> {
  return await fetch(url, {
    ...fetchOptions,
    method: 'GET',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      ...fetchOptions.headers,
    },
  }).then(async (response) => {
    return {
      ok: response.ok,
      body: await response.json(),
    };
  });
}