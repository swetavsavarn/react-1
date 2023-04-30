export default function Paragraph(value) {
    return (
        <p style={{ color: value.color }}>{value.value}</p>
    )
}

Paragraph.defaultProps = {
    color: 'black'
}
