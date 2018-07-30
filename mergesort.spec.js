


describe("Merge function", function() {

  const testArray1 = [7,6,5,4,3,2,1]
  const testArray2 = [8,7,5,4,3,2,1,6]

  it("split() to return split array", function() {
    expect(split(testArray1)).toEqual([[7,6,5],[4,3,2,1]])
    expect(split(testArray2)).toEqual([[8,7,5,4],[3,2,1,6]])
  });

  it("merges two arrays", function(){
    expect(merge([3,4,5,8,9,10],[1,2,6,7])).toEqual([1,2,3,4,5,6,7,8,9,10])
  });




});




