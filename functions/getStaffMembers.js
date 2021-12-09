exports.handler  = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify([
            {
                picture: 'https://images.pexels.com/photos/4491493/pexels-photo-4491493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                name:"Anca Mihai",
                description: "Asistent manager"
           
        },
            {
                picture: 'https://images.pexels.com/photos/6001557/pexels-photo-6001557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                name:"Camelia Dedu",
                description: "Marketing & PR"
           
        }
    ])

    }
}