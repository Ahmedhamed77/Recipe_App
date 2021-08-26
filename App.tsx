import React from 'react';
import {Provider} from 'react-redux';

import {Route} from './App/navigation/Route';
import {store} from './App/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};

export default App;
