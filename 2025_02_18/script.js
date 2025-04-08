function containsFruits(fruits) {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].includes("Banana", "Orange", "Apple", "Mango")) {
      let x = true;
    } else {
      return false;
    }
  }
  return true;
}
