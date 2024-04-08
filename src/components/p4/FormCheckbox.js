const FormCheckbox = ({item}) => {
  return (<div className="form-check">
    <input value={item} className="form-check-input" type="checkbox" />
    <label className="form-check-label">
      {item}
    </label>
  </div>)
}

export default FormCheckbox;
