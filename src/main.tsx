import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App.tsx';
import './index.css';
// import { worker } from './msw/browers.ts';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

// API 연동을 위해 임시 주석 처리
// if (process.env.NODE_ENV === 'development') {
//   // 개발 모드에서만 worker.start() 호출
//   worker.start();
// }

// const ErrorFallback = ({ error }: { error: Error }) => (
//   <div>에러가 발생했습니다: {error.message}</div>
// );

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
);
