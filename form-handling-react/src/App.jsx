import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm"; 

function App() {
  return (
    <div className="flex flex-col gap-8 items-center mt-10">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
