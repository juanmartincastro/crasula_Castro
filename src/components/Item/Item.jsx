import React from "react"
import { Link } from "react-router-dom"

const Item = ({ producto }) => {
	return (
		<>
			<div className="card card-compact w-64 bg-base-100 shadow-xl border-2 border-amber-300 my-8">
				<div className="h-64">
					<img src={producto.pictureUrl} alt="Shoes" className=" h-full w-96" />
				</div>
				<div className="card-body bg-gray-800">
					<h2 className="card-title">{producto.title}</h2>
					<div className="inline-block align-bottom mr-5">
						<span className="font-bold text-5xl leading-none align-baseline">
							${producto.price}
						</span>
					</div>
					<div className="card-actions justify-start mt-5 w-full">
						<Link to={`/item/${producto.id}`} className="btn bg-green-400 text-black w-full hover:bg-lime-300 hover:text-lime-900 ">
							Ver más
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Item
