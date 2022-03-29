import Company from "../models/company";
import slugify from "slugify"


export const create = async (req, res) => {
    try {
        req.body.slug = slugify(req.body.name,
            {
                replacement: '-',  // replace spaces with replacement character, defaults to `-`
                remove: undefined, // remove characters that match regex, defaults to `undefined`
                lower: false,      // convert to lower case, defaults to `false`
                strict: false,     // strip special characters except replacement, defaults to `false`
                locale: 'vi',       // language code of the locale to use
                trim: true         // trim leading and trailing replacement chars, defaults to `true`
              }
            )
        
        const companies = await new Company(req.body).save();
       
        res.json(companies)
        
    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })
       
    }
    

}

export const listCompany = async (req, res) => {
    try {
        const companies = await  Company.find().exec();
        res.json(companies)
        
    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })
       
    }
    

}
export const readCompanyinCity = async (req, res) => {
    const filter = {'city_id': req.params.id}
    try {
        const listCompanyinCitys = await Company.find(filter).exec();
        res.json(listCompanyinCitys)
        
    } catch (error) {

        console.log("error", error);
        res.status(400).json({
            message: "khong them dc "
        })
       
    }
}