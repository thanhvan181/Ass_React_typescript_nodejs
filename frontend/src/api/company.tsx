import instance from './instance';

export const listCompany = () => {
    const url = `/company`;
    return instance.get(url)
}
export const createCompany = (company: any) => {
    const url = `/company`;
    
    return instance.post(url, company)
}
export const readCompanyincity = (id: any) => {
    const url = `/company/${id}`;
    return instance.get(url)
}
    
   