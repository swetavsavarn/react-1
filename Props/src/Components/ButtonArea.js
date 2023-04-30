function ButtonArea(props) {
    return (
        <>
            {props.buttonArray.map((items) => {
                console.log(items)
                return (<div className="mx-2">
                    <button onClick={items.onClick} className={items.className}>{items.name}</button>
                </div>
                )
            })}
        </>
    )
}
ButtonArea.defaultProps = {
    buttonArray: [
        {
            name: 'Default Button',
            onClick: () => console.log('Default button clicked'),
            className: 'btn-default'
        }
    ]
}
export default ButtonArea