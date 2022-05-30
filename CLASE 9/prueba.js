function saldoTotal(){
   let cajaAhorro = document.getElementById("cajaAhorro").value;
   let cuentaCorriente = document.getElementById("cuentaCorriente").value;
   let cuentaSueldo = document.getElementById("cuentaSueldo").value;
   var sum = Number(cajaAhorro)+Number(cuentaCorriente)+Number(cuentaSueldo);
   let valor = document.getElementById("saldo");
   valor.innerText = sum;
}
