import React from 'react';
import './home.css';

function Home() {
    return (
        <div>
            <h2>Welcome to the Home Page</h2>
            <p>This is a protected page accessible after login.</p>
            <div className="carousel">
                <div className="carouselCard">Image 1</div>
                <div className='carouselCard'>Image 2</div>
                <div className='carouselCard'>Image 3</div>
                <div className='carouselCard'>Image 4</div>
            </div>
        </div>
    );
}

export default Home;
