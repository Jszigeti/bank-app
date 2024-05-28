import "./FormInput.style.css";

function FormInput({ formInput }) {
  return (
    <div className={formInput.class}>
      <label for={formInput.id}>{formInput.label}</label>
      <input type={formInput.type} id={formInput.id} />
    </div>
  );
}

export default FormInput;
