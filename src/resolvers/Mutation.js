
async function post(parent, {port, idCount}) {
    const port = {
        id: idCount++,
        title: args.title,
        description: args.description,
        url: args.url,
    }
    ports.push(port)
    return await port
}

async function edit(parents, args) {
    const data = ports.filter((file) => {
        if (args.id == file.id) {
            if (args.title) {
                file.title = args.title
            }
            
            if (args.description) {
                file.description = args.description
            }
    
            if (args.url) {
                file.url = args.url
            }
        }
    })
    return await data[0]
}

async function delete(parent, args) {
    var index  = args.ports.map((file, index) => {
        if (file.id == id) {
            return index
        }
    })
    ports = args.ports.splice(index-1, 1)
    return await ports
}

module.exports = {
    post,
    edit,
    delete
}