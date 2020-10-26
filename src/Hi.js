import React, { useRef } from 'react';

export const Hi = () => {
    const renders = useRef(0);

    // the thing about .current is that we can update the value of it whenever we want and it its not cause a rerender
    console.log('Hi renders ', renders.current++);
    
    return <div>Hi component is rendered here...</div>
}