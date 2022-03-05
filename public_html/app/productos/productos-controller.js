$(document).ready(function() {
  $('#listProductos').DataTable({
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
          return row.created_at;
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