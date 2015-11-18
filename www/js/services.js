/**
 * Created by alejandro on 17/11/15.
 */

angular.module("starter.services", ["ngResource"])

    .factory('Servicio', function ($resource) {

        var factory = {
            iniciar: $resource("http://localhost:8080/prueba/loginMovil/login", {}, {
                sesion: {
                    method: "POST",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        'Content-Type': 'application/json'
                    },
                    params:{p1:"@p1", p2:"@p2", p3:"@p3", p4:"@p4"}
                }
            })

        }
        return factory
    })
;
