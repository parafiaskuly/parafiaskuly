import React from 'react';
import styled from '@emotion/styled';

type WrapperProps = {
  readonly className?: string;
  readonly children: React.ReactNode;
};

export function Wrapper({ children, className }: WrapperProps) {
  return <StyledWrapper className={className}>{children}</StyledWrapper>;
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
