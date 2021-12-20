

const Item = ({item}) =>(
    <div class="card" >
        <h1>{item.title}</h1>
        <p>{item.id}</p>
        <p>{item.price}</p>
    </div>


)
export default Item