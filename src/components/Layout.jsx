import React from 'react';
import StarDecoration from './StarDecoration';

function Layout({ children }) {
    return (
        <div className="relative min-h-screen">
            <StarDecoration />
            {children}
        </div>
    );
}

export default Layout;