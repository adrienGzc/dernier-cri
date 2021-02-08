const cleanObject = (obj: { [index: string]: any }) => {
  const newObj = obj;
  Object.keys(newObj).forEach((key) => {
    if (newObj[key] === null || newObj[key] === undefined) {
      delete newObj[key];
    }
  });
  return newObj;
};

const queryString = (params: any) => {
  if (typeof params !== 'object' || params === null) return '';
  const newParams = cleanObject(params);
  const query = Object.keys(newParams)
    .map((key) => `${key}=${newParams[key]}`)
    .join('&');

  if (query.length > 0) return `?${query}`;
  return query;
};

const parseJSON = (response: any) =>
  response.text().then((text: string) => (text ? JSON.parse(text) : {}));

export { cleanObject, queryString, parseJSON };
