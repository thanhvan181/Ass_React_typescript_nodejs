import instance from './instance';

export const create = (iduser: any, category:any, token:String) => {
    // const config = 
    
    const url = `/category/${iduser}`;
    return instance.post(url, category,{
        headers: { Authorization: `Bearer ${token}` }
    } )
}
export const list = () => {
    const url = `/category`;

    return instance.get(url)
}

export const getCategory = () => {
    const url = `/categories`;

    return instance.get(url)
}

export const remove = (id: any) => {
    const url = `/category/${id}`;

    return instance.delete(url)
}
export const updatecate = (id:any,category:any) => {
    const url = `/category/${id}`
    return  instance.put(url, category )
}
export const read = (id: any) => {
    const url = `/category/${id}`
    return instance.get(url)
}