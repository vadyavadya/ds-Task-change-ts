import { useFormik } from "formik";

interface FormValues {
  firstName: string,
  lastName: string,
  email: string,
}

interface FormErrors {
  firstName?: string,
  lastName?: string,
  email?: string,
}

const validate = (values: FormValues) => {
  const errors: FormErrors = {};

  if (!values.firstName) {
    errors.firstName = 'Обязательно'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Фамилия не должна содержать больше 15 символов'
  }

  if (!values.lastName) {
    errors.lastName = 'Обязательно'
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Имя не должна содержать больше 15 символов'
  }

  if (!values.email) {
    errors.email = 'Обязательно'
  } else if (!/^[\w.%+-]+@[A-Z0-9.-]+\.[a-z]{2,6}$/i.test(values.email)) {
    errors.email = 'Некорректный эл.адрес'
  }
  return errors
}

const FormikUseFormik = () => {
  // Передайте в хук useFormik() начальные значения формы и функцию отправки, которая будет
  // вызывается при отправке формы
  /* @return 
        handleSubmit: Обработчик отправки
        handleChange: Обработчик изменений для передачи каждому <input>, <select> или <textarea>
        values: Текущие значения нашей формы 
  */
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ""
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="">
        <label htmlFor="firstName">First name: </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
      </div>

      <div>
        <label htmlFor="lastName">Last name: </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName && <div>{formik.errors.lastName}</div>}
      </div>
      
      <div>
        <label htmlFor="email">Email address: </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormikUseFormik;