import React, { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
	// Logica
	const [cart, setCart] = useState([])

	// Validar si está el item en el carrito
	const isInCart = (id) => cart.find((producto) => producto.id === id)

	// Agregar item al carrito
	const addItem = (producto, cantidad) => {
		const newCart = [...cart]

		const productoIsInCart = isInCart(producto.id)

		if (productoIsInCart) {
			newCart[
				newCart.findIndex((prod) => prod.id === productoIsInCart.id)
			].quantity += cantidad

			setCart(newCart)
			return
		}

		producto.quantity = cantidad
		setCart([...newCart, producto])
	}

	const removeItem = (producto) => {
		const newCart = [...cart]

		const productIsInCart = isInCart(producto.id)

		if (!productIsInCart) {
			return
		}

		const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)

		setCart(deleteProduct)
	}

	const clear = () => setCart([])

	console.log(cart)

	return (
		<CartContext.Provider
			value={{
				cart,
				addItem,
				removeItem,
				clear,
				setCart,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export default CartContextProvider
