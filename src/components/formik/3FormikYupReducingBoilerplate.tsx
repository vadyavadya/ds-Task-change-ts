import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import * as Yup from "yup";

function MyTextInput({label, ...props}:{label:string, id?:string, name?:string, type:string}){
  const [field, meta] = useField(props);

  return(
    <div>
      <label htmlFor={props?.id || props?.name}>{label}</label>
      <input {...field} {...props}/>
      {meta.touched && meta.error ? <div>{meta.error}</div>: null}
    </div>
  )
}

export default function FormikYupReducingBoilerplate() {
  return (
    <section>
      <Formik
        initialValues={{ 
          firstName: '',
          lastName:'',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, 'Максимально 15').required("Обязательно"),
          lastName: Yup.string().max(10, 'Максимально 10').required("Обязательно")
        })}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }}
      >
        <Form>
          <div>
            <label htmlFor="firstName">Фамилия: </label>
            <Field id="firstName" name='firstName' type="text" />
            <ErrorMessage name="firstName" component='div' />
          </div>

          <MyTextInput type='text' name='lastName' id='lastName' label='Имя: '/>

          <button type="submit">Отправить</button>
        </Form>

      </Formik>
    </section>
  )
}