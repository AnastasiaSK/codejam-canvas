const matrix4x4 = [
  ["00BCD4", "FFEB3B", "FFEB3B", "00BCD4"],
  ["FFEB3B", "FFC107", "FFC107", "FFEB3B"],
  ["FFEB3B", "FFC107", "FFC107", "FFEB3B"],
  ["00BCD4", "FFEB3B", "FFEB3B", "00BCD4"]
];

let canvas = document.getElementById("matrix");
let ctx = canvas.getContext("2d");

function draw(matrix) {
  let size = 512 / matrix.length;
  ctx.clearRect(0, 0, 512, 512);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      ctx.fillStyle = "#" + matrix[i][j];
      ctx.fillRect(i * size, j * size, size, size);
    }
  }
}
draw(matrix4x4);
