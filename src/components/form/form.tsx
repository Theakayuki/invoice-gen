import * as Yup from 'yup';

import { CheckboxWithLabel, TextField } from 'formik-mui';
import { Field, FieldArray, Form, Formik } from 'formik';
import { ThemeProvider, createTheme } from '@mui/material';

import DateFnsUtils from '@date-io/date-fns';
import { DatePicker } from 'formik-mui-lab';
import { LocalizationProvider } from '@mui/lab';
import styled from 'styled-components';

const FormContainer = styled.div`
    margin: 2rem auto;
    max-width: 600px;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: var(--primary-500);
    color: #fff;

    Form {
        margin-top: 1rem;
    }

    .Mui-focused {
        color: #fff !important;
    }
`;

const formSchema = Yup.object().shape({
    pricing: Yup.string().required('Required').min(2, 'Too Short!').max(50, 'Too Long!'),
    name: Yup.string().required('Required').min(2, 'Too Short!').max(50, 'Too Long!'),
    usersInfo: Yup.array().of(
        Yup.object().shape({
            name: Yup.string().required('Required'),
            activationDate: Yup.date().required('Required'),
            deactivationDate: Yup.date().default(null),
            isActive: Yup.boolean().optional(),
        }),
    ),
});

//create custom DatePicker component

const Forms = () => {
    const theme = createTheme({});
    return (
        <FormContainer>
            <Formik
                initialValues={{
                    pricing: '',
                    name: '',
                    usersInfo: [
                        { name: '', activationDate: null, deactivationDate: null, isActive: false },
                    ],
                    testDate: null,
                }}
                validationSchema={formSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ values, setFieldValue }) => (
                    <ThemeProvider theme={theme}>
                        <LocalizationProvider dateAdapter={DateFnsUtils}>
                            <Form>
                                <div id='Plan-pricing'>
                                    <Field
                                        name='pricing'
                                        label='Pricing'
                                        component={TextField}
                                        type='pricing'
                                        variant='filled'
                                        size='small'
                                    />
                                </div>
                                <br />
                                <FieldArray
                                    name='usersInfo'
                                    render={(arrayHelpers) => (
                                        <div>
                                            {values.usersInfo.map((user, index) => (
                                                <div key={index}>
                                                    <Field
                                                        name={`usersInfo.${index}.name`}
                                                        label={`User ${index + 1}`}
                                                        component={TextField}
                                                        type='name'
                                                    />
                                                    <br />
                                                    <Field
                                                        name={`usersInfo.${index}.activationDate`}
                                                        label='Activation Date'
                                                        component={DatePicker}
                                                        type='activationDate'
                                                    />
                                                    <Field
                                                        name={`usersInfo.${index}.deactivationDate`}
                                                        label='Deactivation Date'
                                                        component={DatePicker}
                                                        type='deactivationDate'
                                                    />
                                                    <br />
                                                    <Field
                                                        name={`usersInfo.${index}.isActive`}
                                                        Label={{ label: 'Is Active' }}
                                                        component={CheckboxWithLabel}
                                                        type='checkbox'
                                                        onChange={(e: {
                                                            target: { checked: any };
                                                        }) => {
                                                            setFieldValue(
                                                                `usersInfo.${index}.deactivationDate`,
                                                                null,
                                                            );
                                                            setFieldValue(
                                                                `usersInfo.${index}.isActive`,
                                                                // invert the value
                                                                !user.isActive,
                                                            );
                                                        }}
                                                    />
                                                    <button
                                                        type='button'
                                                        onClick={() => arrayHelpers.remove(index)}
                                                    >
                                                        Remove User
                                                    </button>
                                                </div>
                                            ))}

                                            <button
                                                type='button'
                                                onClick={() =>
                                                    arrayHelpers.push({
                                                        name: '',
                                                        activationDate: null,
                                                        deactivationDate: null,
                                                        isActive: false,
                                                    })
                                                }
                                            >
                                                Add User
                                            </button>
                                        </div>
                                    )}
                                />
                            </Form>
                        </LocalizationProvider>
                    </ThemeProvider>
                )}
            </Formik>
        </FormContainer>
    );
};

export default Forms;
