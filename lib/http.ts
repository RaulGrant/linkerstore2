/**
 * HTTP utility functions for making API requests
 */

export class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
    public data?: any
  ) {
    super(message);
    this.name = 'HttpError';
  }
}

interface HttpOptions extends RequestInit {
  params?: Record<string, string>;
}

/**
 * Main HTTP function that wraps fetch with error handling
 */
export async function http<T = any>(
  url: string,
  options: HttpOptions = {}
): Promise<T> {
  const { params, ...fetchOptions } = options;

  // Add query parameters if provided
  let finalUrl = url;
  if (params) {
    const searchParams = new URLSearchParams(params);
    finalUrl = `${url}?${searchParams.toString()}`;
  }

  try {
    const response = await fetch(finalUrl, {
      ...fetchOptions,
      headers: {
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      },
    });

    // Handle non-OK responses
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new HttpError(
        response.status,
        errorData.message || `HTTP Error ${response.status}`,
        errorData
      );
    }

    // Parse JSON response
    return await response.json();
  } catch (error) {
    if (error instanceof HttpError) {
      throw error;
    }
    throw new HttpError(500, 'Network error occurred');
  }
}

/**
 * Convenience method for GET requests
 */
export async function httpGet<T = any>(
  url: string,
  options?: Omit<HttpOptions, 'method' | 'body'>
): Promise<T> {
  return http<T>(url, { ...options, method: 'GET' });
}

/**
 * Convenience method for POST requests
 */
export async function httpPost<T = any>(
  url: string,
  body?: any,
  options?: Omit<HttpOptions, 'method' | 'body'>
): Promise<T> {
  return http<T>(url, {
    ...options,
    method: 'POST',
    body: JSON.stringify(body),
  });
}

/**
 * Convenience method for PUT requests
 */
export async function httpPut<T = any>(
  url: string,
  body?: any,
  options?: Omit<HttpOptions, 'method' | 'body'>
): Promise<T> {
  return http<T>(url, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(body),
  });
}

/**
 * Convenience method for DELETE requests
 */
export async function httpDelete<T = any>(
  url: string,
  options?: Omit<HttpOptions, 'method' | 'body'>
): Promise<T> {
  return http<T>(url, { ...options, method: 'DELETE' });
}
