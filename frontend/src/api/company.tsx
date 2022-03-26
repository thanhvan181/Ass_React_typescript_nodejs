import instance from './instance';

export const list = () => {
    const url = `/company`;
    return instance.get(url)
}