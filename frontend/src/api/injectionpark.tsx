import instance from './instance';
// import queryString from 'query-string';


export const getInjectionPacks = (params: any) => {
  
    const paramString = new URLSearchParams(params).toString();
    const url = `/injectionpacks?${paramString}`;
    console.log("URL: ", url)
    return instance.get(url)
}
export const listInjection = () => {
    const url = `/injectionparks`;
    return instance.get(url)
}