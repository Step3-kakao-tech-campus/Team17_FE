import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Transition.css';
import React from 'react';
type RouteTransitionProps = {
  location: any;
  children: React.ReactNode;
};

const RouteTransition = ({ location, children }: RouteTransitionProps) => {
  const pathname = location.pathname;
  // const state = location.state;
  const parts = pathname.split('/');
  const firstNotification = parts[1];
  if (
    pathname === '/' ||
    pathname === '/signin' ||
    pathname === '/signup' ||
    pathname === '/profile' ||
    pathname === '/apply' ||
    pathname === '/applyinquiry'
  ) {
    return <>{children}</>;
  } else if (firstNotification === 'notification') {
    return (
      <TransitionGroup
        className={'transition-wrapper'}
        childFactory={(child) => {
          return React.cloneElement(child, {
            classNames: location.state?.direction || 'slide-up',
          });
        }}
      >
        <CSSTransition exact key={pathname} timeout={10000}>
          {children}
        </CSSTransition>
      </TransitionGroup>
    );
  }

  return (
    <TransitionGroup
      className={'transition-wrapper'}
      childFactory={(child) => {
        return React.cloneElement(child, {
          classNames: location.state?.direction || 'navigate-push',
        });
      }}
    >
      <CSSTransition exact key={pathname} timeout={300}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RouteTransition;
