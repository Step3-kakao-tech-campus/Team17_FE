export const comma = (value: number) => {
  if (value === undefined || value === null) {
    return 0;
  }

  if (typeof value === 'number' && isNaN(value)) {
    return 0;
  }

  if (typeof value === 'string') {
    value = parseInt(value);
  }

  return value.toLocaleString();
};
