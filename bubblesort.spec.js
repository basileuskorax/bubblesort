describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('sorts an array', function() {
        expect( bubbleSort([4,2,6,7,3,1,8,9,5]) ).toEqual( [1,2,3,4,5,6,7,8,9] );
    })
});