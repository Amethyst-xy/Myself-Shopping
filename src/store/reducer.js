import {combineReducers} from 'redux-immutable';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as loginReducer} from '../pages/login/store';
import {reducer as searchReducer} from '../pages/SearchResult/store';
import {reducer as cartReducer} from '../pages/shoppingCart/store';
import {reducer as mySpaceReducer} from '../pages/mySpace/store';
import {reducer as writeReducer} from '../pages/write/store';
import {reducer as detailReducer} from '../pages/detail/store';

const reducer=combineReducers({
    home:homeReducer,
    login:loginReducer,
    search:searchReducer,
    cart:cartReducer,
    mySpace:mySpaceReducer,
    write:writeReducer,
    detail:detailReducer
});

export default reducer;