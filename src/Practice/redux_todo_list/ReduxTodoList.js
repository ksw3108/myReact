import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

import { legacy_createStore as createStore } from 'redux';
import rootReducer from './module';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools());

const ReduxTodoList = () => {
  return (
    <Provider store={store}>
      <div className="main">
        <CounterContainer />
        <hr />
        <TodosContainer />
      </div>
    </Provider>
  );
};

export default ReduxTodoList;
