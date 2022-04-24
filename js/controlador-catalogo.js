function pintandoCategoriasLugo () {
    //console.log('Works');
    $.ajax({
        url:'../backend/api/categorias.php',
        method:'get',
        data:'',
        dataType:'json',
        success:function(categorias){
            document.getElementById('contenedor-categorias').innerHTML = ``;
            for(let i=0;i<categorias.length;i++) {
                document.getElementById('contenedor-categorias').innerHTML += `
                <div class="col-lg-3 col-md-4 col-sm-6 mt-2">
                    <div class="card-item card" style="background: ${categorias[i].color};" onclick="infoCategorias(${categorias[i].idCategoria})">
                        <div class="row">
                            <div class="col mx-auto text-center m-3">
                                <i class="${categorias[i].icono} cat-icon"></i>
                            </div>
                            <div class="col">

                            </div>
                        </div>
                        <div class="row m-3 mt-4">
                            <section class="col">
                                <h3 class="text-white font-weight-bolder">${categorias[i].nombreCategoria}</h3>
                                <p class="text-white" style="font-size: 13px;">
                                    ${categorias[i].empresas.length} Comercios
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
                `;
            }
           
            console.log(categorias);
        },
        error:function (error) {
            console.error(error);
            
        }

    });

    
}
pintandoCategoriasLugo();