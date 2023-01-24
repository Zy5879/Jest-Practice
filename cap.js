function capitalize(value) {
  let str = value[0].toUpperCase() + value.slice(1).toLowerCase();
  return str;
}

export default capitalize;
