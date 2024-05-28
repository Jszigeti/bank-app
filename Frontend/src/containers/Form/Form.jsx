import "./Form.style.css";
import { formInputs } from "../../data/formInputs";
import FormInput from "../../components/FormInput/FormInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Form() {
  return (
    <section className="sign-in-content">
      <FontAwesomeIcon icon={faCircleUser} />
      <h1>Sign In</h1>
      <form>
        {formInputs.map((formInput) => (
          <FormInput key={Math.random()} formInput={formInput} />
        ))}
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
  );
}

export default Form;
