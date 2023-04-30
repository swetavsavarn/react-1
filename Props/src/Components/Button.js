import Proptypes from 'prop-types'
function Button(value) {
    return (
        <button onClick={value.onClick}>{value.name}</button>
    )

}
Button.defaultProps = {
    onclick: ()=>{}
}
export default Button

