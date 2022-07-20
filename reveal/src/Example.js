import { Link } from "react-router-dom";


const Example = ({products, handleAddProduct}) =>{
  // console.log(products)
  const productCheck =() => {
    console.log(products)

    if (products.length === 0){
        return null
                    }
    
        return (
          <img
          src={products[0].image}
          className="rounded-tl-lg rounded-tr-lg"
        />
        )
    
    }
    const productCheck1 =() => {
        console.log(products)
    
        if (products.length === 0){
            return null
                        }
        
            return (
              <img
              src={products[3].image}
              className="rounded-tl-lg rounded-tr-lg"
            />
            )
        
        }

        const productCheck2 =() => {
            console.log(products)
        
            if (products.length === 0){
                return null
                            }
            
                return (
                  <img
                  src={products[4].image}
                  className="rounded-tl-lg rounded-tr-lg"
                />
                )
            
            }
            
            const productCheck3 =() => {
                console.log(products)
            
                if (products.length === 0){
                    return null
                                }
                
                    return (
                      <img
                      src={products[5].image}
                      className="rounded-tl-lg rounded-tr-lg"
                    />
                    )
                
                } 

                const productCheck4 =() => {
                    console.log(products)
                
                    if (products.length === 0){
                        return null
                                    }
                    
                        return (
                          <img
                          src={products[2].image}
                          className="rounded-tl-lg rounded-tr-lg"
                        />
                        )
                    
                    }
                    
                    const productCheck5 =() => {
                        console.log(products)
                    
                        if (products.length === 0){
                            return null
                                        }
                        
                            return (
                              <img
                              src={products[2].image}
                              className="rounded-tl-lg rounded-tr-lg"
                            />
                            )
                        
                        }
                        
                        const productCheck6 =() => {
                            console.log(products)
                        
                            if (products.length === 0){
                                return null
                                            }
                            
                                return (
                                  <img
                                  src={products[2].image}
                                  className="rounded-tl-lg rounded-tr-lg"
                                />
                                )
                            
                            } 

                            const productCheck7 =() => {
                                console.log(products)
                            
                                if (products.length === 0){
                                    return null
                                                }
                                
                                    return (
                                      <img
                                      src={products[2].image}
                                      className="rounded-tl-lg rounded-tr-lg"
                                    />
                                    )
                                
                                } 
            
            
return(
<div className="container mx-auto p-5">
  <div className="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base">
    <div className="flex flex-row justify-center">
      <div className="bg-gradient-to-r from-purple-800 to-red-400 w-10 h-10 rounded-lg" />
      <h1 className="text-3xl text-gray-600 ml-2">Reveal</h1>
    </div>
    <div className="mt-2">
      <a
        href="#"
        className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"
      >
        Home
      </a>
      <a
        href="#"
        className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"
      >
        Shop
      </a>
      <a
        href="#"
        className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"
      >
        Blog
      </a>
      <a
        href="#"
        className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"
      >
        Contact
      </a>
      <Link to="/cart">
      <a
        href="#"
        className="bg-purple-600 text-gray-50 hover:bg-purple-700 p-3 px-3 sm:px-5 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-6 sm:w-6 inline-block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Cart (0)
      </a>
      </Link>
    </div>
  </div>
  {/* Main Navigation */}
  <div className="md:flex md:flex-row mt-20">
    <div className="md:w-2/5 flex flex-col justify-center items-center">
      <h2 className="font-serif text-5xl text-gray-600 mb-4 text-center md:self-start md:text-left">
        Some Catchy Title Here
      </h2>
      <p className="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">
        Our brand tagline goes here.
      </p>
      <p className="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">
        Our brand motto goes here.
      </p>
      <a
        href="#"
        className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-5"
      >
        Shop Now
      </a>
    </div>
    <div className="md:w-3/5">
      <img src="./images/hero-img.svg" className="w-full" />
    </div>
  </div>
  {/* Hero sectioin */}
  <div className="my-20">
    <div className="flex flex-row justify-between my-5">
      <h2 className="text-3xl">Men's Collection</h2>
      <a href="#" className="flex flex-row text-lg hover:text-purple-700">
          <Link to="/products">
        View All
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-5 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      <div className="shadow-lg rounded-lg">
        <a href="#">
          {productCheck()}
        </a>
        <div className="p-5">
          <h3>
            <a href="#">Mens T-Shirt</a>
          </h3>
          <div className="flex flex-row my-3">
            <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2" />
          </div>
          <div className="flex flex-row my-3">
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              XL
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              XXL
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              L
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              M
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              S
            </a>
          </div>
          <div className="flex flex-col xl:flex-row justify-between">
            <button
            onClick={()=>handleAddProduct(products)}
              className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
              
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              
              Add to cart
              
            </button>
            <a
              className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>
      <div className="shadow-lg rounded-lg">
        <a href="#">
          {productCheck1()}
        </a>
        <div className="p-5">
          <h3>
            <a href="#">Slim Khaki Tousers</a>
          </h3>
          <div className="flex flex-row my-3">
            <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2" />
          </div>
          <div className="flex flex-row my-3">
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              XL
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              XXL
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              L
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              M
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              S
            </a>
          </div>
          <div className="flex flex-col xl:flex-row justify-between">
          <button
            onClick={()=>handleAddProduct(products)}
              className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to cart
            </button>
            <a
              className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>
      <div className="shadow-lg rounded-lg">
        <a href="#">
          {productCheck2()}
        </a>
        <div className="p-5">
          <h3>
            <a href="#">Nike Shoes</a>
          </h3>
          <div className="flex flex-row my-3">
            <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2" />
          </div>
          <div className="flex flex-row my-3">
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              XL
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              XXL
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              L
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              M
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              S
            </a>
          </div>
          <div className="flex flex-col xl:flex-row justify-between">
            <button
            onClick={()=>handleAddProduct(products)}
              className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to cart
            </button>
            <a
              className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>
      <div className="shadow-lg rounded-lg">
        <a href="#">
          {productCheck3()}
        </a>
        <div className="p-5">
          <h3>
            <a href="#">Wrist Watch</a>
          </h3>
          <div className="flex flex-row my-3">
            <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2" />
          </div>
          <div className="flex flex-row my-3">
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              XL
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              XXL
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              L
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              M
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              S
            </a>
          </div>
          <div className="flex flex-col xl:flex-row justify-between">
            <a
              className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to cart
            </a>
            <a
              className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>{" "}
  {/* Men's Collection Section */}
  <div className="my-20">
    <div className="flex flex-row justify-between my-5">
      <h2 className="text-3xl">Women's Collection</h2>
      <a href="#" className="flex flex-row text-lg hover:text-purple-700">
        View All
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-5 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      <div className="shadow-lg rounded-lg">
        <a href="#">
          <img
            src="./images/products/women/product1.jpg"
            className="rounded-tl-lg rounded-tr-lg"
          />
        </a>
        <div className="p-5">
          <h3>
            <a href="#">V Neck Tassel Cape</a>
          </h3>
          <div className="flex flex-row my-3">
            <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2" />
          </div>
          <div className="flex flex-row my-3">
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              XL
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              XXL
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              L
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              M
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              S
            </a>
          </div>
          <div className="flex flex-col xl:flex-row justify-between">
            <a
              className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to cart
            </a>
            <a
              className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>
      <div className="shadow-lg rounded-lg">
        <a href="#">
          <img
            src="./images/products/women/product2.jpg"
            className="rounded-tl-lg rounded-tr-lg"
          />
        </a>
        <div className="p-5">
          <h3>
            <a href="#">Printed Wrap Dress</a>
          </h3>
          <div className="flex flex-row my-3">
            <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2" />
          </div>
          <div className="flex flex-row my-3">
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              XL
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              XXL
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              L
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              M
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              S
            </a>
          </div>
          <div className="flex flex-col xl:flex-row justify-between">
            <a
              className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to cart
            </a>
            <a
              className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>
      <div className="shadow-lg rounded-lg">
        <a href="#">
          <img
            src="./images/products/women/product3.jpg"
            className="rounded-tl-lg rounded-tr-lg"
          />
        </a>
        <div className="p-5">
          <h3>
            <a href="#">Blue Denim Dress</a>
          </h3>
          <div className="flex flex-row my-3">
            <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2" />
          </div>
          <div className="flex flex-row my-3">
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              XL
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              XXL
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              L
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              M
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              S
            </a>
          </div>
          <div className="flex flex-col xl:flex-row justify-between">
            <a
              className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to cart
            </a>
            <a
              className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>
      <div className="shadow-lg rounded-lg">
        <a href="#">
          <img
            src="./images/products/women/product4.jpg"
            className="rounded-tl-lg rounded-tr-lg"
          />
        </a>
        <div className="p-5">
          <h3>
            <a href="#">High Waist Denim Skirt</a>
          </h3>
          <div className="flex flex-row my-3">
            <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2" />
            <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2" />
          </div>
          <div className="flex flex-row my-3">
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              XL
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              XXL
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              L
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              M
            </a>
            <a
              className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs"
              href="#"
            >
              S
            </a>
          </div>
          <div className="flex flex-col xl:flex-row justify-between">
            <a
              className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to cart
            </a>
            <a
              className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>{" "}
  {/* Women's Collection Section */}
  <div className="rounded-lg shadow-lg my-20 flex flex-row">
    <div className="lg:w-3/5 w-full bg-gradient-to-r from-black to-purple-900 lg:from-black lg:via-purple-900 lg:to-transparent rounded-lg text-gray-100 p-12">
      <div className="lg:w-1/2">
        <h3 className="text-2xl font-extrabold mb-4">
          Subscribe to get our offers first
        </h3>
        <p className="mb-4 leading-relaxed">
          Want to hear from us when we have new offers? Sign up for our
          newsletter and we'll email you every time we have new sale offers.
        </p>
        <div>
          <input
            type="email"
            placeholder="Enter email address"
            className="bg-gray-600 text-gray-200 placeholder-gray-400 px-4 py-3 w-full rounded-lg focus:outline-none mb-4"
          />
          <button type="submit" className="bg-red-600 py-3 rounded-lg w-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div className="lg:w-2/5 w-full lg:flex lg:flex-row hidden">
      <img src="./images/subscribe-banner.png" className="h-96" />
    </div>
  </div>
  {/* Newsletter Section */}
  <div className="border-t-2 border-gray-300 flex flex-col md:flex-row md:justify-between text-center py-5 text-sm">
    <div className="mb-4">
      <a href="#" className="mx-2.5">
        About
      </a>
      <a href="#" className="mx-2.5">
        Privacy Policy
      </a>
      <a href="#" className="mx-2.5">
        Terms of Services
      </a>
    </div>
    <p>© Copyright Reserved 2021</p>
  </div>
  {/* Footer Section */}
</div>
)
}

export default Example