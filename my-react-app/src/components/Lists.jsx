import PropTypes from 'prop-types'

function List(props) {

    const items = props.items

    // Sort Array
    items.sort((a, b) => a.name.localeCompare(b.name)) //Alphabetically

                // High and Low calorie items
                const highCalItems = items.filter( item => item.calories >= 100)
                highCalItems.sort((a,b) => a.name.localeCompare(b.name))
                //const lowCalItems = items.filter( item => item.calories < 100)

                const itemsList = items.map(item => <li key={item.id}>
                                                {item.name}:&nbsp;
                                                    <b>{item.calories}</b>
                                                    </li>)

                // High calorie List
                const highCalList = highCalItems.map(highCalItem => <li key={highCalItem.id}>
                    {highCalItem.name}:&nbsp;
                        <b>{highCalItem.calories}</b>
                        </li>)
    return(
        <>
        <h2 className="list-category">{props.category}:</h2>
        <ul className="list-items">{itemsList}</ul>
        <h4 className="high-cal">High Calorie {props.category}</h4>
        <ol className="high-cal-items">{highCalList}</ol>
        <br />
        </>
    )
}
List.defaultProps = {
    category: "Category",
    items: [],
}

List.PropTypesropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number
    })),
}

export default List