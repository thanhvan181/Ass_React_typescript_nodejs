import instance from './instance';

export const create = (category: any) => {
    const url = `/category`;
    console.log("dang o trong api cate");
    return instance.post(url, category)
}