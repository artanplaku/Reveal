import React from "react";

const Home = ({products}) =>{
return(
    <div className="cart-items">
        <div className="cart-items-header"> Cart Items</div>

        {products.length === 0 && (<div> No items are added.</div>)}


        <div>
            {products.map((item) => (
                <div key={item.id} className="cart-items-list">
                    <img 
                    className="cart-items-image"
                    src={item.image} 
                    alt={item.name}
                    />
                    {item.description}
                    {item.name}
                </div>
            ))}
        </div>
    </div>
    
    )

}

export default Home