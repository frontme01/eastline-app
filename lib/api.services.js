export const ApiService = {
  async getData(url, tagName) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}${url}`, {
      next: { tags: [tagName] },
    });
    const { data } = await response.json();
    return data;
  },
};
