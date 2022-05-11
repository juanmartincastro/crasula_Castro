import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../../service/asyncmock"
import ItemList from "./ItemList/ItemList"

const ItemListContainer = ({ headings }) => {
	const [category, setCategory] = useState()
	const { categoryId } = useParams()

	useEffect(() => {
		if (categoryId === undefined) {
			getItem().then((resp) => setCategory(resp))
		} else {
			getItem().then((resp) =>
				setCategory(resp.filter((product) => product.category === categoryId))
			)
		}
	}, [categoryId])

	return (
		<>
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage: `url('https://www.inforegion.com.ar/wp-content/uploads/2021/08/suculentas1200.jpg')`
				}}
			>
				<div className="hero-overlay bg-opacity-70"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">{headings}</h1>
						<p className="mb-5">Vivero online</p>
					</div>
				</div>
			</div>
			<div className="divider"></div>
			<ItemList category={category} />
		</>
	)
}

export default ItemListContainer
