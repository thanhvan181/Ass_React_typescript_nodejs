import { combineReducers } from 'redux'
import CategorySlide from '../features/Website/Category/CategorySlide';
import productSlice from '../features/Website/ProductClient/ProductClientSlide';
import AuthSlide from '../features/Website/Auth/AuthSlide';




const rootReducer = combineReducers({

    product: productSlice,
    category: CategorySlide,
    user: AuthSlide,
});
export default rootReducer



