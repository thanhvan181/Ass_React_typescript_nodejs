import instance from './instance';
// import queryString from 'query-string';
export const listInjection = () => {
    const url = `/injectionpark`;
    return instance.get(url)
}

export const getInjectionPacks = (params: any) => {
    // let paramsString = queryString.stringify(params, {
    //     skipEmptyString: true
    // })
    const paramString = new URLSearchParams(params).toString();
    const url = `/injectionpacks?${paramString}`;
    console.log("URL: ", url)
    return instance.get(url)
}