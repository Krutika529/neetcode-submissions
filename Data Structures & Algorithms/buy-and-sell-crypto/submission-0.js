class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPriceSeenSoFar = prices[0];
        let maxPrice = 0;
        for(let i=0; i< prices.length; i++) {
          minPriceSeenSoFar = Math.min(prices[i], minPriceSeenSoFar);
          maxPrice = Math.max(maxPrice, prices[i] - minPriceSeenSoFar)
        }
    
    
    return maxPrice;
}
}