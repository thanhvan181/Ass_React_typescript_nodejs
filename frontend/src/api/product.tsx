import instance from './instance';

export const listproduct = () => {
    const url = `/products`;
    return instance.get(url)
}
export const remove = (id:any) => {
    const url = `/product/${id}`;
    return instance.delete(url)
}
export const read = (id:any) => {
    const url = `/product/${id}`;
    return instance.get(url)
}
export const create = (product:any) => {
    const url = `/product`;
    return instance.post(url, product)
}
export const getproducts = (id:any) => {
    const url = `/products/${id}`;
    return instance.get(url)
}
export const getproductsCate = (id:any) => {
    const url = `/products/category/${id}`;
    return instance.get(url)
}
export const update = (id:string, product:any) => {
    console.log("UAPI ID: ", id, product)
    const url = `/product/${id}`;
    return  instance.put(url ,product )

} 