//hola mi vida mia te amo mi cielo 
class Contador {
    constructor(contador,incrementar,decrementar) {
this.contador=contador
this.incrementar=incrementar
this.decrementar=decrementar
  }
    mostrarincrementar(total){
       total= this.contador * this.incrementar
        console.log("el valor a incrementar es "+ this.incrementar +"al valor del contador es"+this.contador+"el total es "+total)
  

    }
    mostrardecrementar(total){
      total=this.contador -this.decrementar
      console.log("el valor a decrementar es "+ this.decrementar+"al valor del contador"+this.contador+"el total es "+total)

       
    }
}

a=new Contador(20,2,4)
a.mostrarincrementar()
a.mostrardecrementar()
