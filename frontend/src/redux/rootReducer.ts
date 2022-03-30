import { combineReducers } from 'redux'
import CategorySlide from '../features/Website/Category/CategorySlide';
import productSlice from '../features/Website/ProductClient/ProductClientSlide';




const rootReducer = combineReducers({

    product: productSlice,
    category: CategorySlide,
   
    
    
});
export default rootReducer



