let dia = Number(prompt("desde que dia quiere averiguar?"));
while (dia < 1 || dia > 31) {
  dia = Number(prompt("desde que dia quiere averiguar?"));
}
let mes: number = Number(prompt("desde que mes quiere averiguar?"));
while (mes < 1 || mes > 12) {
  mes = Number(prompt("desde que mes quiere averiguar?"));
}
let año: number = Number(prompt("de que año quiere averiguar?"));

function cantidad(mes: number) {
  let cantDias: number = 0;
  switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      cantDias = 31;
      break;
    // me suma los dos casos 28 y 29 me parece
    case 2:
      if (año % 4 === 0 && año % 100 !== 0) {
        cantDias = 29;
      } else {
        cantDias = 28;
      }
      break;

    case 11:
    case 4:
    case 6:
    case 9:
      cantDias = 30;
      break;
    default:
      console.log("cantDias");
  }
  return cantDias;
}

function sumar() {
  let arreglo: number[] = new Array(12);
  let cantidadTotal: number = 0;
  let meses: number = 0;
  for (meses = 0; meses <= 12; meses++) {
    arreglo[meses] = cantidad(mes);
    cantidadTotal = cantidadTotal + arreglo[meses];
    mes++;
  }
  console.log(arreglo);
  let diasTotal: number = cantidadTotal - dia;
  console.log("faltan ", diasTotal, "dias para que termine el año");
}

sumar();
