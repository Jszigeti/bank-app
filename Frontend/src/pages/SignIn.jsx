import Footer from "../components/Footer/Footer";
import Form from "../containers/Form/Form";
import Menu from "../containers/Menu/Menu";

function SignIn() {
  return (
    <>
      <Menu />
      <main className="main bg-dark">
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default SignIn;
