export default (route) => route
  .filter((item, index) => index < route.length - 1)
  .reduce((acc, item) => acc + item.price, 0)