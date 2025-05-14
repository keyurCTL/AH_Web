// utils/api.js

const BASE_API_URL = process.env.NEXT_APP_API_URL;

export type ResponseType = {
  success: boolean,
  statusCode: number,
  data: any,
  message: string,
}

interface FetchParams {
  endpoint: String,
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body?: any,
  headers?: {},
  additionalRequestOptions?: {}
}

export const fetchData = async ({ endpoint, method = 'GET', body = null, headers = {}, additionalRequestOptions = {} }: FetchParams) => {
  try {
    const url = `${BASE_API_URL}${endpoint}`;
    // console.log("url", url)
    const requestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : null,
    };
    
    const response = await fetch(url, { ...requestOptions, ...additionalRequestOptions });
    // if (!response.ok) {
    //   throw new Error(`Request failed with status ${response.status}`);
    // }
    if (response != null && response != undefined) {
      return await response.json() as ResponseType;
    }
    return {
      statusCode: 404,
      success: false,
      message: "Not found",
      data: null,
    } as ResponseType
  } catch (error) {
    console.log(error, "ERROR");
    
    return error
  }
};