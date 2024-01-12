import React from 'react';
import hadithBook from '../../assets/images/hadith.svg';

const HadithSection = ({ section }) => {
    return (
        <div
            className='p-4 bg-white rounded-lg space-y-3'
        >
            <div
                className='flex items-center space-x-3'
            >
                <img
                    src={hadithBook}
                    className=''
                />
                <p>{section?.number}</p>
            </div>
            <p>{section?.title}</p>
            <hr />
            <p>{section?.preface}</p>
        </div>
    );
};

export default HadithSection;