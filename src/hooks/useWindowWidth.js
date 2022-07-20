import React from 'react';

const windowWidth = () => { return window.innerWidth };

function useWindowWidth() {
  const [size, setSize] = React.useState(windowWidth());

  React.useEffect(() => {
    let timeOut;

    function handleResize() {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => { setSize(windowWidth()) }, 0);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  return size;
}

export default useWindowWidth;
