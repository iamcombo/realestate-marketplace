'use client';

import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react';
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei';

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
