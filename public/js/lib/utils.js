// https://stackoverflow.com/a/6274398
export function shuffleArray(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
export function paginateArray(collection, page = 1, numItems = 10) {
  if (!Array.isArray(collection)) {
    throw `collection accept array. but got ${typeof collection}`;
  }
  const currentPage = parseInt(page);
  const perPage = parseInt(numItems);
  const offset = (page - 1) * perPage;
  const paginatedItems = collection.slice(offset, offset + perPage);

  return {
    currentPage,
    perPage,
    total: collection.length,
    totalPages: Math.ceil(collection.length / perPage),
    data: paginatedItems,
  };
};
export const letters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,19".split(",");