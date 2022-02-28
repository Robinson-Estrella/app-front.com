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
          return "13/02/2022";
        },
      },
      
      {data: 'codigo'},
      {data: 'nombre'}
    ]
  });
});