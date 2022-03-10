var dt_productos;
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
          return "<a href='#'>Editar</a> │ <a href='#'>Eliminar</a>";
        },
      },
    ]
  });
});

function updateDatatable(){
  dt_productos.ajax.reload();
}

function loadNewProducto(){

  $('#modalContainer1').load("/views/productos/frm-new-producto.html", function(response){
    $('#mdlNuevoProducto').modal({show: true, backdrop: 'static', size: 'lg', keyboard: false});
  });
  /*$('#modal1').modal({show: true, backdrop: 'static', size: 'lg', keyboard: false});*/
  /*var url = '/views/productos/frm-new-producto.html';
  $('#modalContainer1').load(url, function(result){

    console.log("hola1");
    $('#mdCreate').modal({show: true, backdrop: 'static', size: 'lg', keyboard: 'false'});
  });*/
}