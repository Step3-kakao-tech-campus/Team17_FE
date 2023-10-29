import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App.tsx';
import { ErrorBoundary } from 'react-error-boundary';
import './index.css';
import { worker } from './msw/browers.ts';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});
worker.start();

const ErrorFallback = ({ error }: { error: Error }) => (
  <div>에러가 발생했습니다: {error.message}</div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // 에러가 발생했을 때 리셋 로직을 추가
        }}
      >
        <App />
      </ErrorBoundary>
    </QueryClientProvider>
  </BrowserRouter>,
);
