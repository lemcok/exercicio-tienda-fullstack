
const END_POINT = `http://localhost:4000/products`;

export const getProducts = async () => {
  const res = await fetch(END_POINT + '/')
  const { data } = await res.json()
  return data
}