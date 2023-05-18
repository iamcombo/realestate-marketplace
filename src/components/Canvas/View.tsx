'use client';

import { OrbitControls, View as ViewImpl } from '@react-three/drei';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const View = forwardRef(({ children, orbit, ref, ...props }: any) => {
  const localRef: any = useRef(null);
  useImperativeHandle(ref, () => localRef.current);

  return (
    <>
      <div ref={localRef} {...props} />
      <ViewImpl track={localRef}>
        {children}
        {orbit && <OrbitControls />}
      </ViewImpl>
    </>
  );
});

View.displayName = 'View';

export { View };
