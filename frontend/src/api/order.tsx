import instance from './instance';

// export const listorder = () => {
//     const url = `/orders`;
//     return instance.get(url)
// }
export const create = ( order: any) => {
    const url = `/order`;
    
    return instance.post(url, order)
}
// export const readCompanyincity = (id: any) => {
//     const url = `/company/${id}`;
//     return instance.get(url)
// }
// export const readoneCompany = (id: any) => {
//     const url = `/companyedit/${id}`;
//     return instance.get(url)
// }

// export const removecompanycity = (id: any) => {
//     const url = `/company/${id}`;
//     return instance.delete(url)
// }
// export const updatecompanycity = (id: any, company: any) => {
//     const url = `/company/${id}`;
//     return instance.put(url, company)
// }


    
   