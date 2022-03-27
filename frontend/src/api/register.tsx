import instance from './instance';

export const list = () => {
    const url = `/register`;
    return instance.get(url)
}
export const create = (data: any) => {
    const url = `/register`;
    return instance.post(url, data);
}
// export const remove = (id:any) => {
//     const url = `/register/${id}`;
//     return instance.delete(url)
// }