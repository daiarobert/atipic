exports.handler  = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify([
            {
                picture: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                name:"Ana Uzunia",
                description: "Coordonare ABA, Psihologie clinică, Psihoterapie cognitiv-comportamentală"
           
        },
            {
                picture: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                name:"Zarnescu Sophia",
                description: "Coordonare ABA, Psihologie clinică, Consiliere psihologică și comunicare"
           
        },
            {
                picture: 'https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                name:"Roxana Uzunia",
                description: "Coordonare ABA, Psihologie clinică, Psihologie educațională, Consiliere psihologică, Logopedie"
           
        }
    ])

    }
}