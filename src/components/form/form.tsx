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
                }}
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
                                {/* <Field name='name' label='Name' component={TextField} type='name' /> */}
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
                                                        variant='filled'
                                                    />
                                                    <br />
                                                    <Field
                                                        name={`usersInfo.${index}.activationDate`}
                                                        label='Activation Date'
                                                        component={DatePicker}
                                                        type='activationDate'
                                                        variant='filled'
                                                        size='small'
                                                    />
                                                    <Field
                                                        name={`usersInfo.${index}.deactivationDate`}
                                                        label='Deactivation Date'
                                                        component={DatePicker}
                                                        type='deactivationDate'
                                                        variant='filled'
                                                        size='small'
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
                                {/* 
                                <Field
                                    name='activationDate'
                                    label='Activation Date'
                                    component={DatePicker}
                                    type='activationDate'
                                    clearable
                                />
                                <Field
                                    name='deactivationDate'
                                    label='Deactivation Date'
                                    component={DatePicker}
                                    type='deactivationDate'
                                    disabled={values.isActive}
                                    clearable
                                />
                                <Field
                                    name='isActive'
                                    Label={{ label: 'Is Active' }}
                                    component={CheckboxWithLabel}
                                    type='checkbox'
                                    onChange={() => {
                                        setFieldValue('deactivationDate', null);
                                        setFieldValue('isActive', !values.isActive);
                                    }}
                                /> */}
                            </Form>
                        </LocalizationProvider>
                    </ThemeProvider>
                )}
            </Formik>
        </FormContainer>
    );
};

export default Forms;
