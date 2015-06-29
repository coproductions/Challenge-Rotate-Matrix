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

};

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {
  var newMatrix = [];
    var nrOfColumns = this.matrix[0].length;
    var nrOfRows = this.matrix.length;
    var n = 0;
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
        newRow.push(this.matrix[i][n]);
      };
      newMatrix.push(newRow);
      n++;
    }
  }
  // do work here
  this.matrix = newMatrix;
  // must be a valid Direction, see Direction.js


};