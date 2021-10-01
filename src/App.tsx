import React from 'react';
import './App.css';
import { TextField, TextFieldError, Button, Radio } from './Components'
import { Formik, Field, Form, FieldArray } from "formik"
import * as yup from 'yup';

// Information on Formik can be found on https://formik.org/
// Information on Yup can be found on https://github.com/jquense/yup

const validationSchema = yup.object({
  firstName: yup.string().required().max(10)
})

function App() {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          isTall: false,
          cookies: [],
          yoghurt: "",
          pets: [
            { id: "" + Math.random(), name: 'willy' },
            { id: "" + Math.random(), name: 'gustave' }
          ]
        }}
        validationSchema={validationSchema}
        // validate={(values) => {
        //   const errors: Record<string, string> = {};

        //   if (values.firstName.includes('tim')) {
        //     errors.firstName = "no tim";
        //   }

        //   return errors;
        // }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          // make async call
          console.log(data);
          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting, handleChange, handleBlur, handleSubmit}) =>  (
          <Form>
            {/* <form onSubmit={handleSubmit}> */}
              <div><Field placeholder="first name" name="firstName" as={TextFieldError} type="input" /></div>
              <div><Field placeholder="last name" name="lastName" as={TextField} type="input" /></div>
              <div><Field name="isTall" type="checkbox" /></div>

              <div>Cookies:</div>
              <div><Field name="cookies" value='Twix' type="checkbox" />Twix</div>
              <div><Field name="cookies" value='Snickers' type="checkbox" />Snicker</div>

              <div>Yoghurt:</div>
              <div><Radio name="yoghurt" value='Peach' label="Peach" /></div>
              <div><Radio name="yoghurt" value='Blueberry' label="Blueberry" /></div>

              <FieldArray name="pets">
                {
                  (arrayHelpers) => (
                    <div>
                      <Button
                        type="button"
                        onClick={() =>
                          arrayHelpers.push({
                            name: "",
                            id: "" + Math.random()
                          })
                        }
                      >
                        add pet
                      </Button>
                      {values.pets.map((pet,index) => (
                        <div key={pet.id}>
                          <TextFieldError
                            placeholder="pet name"
                            value={pet.name}
                            name={`pets.${index}.name`}
                          />
                          <Button type="button" onClick={(e) => arrayHelpers.remove(index)}>
                            x
                          </Button>
                        </div>
                      ))}
                    </div>
                  )
                }
              </FieldArray>

              {/* <TextField name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur} /> */}
              <div>
                <Button disabled={isSubmitting} type="submit">Submit</Button>
              </div>

              <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errors, null, 2)}</pre>
            {/* </form> */}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
