const input = require('prompt-sync')();
const color = require('chalk');

function tambah(angka1, angka2) {
  return angka1 + angka2;
}

function kurang(angka1, angka2) {
  return angka1 - angka2;
}

function kali(angka1, angka2) {
  return angka1 * angka2;
}

function bagi(angka1, angka2) {
  return (angka1 / angka2).toFixed(2);
}

console.clear();
var op = ['+', '-', '*', '/', '%'];
while (true) {
  console.log(color.bold(`====================== ${color.blue("Kalkulator")} =====================\n`))
  var angka1 = Number(input(`        Masukkan ${color.blue.bold("angka 1")}  : `));
  if (isNaN(angka1)) {
    console.log(color.bold(`\n======================== ${color.red("Error")} ========================\n`))
    console.log(color.red.bold("        Input tidak valid!"));
    var ulang = input("        Ulang (y/n) ? ");
    if (ulang == 'y') {
      console.clear();
      continue;
    } else {
      break;
    }
  }
  var operator = input(`        Masukkan ${color.bold.blue("operator")} : `);
  if (op.indexOf(operator) === -1) {
    console.log(color.bold(`\n======================== ${color.red("Error")} ========================\n`))
    console.log(color.red.bold("        Input tidak valid!"));
    ulang = input("        Ulang (y/n) ? ");
    if (ulang == 'y') {
      console.clear();
      continue;
    } else {
      break;
    }
  }
  var angka2 = Number(input(`        Masukkan ${color.blue.bold("angka 2")}  : `));
  if (isNaN(angka2)) {
    console.log(color.bold(`\n======================== ${color.red("Error")} ========================\n`))
    console.log(color.red.bold("        Input tidak valid!"));
    ulang = input("        Ulang (y/n) ? ");
    if (ulang == 'y') {
      console.clear();
      continue;
    } else {
      console.log(color.bold("\n======================================================="))
      break;
    }

  }

  switch (operator) {
    case '+':
      var hasil = tambah(angka1, angka2);
      break;
    case '-':
      hasil = kurang(angka1, angka2);
      break;
    case '*':
      hasil = kali(angka1, angka2);
      break;
    case '/':
      hasil = bagi(angka1, angka2);
      break;
  }

  console.log(color.bold(`\n========================= ${color.blue("Hasil")} =======================\n`))
  console.log(color.green.bold(`        ${angka1} ${operator} ${angka2} = ${hasil}`));
  console.log(color.bold("\n=======================================================\n"))

  ulang = input("        Ulang (y/n) ? ");
  if (ulang == 'y') {
    console.clear();
    continue;
  } else {
    console.log(color.bold("\n======================================================="))
    break;
  }
}
