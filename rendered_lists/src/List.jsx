import PropTypes from 'prop-types'

function List(props){

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item =>  <li key={item.id}>
                                                {item.name}: &nbsp;
                                                <b>{item.calories}</b>
                                            </li>);
    
    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number,})),
}
List.defaultProps = {
    category: "Category",
    items: [],
}

/*function List(){

    //const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories: 105},
                    {id: 4, name: "coconut", calories: 159},
                    {id: 5, name: "pineapple", calories: 37}];

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
    //fruits.sort((a, b) => a.calories - b.calories); //NUMERIC(LESS TO MOST CALORIES)
    //fruits.sort((a, b) => b.calories - a.calories); //REVERSE NUMERIC(MOST TO LESS CALORIES)

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    //list fruits has lower cal then 100cal
    //list fruits has higher cal then 100cal

    const listItems = highCalFruits.map(highCalFruit =>   <li key={highCalFruit.id}>
                                                {highCalFruit.name}: &nbsp;
                                                <b>{highCalFruit.calories}</b>
                                            </li>);

    const listItems = fruits.map(fruit =>   <li key={fruit.id}>
                                                {fruit.name}: &nbsp;
                                                <b>{fruit.calories}</b>
                                            </li>);
    

    return(
        <ol>
            {listItems}
        </ol>
    );
}
*/

export default List