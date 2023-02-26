// MERMAID 
//archivo auxiliar del sw, para pasar la logica de una funcion 
//guardar en el cache dinamico 

function actualizaCacheDinamico( dynamicCache, req, res ) {

    if ( res.ok ) {

        return caches.open ( dynamicCache ).then( cache => {

            cache.put(req, res.clone() );

            return res.clone();

        });
    } else {
        return res;
    }
}