const Company = (props) => {
  let {item, onSelect} = props
  return (
    <div>
      Name {item.name} with {item.employees} employees {item.revenue} revenue
      <input type="button" value="select" onClick={() => onSelect(item)} />
    </div>
  )
}

export default Company
