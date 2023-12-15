/*este é o código javascript que nos permite filtrar imagens na caixa de pesquisa */

let searchBox = document.querySelectorAll( '#searchBox') ;
let images = document.querySelectorAll('.container .container-image .image');


searchBox.oniput = () => {
    images.foreEach( hide => hide.style.display = 'none');
     let value = searchBox.value;
     
     images .forEach( filter =>  {

let title = filter.getAttribute( 'data-title');
 

if (value == title){

    filter.style.display ="block";

}

if(searchBox.value ==''){

    filter.style.display = "block";
}


     })

}