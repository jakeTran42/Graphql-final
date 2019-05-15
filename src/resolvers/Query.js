async function fetch() {

    //getting about info
    const about = (parent, args) => {
        return {
            name: args.name,
            course: args.course,
            description: args.description
        }
    }

    //Getting all porfolios
    const porfolios = (ports) => {
        return ports
    }

    //Return one portfolio
    const portfolio = (parent , {id, ports}) => {
        const data = ports.filter((file) => {
    
            if (file.id == id) {
                return file
            }
        })
        return data[0]
    }
}

module.export = {
    fetch
}