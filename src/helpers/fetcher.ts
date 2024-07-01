type TNextOptions = {
  revalidate?: number;
  tags?: string[];
};
type TOptions = {
  method?: string;
  body?: any;
  headers?: Record<string, string>;
  cache?: RequestCache;
  retry?: boolean;
  retryCount?: number;
  retryDelay?: number;
  retryMaxDelay?: number;
  retryFactor?: number;
  next?: TNextOptions;
};

const fetcher = async (url: string, options: TOptions = {}, retry = true): Promise<any> => {
  // Initialize headers with default Content-Type
  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  };

  defaultHeaders["Authorization"] = `mdmasumraihan1@gmail.com`;

  // Merge default headers with options.headers
  const headers = {
    ...defaultHeaders,
    ...options.headers,
  };

  try {
    // Make the fetch request with the provided options
    const response = await fetch(url, {
      cache: "force-cache",
      ...options,
      headers,
      body: options.body,
    });

    return response?.json();
  } catch (error: any) {
    console.log(error);
  }
};

export default fetcher;
