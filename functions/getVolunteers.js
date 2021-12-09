exports.handler  = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify([
            {
                picture: 'https://images.pexels.com/photos/8052297/pexels-photo-8052297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                name:"Marian Cutușu",
                description: "Voluntar medicină"
           
        },
            {
                picture: 'https://images.pexels.com/photos/5673508/pexels-photo-5673508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                name:"Anca Călina",
                description: "Voluntar medicină"
           
        },
            {
                picture: 'https://images.pexels.com/photos/5239710/pexels-photo-5239710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                name:"Ioana Carbarau",
                description: "Voluntar psihologie"
           
        },
    ])

    }
}