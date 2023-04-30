function Alerts(props) {
    return (
        <div class={`alert alert-${props.type}`} role="alert" >
            {props.message}
        </div>
    
    )
}
export default Alerts