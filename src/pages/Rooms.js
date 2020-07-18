import React from 'react'
import RoomsContainer from '../components/RoomsContainer';
import Images from '../components/Images';

export default function Rooms() {
    return (
        <>
            <Images title="החדרים שלנו" 
                    link="/"
                    link_text="חזרה לעמוד הבית"
            />
            <RoomsContainer/>
        </>
    );
}
