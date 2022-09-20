(()=>{
  let productPrice = 100;
  productPrice =12;
  console.log('productPrice',productPrice);

  let customerAge: number =28;
  customerAge = customerAge + 1;
  console.log('customerAge',customerAge);

  let productInStock: number;
 // console.log('productInStock', productInStock); CUESTIONA EL HECHO DE IMPRIMIR UNA VARIABLE INDEFINIDA O SIN INICIALIZAR
 // if(productInStock >10){
  // console.log('is greater'); LA VARIABLE VIENE SIN ASIGNACION ,ALERTARÁ EL ERRROR
  //}
  let discount = parseInt('123'); //TRANSFORMA EL STRING A TIPO NUMBER
  console.log('discount',discount);
  let result :number;
  result = discount +5; //SE PUEDE OPERAR ("123"+5=128)
  console.log(result);
  result
  //ESCUCHA ACTIVA
  //NODE DIST/NOMBREFICHERO.JS EN TERMINAL
})();

