export const getUrlStrWithParams = (
  baseUrl: string,
  params: {
    [key: string]: string | number;
  },
) => {
  const castedParams = Object.entries(params).map(([key, val]) => [
    key,
    val.toString(),
  ]);

  if (!castedParams.length) {
    return baseUrl;
  }

  const searchParams = new URLSearchParams(castedParams).toString();
  return `${baseUrl}?${searchParams}`;
};
