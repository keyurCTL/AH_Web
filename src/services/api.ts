const BASE_API_URL = process.env.NEXT_APP_API_URL;

export type ResponseType = {
  success: boolean,
  statusCode: number,
  data: any,
  message: string,
}

interface FetchParams {
  endpoint: string,
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body?: any,
  headers?: object,
  responseType?: 'json' | 'blob' | 'arraybuffer' | 'text', // ✅ optional
  additionalRequestOptions?: object
}

export const fetchData = async ({
  endpoint,
  method = 'GET',
  body = null,
  headers = {},
  responseType = 'json', // ✅ default to 'json'
  additionalRequestOptions = {}
}: FetchParams) => {
  try {
    const url = `${BASE_API_URL}${endpoint}`;
    const requestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : null,
    };

    const response = await fetch(url, { ...requestOptions, next: {
      revalidate: 1
    }, ...additionalRequestOptions });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    // ✅ Conditional parsing based on responseType
    switch (responseType) {
      case 'blob':
        return await response.blob();
      case 'arraybuffer':
        return await response.arrayBuffer();
      case 'text':
        return await response.text();
      case 'json':
      default:
        return await response.json() as ResponseType;
    }
  } catch (error) {
    console.log("ERROR", error);
    return error;
  }
};
