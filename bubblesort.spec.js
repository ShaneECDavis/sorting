describe("Bubble Sort", function() {

  const testArray  = [8,7,6,5,4,3,2,1]

  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
   it("tests arrray", function() {
     expect(bubbleSort(testArray)).toEqual([1,2,3,4,5,6,7,8]);
   });
});
