export const required = (value: string) => {
  if (value) return undefined;

  return 'Field is required';
};
export const maxLengthCreator = (maxValue: number) => (value: string) => {
  if (value && value.length > maxValue) return `Max length ${maxValue}`;

  return undefined;
};
