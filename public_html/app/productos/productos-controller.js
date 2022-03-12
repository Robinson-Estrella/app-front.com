var dt_productos;
var producto_to_delete;
$(document).ready(function() {
  dt_productos = $('#listProductos').DataTable({
    "ajax":{
      type: 'get',
      url :"http://apis-app.com/api/productos",
      dataSrc: 'data',
      cache: true
    },
    columns:[
      {
        "targets": 0,
        "render": function(data, type, row){
          //console.log(row);
          //return row.created_at;

          return moment(row.created_at).format('DD/MM/YYYY HH:mm:ss');
        },
      },
      
      {data: 'codigo'},
      {data: 'nombre'},
      {
        "targets":3,
        "render":function(data, type, row){
          if(row.categoria){
            return row.categoria.nombre;
          }
          else{
            ""
          }
          
        },
      },
      {
        "targets":4,
        "render":function(data, type, row){
          return "<button class='btn btn-warning btn-sm' onclick=\"loadEditProducto('"+row.id+"')\"><i class=' fa fa-edit'></i> Editar</button> <button class='btn btn-danger btn-sm' onclick=\"loadConfirmDelete('"+ row.id +"');\"><i class='fa fa-trash'></i> Eliminar</button>";
        },
      },
    ]
  });
});

function updateDatatable(){
  dt_productos.ajax.reload();
}

function loadConfirmDelete(id){
  producto_to_delete = id;
  $('#modalContainer1').load("/views/productos/frm-confirm-delete.html", function(response){
    $('#mdlConfirmDelete').modal({show: true, backdrop: 'static', size: 'lg', keyboard: false});
  });
}

function loadNewProducto(){

  $('#modalContainer1').load("/views/productos/frm-new-producto.html", function(response){
    $('#mdlNuevoProducto').modal({show: true, backdrop: 'static', size: 'lg', keyboard: false});
  });
}

function loadEditProducto(id){
  $('#modalContainer1').load("/views/productos/frm-edit-producto.html", function(response){
    loadDataProducto(id);
  });
}

function loadDataProducto(id){
  $.ajax({
    method: "GET",
    url: "http://apis-app.com/api/productos/"+id,
  }).done(function(response){

    $("#txtId").val(response.data.id);
    $("#txtCodigo").val(response.data.codigo);
    $("#txtNombre").val(response.data.nombre);
    $("#txtPrecio").val("");

    $('#mdlEditProducto').modal({show: true, backdrop: 'static', size: 'lg', keyboard: false});
  });
  
}