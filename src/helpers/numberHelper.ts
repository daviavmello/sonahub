export const numberFormatter = (num: number) =>
  new Intl.NumberFormat().format(num);

export const getdate = (commitDate: string) => {
  const date = new Date(commitDate);
  return date.toLocaleDateString("en-US");
};
