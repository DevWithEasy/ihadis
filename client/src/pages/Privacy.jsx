import React from 'react';

const Privacy = () => {
    const text = ' মহিলাকে বিয়ে করে। সেই মহিলা আমাকে নিয়ে কত কথা শুনিয়ে মহিলা যায়।';

    return (
        <div
            className=''
        >
            {text.split(' ').map((word, index) => (
                <span key={index} style={{ color: word.includes('মহিলা') ? 'yellow' : 'black' }}>
                    {word}{' '}
                </span>
            ))}
        </div>
    );
};

export default Privacy;