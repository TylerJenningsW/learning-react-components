import './Card.css'
// card concept to set default behavior for new components
function Card(props) {
    // 'card' being the default style PLUS any props following
    const classes = 'card ' + props.className;
    return (<div className={classes}>{props.children}</div>)
}

export default Card;