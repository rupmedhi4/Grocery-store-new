import { createSlice } from "@reduxjs/toolkit";
import { db } from "../../Firebase/FireBase";
import { doc,setDoc } from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";




const ShoppingCartSlices = createSlice({
    name: "ShoppingCartSlices",
    initialState: {
        dummyArray: [
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
                title: 'Dummy Title 1',
                paragraph: 'Paragraph 1',
                amount: 1,
                id: 1,
                Quantity: 1
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
                title: 'Dummy Title 1',
                paragraph: 'Paragraph 1',
                amount: 2,
                id: 2,
                Quantity: 1
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
                title: 'Dummy Title 1',
                paragraph: 'Paragraph 1',
                amount: 3,
                id: 3,
                Quantity: 1
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
                title: 'Dummy Title 1',
                paragraph: 'Paragraph 1',
                amount: 4,
                id: 4,
                Quantity: 1
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
                title: 'Dummy Title 1',
                paragraph: 'Paragraph 1',
                amount: 5,
                id: 5,
                Quantity: 1
            },

           
        ],
        addToCart: [],
        amount:0,
        

    },

    reducers: {
        ShowAllCarts: (state, action) => {
            const data = action.payload
            console.log(data)
        },
        AddToCartHandler:  (state, action) => {
            const { filteredArray, id , user} = action.payload;
      
            if (state.addToCart.length === 0) {
              state.addToCart = [filteredArray];
              state.amount += filteredArray[0].amount * filteredArray[0].Quantity;
            } else {
              let itemAlreadyAdded = false;
              state.addToCart.forEach((item) => {
                item.forEach((cart) => {
                  if (cart.id === id) {
                    alert("Item already added");
                    itemAlreadyAdded = true;
                  }
                });
              });
      
              if (!itemAlreadyAdded) {
                state.addToCart = [...state.addToCart, filteredArray];
                state.amount += filteredArray[0].amount * filteredArray[0].Quantity;
              }
            }
           
            
           

           
           

          },
          QuantityIncrease: (state, action) => {
            const id = action.payload;
            let realAmount = 0;
            state.dummyArray.map((product) => {
              if (product.id === id) {
                realAmount = product.amount;
              }
            });
            
            const updatedCart = state.addToCart.map((cart) => {
              const updatedItems = cart.map((item) => {
                if (item.id === id) { 
                    state.amount =  state.amount +realAmount
                  return {
                    ...item,
                    Quantity: item.Quantity + 1,
                    amount: item.amount + realAmount
                    
                  };
                }
                
                return item;
              });
              return updatedItems;
            });
            state.addToCart = updatedCart;
          },
          
        QuantityDecrease: (state, action) => {
            const id = action.payload;
            let realAmount = 0;
            state.dummyArray.map((product) => {
              if (product.id === id) {
                realAmount = product.amount;
              }
            });        
            const updatedCart = state.addToCart.map((cart) => {
              const updatedItems = cart.map((item) => {
                if (item.id === id && item.Quantity >1) { 
                    state.amount =  state.amount - realAmount
                  return {
                    ...item,
                    Quantity: item.Quantity - 1,
                    amount: item.amount - realAmount             
                  };
                }      
                return item;
              });
              return updatedItems;
            });
            state.addToCart = updatedCart;
          },
          removeCart : (state, action)=>{
            const id = action.payload
            const removeItems = state.addToCart.map((items)=>{
                const removeItem = items.filter((cart)=>(cart.id!==id))

               items.map((item) => {
                    if (item.id === id ) { 
                        state.amount =  state.amount - item.amount   
                    }    
                } ) 
                return removeItem;
            })
            state.addToCart = removeItems;
          },
          clearCartHandler : (state, action)=>{
            state.addToCart = []
          }
          
           
    },
});


export const { ShowAllCarts, AddToCartHandler,QuantityIncrease,QuantityDecrease,removeCart,clearCartHandler } = ShoppingCartSlices.actions;

export default ShoppingCartSlices.reducer;