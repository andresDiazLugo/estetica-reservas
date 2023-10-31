// Import and register all your controllers from the importmap under controllers/*
import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)
// $(document).ready(function() {
//     console.log("Hola mi nombre es andres");
// });

function addSection(context)  {
    const idOfElement = $(context).attr("id");
    console.log("este es el this",context)
    switch(idOfElement){
        case "SERVICIO":
            $('.container_main').html('ESTOY EN SERVICIO')
            break
        case "CITA":
            $('.container_main').html('ESTOY EN CITA')
            break
        case "RESUMEN":
            $('.container_main').html('ESTOY EN RESUMEN')
            break
        default:
            $('.container_main').html('NO ESTOY EN NINGUNA OPCION')
    }
}
$( document ).on( 'ready', function (e) {
    $(".container_ul_options").children().each(function(){addSection(this)});
    $(".container_ul_options").on("click", "li", function() {
        console.log("me ejecuto");
        $("li").removeClass("active");
        $(this).addClass("active");
        addSection(this);
    });
})