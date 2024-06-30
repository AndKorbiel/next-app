export async function getData() {
  try {
    const res = await fetch('https://dummyjson.com/recipes');
    return res.json();
  } catch (e) {
    console.log(e);
    throw new Error('Failed to fetch data');
  }
}
