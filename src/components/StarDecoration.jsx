import React from 'react';

function StarDecoration() {
    const stars = [
        { style: 'left-[3%] top-[20%]', delay: '0s' },
        { style: 'left-[1%] top-[50%]', delay: '500ms' },
        { style: 'left-[3%] top-[80%]', delay: '1000ms' },
        { style: 'right-[3%] top-[20%]', delay: '700ms' },
        { style: 'right-[1%] top-[50%]', delay: '1200ms' },
        { style: 'right-[3%] top-[80%]', delay: '200ms' },
    ];

    return (
        <>
            {stars.map((star, index) => (
                <div
                    key={index}
                    className={`fixed text-6xl text-yellow-300 animate-twinkle ${star.style}`}
                    style={{ animationDelay: star.delay }}
                >
                    🌟
                </div>
            ))}
        </>
    );
}

export default StarDecoration;