function calculateFlames(name1, name2) {
  let arr1 = name1.split("");
  let arr2 = name2.split("");

  // Remove common characters
  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i]);

    if (index !== -1) {
      arr1[i] = null;
      arr2[index] = null;
    }
  }

  // Remaining characters
  const remaining1 = arr1.filter((char) => char !== null);
  const remaining2 = arr2.filter((char) => char !== null);

  const count = remaining1.length + remaining2.length;

  const resultMap = {
    1: "Friends",
    2: "Love",
    3: "Affection",
    4: "Marriage",
    5: "Enemy",
    0: "Siblings",
  };

  return resultMap[count % 6];
}

export default calculateFlames;