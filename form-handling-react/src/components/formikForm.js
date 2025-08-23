import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: ""
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik Form submitted:", values);
    alert("User Registered with Formik!");
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="space-y-4 p-4 border rounded w-80 mx-auto">
        <h2 className="text-xl font-bold">Formik Registration</h2>

        <div>
          <Field name="username" placeholder="Username" className="w-full p-2 border rounded" />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
        </div>

        <div>
          <Field name="email" type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
        </div>

        <div>
          <Field name="password" type="password" placeholder="Password" className="w-full p-2 border rounded" />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
