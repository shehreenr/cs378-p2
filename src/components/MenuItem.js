import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, price }) => {
    return (
        <div className="menu-item">
            <div className="row justify-content-center"> 
                <div className="col-4"> <
                    img src={`/images/${title}.png`} className="image" alt={title} /> 
                </div>
                <div className="col-4">
                    <div className="item-info">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <div className="order-item">
                            <p>${price}</p>
                            <button> add </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
