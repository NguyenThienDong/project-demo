import './styles/index.less';
import './mock';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import { history, HistoryRouter } from './routes/history';
import store from './stores';
import { GlobalStateProvider } from './utils/useGlobalState';

const queryClient = new QueryClient({});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <GlobalStateProvider>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </GlobalStateProvider>
    </Provider>
    ,
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,

  document.getElementById('root'),
);
