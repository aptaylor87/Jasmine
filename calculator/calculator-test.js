describe('Monthly rate calculation', function() {
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({ amount: 10000, years: 10, rate: 4.5})).toEqual('103.64');
    expect(calculateMonthlyPayment({ amount: 0, years: 10, rate: 4.5})).toEqual('0.00');
    expect(calculateMonthlyPayment({ amount: 30000, years: 20, rate: 2.5})).toEqual('158.97');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment({ amount: 10003, years: 23, rate: 2.5})).toEqual('47.69');
  });

  it('should handle really high interest rates', function() {
    expect(calculateMonthlyPayment({ amount: 10000, years: 20, rate: 99})).toEqual('825.00');
  })
})


/// etc
