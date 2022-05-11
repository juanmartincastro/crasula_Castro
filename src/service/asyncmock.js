const plantsData = [
	{
		id: 0,
		category: "crassulas",
		title: "Crassula perforata",
		price: 520,
		stock: 9,
		pictureUrl:'https://clubsuculentas.com/wp-content/uploads/2019/08/crassula-perforata-variegata.jpg',
		description:'La crassula perforata es una planta suculenta nativa de Sudáfrica. Las hojas crecen apiladas alrededor del tallo de tal forma que este las perfora (de ahí su nombre, perforata). Es una planta resistente acostumbrada a climas secos y calurosos, incluso puede soportar cortas temporadas de temperaturas bajo cero. Lo realmente importante es que durante el invierno esté en un ambiente seco porque de lo contrario se pudre con facilidad. Para que tu crassula perforata crezca sana durante mucho tiempo, ten en cuenta lo siguiente: El riego ligero sin encharcar. El sustrato siempre debe secar completamente antes de volver a regar. Muy poco riego en invierno. Requiere mucha luz, al menos 6/8 horas al día.', 
	},
	{
		id: 1,
		category: "suculentas",
		title: "Erica",
		price: 450,
		stock: 10,
		pictureUrl:'https://d3ugyf2ht6aenh.cloudfront.net/stores/913/526/products/erica-31-349aa7014c43ddf40b15880382066519-1024-1024.png',
		description:'Este decorativo arbusto originario de El Cabo (Sudafrica) crece hasta una altura de un metro aproximadamente. Tiene hojas diminutas, perennes, de color verde oscuro. Sus flores pueden ser de color rosa, crema o blanco. Aparecen durante el periodo otoñal, por lo que es sin duda la planta protagonista tras finalizar el verano.' 
	},
	{
		id: 2,
		category: "suculentas",
		title: 'Malvon italiano',
		price: 600,
		stock: 15,
		pictureUrl:'https://d3ugyf2ht6aenh.cloudfront.net/stores/913/526/products/malvon-italiano1-4a12e85aa54c23793015874427595244-1024-1024.png',
		description:'El malvón es una planta perenne originaria de África. Son plantas muy resistentes, ideales para adornar jardines o balcones por su abundante y duradera floración.La mayor ventaja del malvón es que es una planta muy rústica, que crece sin demasiadas exigencias, pero siempre al aire libre. El malvón florece continuamente desde primavera hasta otoño, y sus tonos van del blanco al rojo, pasando por rosas de todo tipo.'
	},
	{
		id: 3,
		category: "suculentas",
		title: "Lavanda",
		price: 300,
		stock: 20,
		pictureUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZXnFl5dOkRiR1VxfqnKW_Z6r2BfmZWVT5yQ&usqp=CAU',
		description:'Es una de las especies de lavanda más interesantes para su uso en jardinería pública o privada. Estamos ante una planta aromática con la que podemos crear en el jardín hermosas borduras, setos bajos y compactos, bellos macizos florales,… cuando son plantadas en grupo. Pero también se pueden disfrutar como plantas aisladas en maceteros.'
	},
	{
		id:4,
		category:"suculentas",
		title: "Sanseviera",
		price: 650,
		stock: 30,
		pictureUrl:'https://www.mdzol.com/u/fotografias/m/2021/8/5/f608x342-1091279_1121002_31.jpg',
		description: "La sansevieria es una planta ideal para ser cultivada en interiores, pero también se da muy bien en jardines y balcones ya que sus requerimientos son mínimos. Con ella, además de tener una planta ornamental sofisticada y elegante, lograremos mejorar la calidad de aire de nuestro hogar debido a su poder de purificador. Además de su gran poder decorativo, esta planta fue catalogada por la NASA dentro del catálogo de especies que pueden purificar el aire. Esto las convierte es una gran idea para ser incorporadas en habitaciones y mejorar las condiciones ambientales mientras dormimos."
	},
	{
		id:5,
		category:"crassulas",
		title: "Crassula Ovata Golium",
		price: 580,
		stock: 10,
		pictureUrl: "https://plantasflores.com/cactaceas-suculento/wp-content/uploads/sites/7/2021/11/Crassula-ovata-Gollum.jpg",
		description: "La Crassula Ovata – Gollum, es una bella y muy peculiar suculenta, que se caracteriza por poseer hojas alargadas en forma de cilindro de color verde. Cada una de sus hojas, están adornadas con puntas en color rojizo. La Crassula Ovata – Gollum es excelente como relleno en arreglos con suculentas, debido a su forma peculiar y alargada. También se ve muy hermosa en macetas colgantes y jardines con rocas. "
	},
	{
		id:6,
		category:"crassulas",
		title: "Crassula Rogersii",
		price: 580,
		stock: 30,
		pictureUrl: "https://todoparatuhuerta.com/wp-content/uploads/2021/01/crassula-rogersii.jpg",
		description: "Crassula Rogersii es una planta originaria de Sudáfrica. Puede alcanzar unos 25 cm de altura. Sus tallos son cilíndricos y bastante ramificados. Sus hojas se disponen opuestas en los tallos. Son extremadamente carnosas y poseen la región superior plana. Su color es verde clara y están cubiertas por diminutos pelos blanquecinos. La coloración de las hojas puede variar en dependencia de la intensidad lumínica que reciban ya que si se exponen al sol toman una coloración rojiza."
	},
	{
		id:7,
		category:"crassulas",
		title: "Crassula capitella",
		price: 720,
		stock: 15,
		pictureUrl: "https://www.panoramaweb.com.mx/u/fotografias/m/2021/10/11/f768x1-12928_13055_5050.jpg",
		description: "La Crassula capitella tiene unas hojas muy especiales y coloridas a lo largo de los tallos de las plantas, hasta llegar a la punta, además, el tono rojo de las hojas puede llegar a variar dependiendo de la hora, siendo más intenso en las horas que el sol este en su punto máximo. Esta planta puede alcanzar una altura de 25 centímetros y su reproducción es muy fácil, sin embargo, es muy importante que evites el exceso de riego, ya que es muy sensible a la humedad."
	},
	{
		id:8,
		category:"crassulas",
		title: "Crassula Muscosa",
		price: 460,
		stock: 13,
		pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_aL1unMxbTtKfEC_JcYCk5za1PFIO8t8Sp8z-jwBJmD8JAEcZEx4Tbq72WObbnmr4Yc&usqp=CAU",
		description: "La crassula muscosa o 'Cordón de San José' es una planta con un aspecto realmente peculiar que destaca en cualquier jardín casero. Esta planta tiene hojas de color verde claro, muy pequeñas que se agrupan muy densamente alrededor de unos tallos delgados. Esta disposición de las hojas le da un aspecto realmente curioso con forma de cordón. Es una planta resistente que aguanta temperaturas moderadas y climas secos, incluso heladas durante cortos periodos de tiempo. Lo realmente importante es que durante el invierno esté en un ambiente seco para evitar que se pudra rápidamente con la humedad."
	},
	{
		id:9,
		category:"suculentas",
		title: "Haworthia Fasciata",
		price: 850,
		stock: 25,
		pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUN41FUkujuySYvkmsWGk1hN6hX_zw7rJ24g&usqp=CAU",
		description: "Sin duda, es una especie muy llamativa que destaca por sus hojas moteadas, y sus tonalidades de verdes intensos. Es un género de suculentas muy reconocido y apreciado por los amantes de estas plantas, sus cuidados son mínimos, por lo que hacen de ella, una planta adaptable a cualquier entorno, tanto en exterior como en interior. Este tipo de género es muy resistente a vivir en entornos donde el agua es escasa, por lo que el mayor peligro que puede tener esta planta será el exceso de agua y humedad. Se desarrolla muy bien en entornos de sombra o interiores donde pueda recibir algo aire y de luz natural indirectamente."
	}
]

const task = new Promise((resp) => {
	resp(plantsData)
}, 2000)

export const getItem = () => {
	return task
}
