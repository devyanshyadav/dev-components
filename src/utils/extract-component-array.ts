const ExtractComponent =(obj:any[])=>{
    const components = obj.map((item:any)=>{
        return item.component
    })

    return components

}
export default ExtractComponent