import React from 'react';

const Banner = (props) => {
    var banner = <div class='nominees5'>You may add up to 5 nominees</div>;
    if (props.nominees.length >= 5) {
		banner = <div class='nominees5'>You have 5 nominees</div>;
	}
    return (
        <div className="banner">
            {banner}
        </div>
    )
}

export default Banner;