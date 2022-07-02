class Libro {
constructor ( titulo,  autor,   prestados, devolucion) {                                    
    this.titulo= titulo;
    this.autor= autor;
    this.prestados= prestados;
    this.devolucion=devolucion
    }
   mostrarprestados(){
        


            console.log("numero de libros prestados"+this.prestados)
       

    }
    mostrardevolucion(total){
        
           total=this.Prestados-this.devolucion
           console.log("numero de libros devueltos"+this.devolucion)
               
        
    }
  get Autor() {
        return autor;
    }

set Autor( autor1) {
        this.autor = autor1;
    }

     get _Devolucion() {
        return devolucion;
    }

    set _Devolucion(devolucion1) {
        this.devolucion = devolucion1;
    }

     get Prestados() {
        return prestados;
    }

     set Prestados( prestados1) {
        this.prestados = prestados1;
    }

     get Titulo() {
        return titulo;
    }

    set Titulo( titulo1) {
        this.titulo = titulo1;
    }

    }

    let libro1 = new Libro ("strange","alex mirez",5,0);
    libro1.mostrarprestados()
    let libro2 = new Libro ("strange", "alex mirez",0,2 )
    libro2.mostrardevolucion()

