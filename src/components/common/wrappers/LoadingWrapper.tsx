"use client";

import { JSX, ReactNode } from 'react';

export interface LoadingWrapperProps {
  isLoading: boolean;
  children: ReactNode;
  loadingComponent: JSX.Element;
}

const LoadingWrapper = (props: LoadingWrapperProps) => {
  const { isLoading = false, children, loadingComponent } = props;

  if (isLoading) {
    if (loadingComponent) {
      return <>{loadingComponent}</>
    }
  }

  return children;
};

export default LoadingWrapper