import React, {useState, useEffect } from 'react';
import axios from 'axios';



const recommendBox = () => {
    <div>
        <h2>Recommend Tutor</h2>        
        <ul>
            {tutors.map((tutor) => (
                <li key={tutor.id}> {tutor.name} </li>

            ))}
        </ul>
    </div>
}

export default recommendBox;