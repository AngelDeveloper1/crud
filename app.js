const app = new Vue({
    el: '#app',
    data: {
        titulo:'Rutina de Entrenamiento',
        add:'Agregar',
        tareas:[],
        nuevaTarea: ''
    },
    methods:{
        agregarTarea: function(){
            console.log('cliack',this.nuevaTarea);
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
                
            });
            console.log(this.tareas);
            this.nuevaTarea='';
            localStorage.setItem('gym-vue',JSON.stringify(this.tareas));
            Toast.fire({
                type: 'success',
                title: 'Tarea agregada'
              })
        },
        editarTarea: function(index){
            Swal.fire(
                'Buen Trabajo!',
                'Una meta mas cumplida!',
                'success'
              )
            this.tareas[index].estado = true;
            localStorage.setItem('gym-vue',JSON.stringify(this.tareas));
        },
        eliminar: function(index){
            Swal.fire({
                title: 'Estas Seguro?',
                text: "Ya no puedes revocar esta acción!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí,borrar!'
              }).then((result) => {
                if (result.value) {
                  Swal.fire(
                    'Borrado!',
                    'Metá borrada',
                    'success'
                  )
                  this.tareas.splice(index, 1);
                  localStorage.setItem('gym-vue',JSON.stringify(this.tareas));
                }
            })
        }
    },
    created: function(){
        let datosDB = JSON.parse (localStorage.getItem('gym-vue'));
        if(datosDB === null){
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }
    }
});
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });