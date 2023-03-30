const jsonToNestedValue = (token) => {
  // is non-object value
  if (!token || typeof token !== "object") return token;
  // is design token
  if ("value" in token) return token.value;
  // is obj
  const nextObj = {};
  for (const [prop, value] of Object.entries(token)) {
    // @ts-expect-error: can't predict type
    nextObj[prop] = jsonToNestedValue(value);
  }
  return nextObj;
};

module.exports = {
  jsonToNestedValue,
};
