function TimeToSell() {
  let minPrice = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    if (prices[i] > minPrice) {
      profit = Math.max(profit, prices[i] - minPrice);
    }
  }

  return profit;
}
