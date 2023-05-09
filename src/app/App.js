import { Inventory } from "../features/inventory/Inventory";
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter";
import { Cart } from "../features/cart/Cart";
import { SearchTerm } from "../features/searchTerm/SearchTerm";

const getFilteredItems = (items, searchTerm) => {
  return items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

const App = (props) => {
  const { state, dispatch } = props;

  return (
    <div>
      <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} />
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={getFilteredItems(state.inventory, state.searchTerm)}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
};

export default App;
