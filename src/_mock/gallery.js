export const photosList = new Array(31)
  .fill("")
  .map((item, index) =>
    require(`../assets/images/gallery/gallery${index}.jpeg`)
  );
