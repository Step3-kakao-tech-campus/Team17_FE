// import { useState, useEffect } from 'react';

// import { ReactNode } from 'react';ㅉ

// type ErrorBoundaryProps = {
//   children: ReactNode;
// };

// const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
//   const [hasError, setHasError] = useState(false);

//   useEffect(() => {
//     const handleError = (error: ErrorEvent) => {
//       console.error('Error caught by error boundary:', error);
//       setHasError(true);
//     };

//     // 에러 이벤트 리스너 등록
//     window.addEventListener('error', handleError);

//     // 컴포넌트 언마운트 시 에러 이벤트 리스너 해제
//     return () => {
//       window.removeEventListener('error', handleError);
//     };
//   }, []);

//   if (hasError) {
//     window.location.reload();
//   }
//   return children;
// };

// export default ErrorBoundary;
