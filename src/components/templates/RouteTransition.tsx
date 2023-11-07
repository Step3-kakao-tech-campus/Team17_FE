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
  if (
    pathname === '/' ||
    pathname === '/signin' ||
    pathname === '/signup' ||
    pathname === '/profile'
  ) {
    return <>{children}</>;
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
