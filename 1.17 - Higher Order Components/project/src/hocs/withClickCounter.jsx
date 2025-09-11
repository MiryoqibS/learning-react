import React, { useState } from 'react'

export const withClickCounter = (WrappedComponent) => {
    return function EnhancedComponent(props) {
        const [count, setCount] = useState(0);

        const increment = () => setCount(prev => prev + 1);

        return <WrappedComponent
            {...props}
            clickCount={count}
            clickIncrement={increment}
        />
    };
};

