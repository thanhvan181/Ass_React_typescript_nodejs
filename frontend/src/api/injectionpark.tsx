import instance from './instance';

export const listInjection = () => {
    const url = `/injectionpark`;
    return instance.get(url)
}