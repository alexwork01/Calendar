import React, { memo, useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';

const TopLoadingBar = memo(props => {
  const { theme, isLoading } = props;

  const loadingBarRef = useRef();

  useEffect(() => {
    if (isLoading) {
      loadingBarRef.current.continuousStart();
    } else {
      loadingBarRef.current.complete();
    }
  }, [isLoading]);

  return (
    <LoadingBar height={3} color={theme.backgroundRed} ref={loadingBarRef} />
  );
});

export default TopLoadingBar;
