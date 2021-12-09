exports.handler  = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify([
            {
                picture: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                name:"Maria Cutuș",
                description: "Psihopedagogie specială, Terapie ABA, Logopedie"
           
        },
            {
                picture: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                name:"Traian Surcel",
                description: "Asistență socială, Terapie ABA"
           
        },
            {
                picture: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                name:"Andrei Gapșa",
                description: "Psihologie, Terapie ABA"
           
        },
            {
                picture: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                name:"Adriana Trucnel",
                description: "Psihologie clinică, Terapie ABA"
           
        },
            {
                picture: 'https://images.pexels.com/photos/1310463/pexels-photo-1310463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                name:"Roxana Bălălău",
                description: "Psihologie, Terapie ABA"
           
        },
            {
                picture: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                name:"Emilia Radu",
                description: "Psihologie, Terapie ABA"
           
        },
            {
                picture: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                name:"Emilian Radu",
                description: "Psihologie, Terapie ABA"
           
        }
    ])

    }
}