import { combineReducers } from 'redux'
import InjectionPark from '../features/Admin/InjectionPark/InjectionPark';
import AuthSlide from '../features/Website/Auth/AuthSlide';
import CartSlide from '../features/Website/Cart/CartSlide';
import CategorySlide from '../features/Website/Category/CategorySlide';
import productSlice from '../features/Website/ProductClient/ProductClientSlide';
import Subcategory from '../features/Website/Subcategory/Subcategory';





const rootReducer = combineReducers({

    product: productSlice,
    category: CategorySlide,
    subcategory: Subcategory,
    cart: CartSlide,
    user: AuthSlide,
    injection: InjectionPark,
});
export default rootReducer



