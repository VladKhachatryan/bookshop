import React from "react";

export const UserContext = React.createContext()




export const initialState = {
    products: [
        { id: 101, title: "Psychology", price: 40, photo: "https://m.media-amazon.com/images/I/91AiNeHUoNL._AC_UF1000,1000_QL80_.jpg" },
        { id: 102, title: "Criminal", price: 32, photo: "https://cs1.htmlacademy.ru/blog/js/books-javascript/759a9a773e9f82610bbea2e8fccc3e6e.webp" },
        { id: 103, title: "History", price: 20, photo: "https://img4.labirint.ru/rc/a634c9868c8e5aff0fd716fd4d5bcb16/363x561q80/books13/123468/cover.jpg?1280394613" },
        { id: 104, title: "Poem", price: 26, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxujkL-2LxTGR1YVQqj1ccM5oHiSnWqPbQaQ&s" },
        { id: 105, title: "Javascript", price: 50, photo: "https://habrastorage.org/getpro/habr/upload_files/9ed/16f/b06/9ed16fb063f42b670e7da85452701699.png" },
    ],
    busket: [


    ]

}

export const reducer = (state, action) => {
    switch (action.type) {
        case "move":
            const ProductInBusket = state.busket.find(elm => elm.id === action.payload)
            const productToMove = state.products.find(elm => elm.id === action.payload)
            if (productToMove) {
                return {

                    func: console.log(initialState.busket),
                    ...state,
                    busket: [...state.busket, { ...productToMove, count: 2 }]
                }
            } 


                return state
        case "remove":
            return {
                ...state,
                busket: state.busket.filter(elm => elm.id !== action.payload)

            }

        case "addCount":
            return {
                ...state,
                busket: state.busket.map(elm => {
                    elm.id === action.payload ? { ...elm, count: elm.count + 1 } : elm
                })
            }
        case "disCount":
            return {
                ...state,
                busket: state.busket.map(elm => {
                    elm.id === action.payload ? { ...elm, count: elm.count + 1 } : elm
                })
            }





        default: return state
    }
}








