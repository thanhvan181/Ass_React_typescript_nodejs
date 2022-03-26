import instance from './instance';

export const create = (category: any) => {
    const url = `/category`;
    
    return instance.post(url, category)
}
export const list = () => {
    const url = `/category`;
   
    return instance.get(url)
}
export const remove = (id:any) => {
    const url = `/category/${id}`;
   
    return instance.delete(url)
}