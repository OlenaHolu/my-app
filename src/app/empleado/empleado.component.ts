import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';

@Component({
    selector: "app-empleado",
    imports: [FormsModule],
    templateUrl: "./empleado.component.html",
    styleUrls: ['./empleado.component.css']
    
})
export class EmpleadosComponent{
    nombre="Juan";
    apellido="Diaz";
    private edad=18;
    empresa="";
    direccion="";
    nacionalidad="Española";

    habilitarCuadro=false;
    usuarioRegistrado=false;
    textoDeRegistro="No hay nadie registrado";

    getEdad(){
        return this.edad;
    }

    llamaEmpresa(value:String){

    }

    getRegistroUsuario(){
        this.usuarioRegistrado=false;
    }

    setUsuarioRegistrado(event:Event){
        //alert("El usuario se acabo de registrar");
        //this.textoDeRegistro="El usuario se acabo de registrar"
        if((<HTMLInputElement>event.target).value=="si"){
            this.textoDeRegistro="El usuario se acabo de registrar";
        }else{
            this.textoDeRegistro="No hay nadie registrado";
        }
    }

    cambiaEmpresa(event:Event){
        this.empresa=(<HTMLInputElement>event.target).value;
    }

    constructor(){ 
    }

    ngOnInit(): void {

    }


   


}

