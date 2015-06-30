/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix){
  this.matrix = matrix;
  console.log('thismatrix before change',this.matrix);

};

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction,layer) {
   var newMatrix = [];
    var nrOfColumns = this.matrix[0].length;
    var nrOfRows = this.matrix.length;
    var radius = Math.ceil(nrOfRows/2);
    var n = 0;

  if(!layer && layer !==0){
    if(direction === "ClockWise"){
      while (n < nrOfColumns){
        var newRow = [];
        for (var i = 0; i < nrOfRows; i++) {
          newRow.unshift(this.matrix[i][n]);
        };
        newMatrix.push(newRow);
        n++;
      }
    }
    if(direction === 'CounterClockWise'){
      while (n < nrOfColumns){
        var newRow = [];
        for (var i = nrOfRows -1; i >= 0; i--) {
          newRow.unshift(this.matrix[i][n]);
        };
        newMatrix.unshift(newRow);
        n++;
      }
    }

    this.matrix = newMatrix;
  }
  else if(layer < 1 || layer > radius){
    console.log('throwing error')
    throw new RangeError('not a valid layer');
  } else {
    var rowToRotate1 = radius - layer;
    var rowToRotate2 = (nrOfRows - 1) - (radius - layer);
    var colToRotate1 = radius - layer;
    var colToRotate2 = (nrOfColumns - 1) - (radius - layer);
    var topRotateRow = [];
    var bottomRotateRow = [];
    for (var i = colToRotate1; i <= colToRotate2; i++) {
      topRotateRow.push(this.matrix[rowToRotate1][i]);
      bottomRotateRow.push(this.matrix[rowToRotate2][i]);
    };

    var rightRotateCol = [];
    var leftRotateCol = [];
    var n1 = rowToRotate1;
    while(n1 <= rowToRotate2){
      rightRotateCol.push(this.matrix[n1][colToRotate2])
      leftRotateCol.push(this.matrix[n1][colToRotate1])
      n1++;
    }
    //replacing only the layer to change
    if(direction === "ClockWise"){
      for (var i = colToRotate1; i <= colToRotate2; i++) {
        this.matrix[rowToRotate1][i] = leftRotateCol.pop();
        this.matrix[rowToRotate2][i] = rightRotateCol.pop();
        this.matrix[i][colToRotate2] = topRotateRow.shift();
        this.matrix[i][colToRotate1] = bottomRotateRow.shift();
      };
    }
    //replacing only the layer to change
    if(direction === "CounterClockWise"){
      for (var i = colToRotate1; i <= colToRotate2; i++) {
        this.matrix[rowToRotate1][i] = rightRotateCol.shift();
        this.matrix[rowToRotate2][i] = leftRotateCol.shift();
        this.matrix[i][colToRotate1] = topRotateRow.pop();
        this.matrix[i][colToRotate2] = bottomRotateRow.pop();
      };
    }
  }
};