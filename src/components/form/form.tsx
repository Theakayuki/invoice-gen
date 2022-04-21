import { CheckboxWithLabel, TextField } from 'formik-mui';
import { Field, Form, Formik } from 'formik';

import DateFnsUtils from '@date-io/date-fns';
import { DatePicker } from 'formik-mui-lab';
import { LocalizationProvider } from '@mui/lab';
import styled from 'styled-components';

const FormContainer = styled.div``;

interface IFormValues {
    pricing: string;
    name: string;
    activationDate: Date;
    deactivationDate: Date;
    isActive: boolean;
}

const Forms = () => {
    return (
        <FormContainer>
            <Formik
                initialValues={{
                    pricing: '',
                    name: '',
                    activationDate: null,
                    deactivationDate: null,
                    isActive: false,
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ values, setFieldValue }) => (
                    <LocalizationProvider dateAdapter={DateFnsUtils}>
                        <Form>
                            <Field
                                name='pricing'
                                label='Pricing'
                                component={TextField}
                                type='pricing'
                            />
                            <Field name='name' label='Name' component={TextField} type='name' />
                            <Field
                                name='activationDate'
                                label='Activation Date'
                                component={DatePicker}
                                type='activationDate'
                            />
                            <Field
                                name='deactivationDate'
                                label='Deactivation Date'
                                component={DatePicker}
                                type='deactivationDate'
                                disabled={values.isActive}
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
                            />
                        </Form>
                    </LocalizationProvider>
                )}
            </Formik>
        </FormContainer>
    );
};

export default Forms;
