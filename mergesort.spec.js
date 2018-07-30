


describe("Merge function", function() {
  
  const testArray1 = [7,6,5,4,3,2,1]
  const testArray2 = [8,7,5,4,3,2,1,6]

  it("split() to return split array", function() {
    expect(split(testArray1)).toEqual([[7,6,5],[4,3,2,1]])
    expect(split(testArray2)).toEqual([[8,7,5,4],[3,2,1,6]])
  });




});
 

