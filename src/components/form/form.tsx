import { Checkbox, TextField } from '@material-ui/core';
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
                <LocalizationProvider dateAdapter={DateFnsUtils}>
                    <Form>
                        <Field
                            name='pricing'
                            label='Pricing'
                            component={TextField}
                            variant='outlined'
                            margin='normal'
                            fullWidth
                        />
                        <Field
                            name='activationDate'
                            label='ActivationDate'
                            component={DatePicker}
                        />
                        <Field name='isActive' label='Is Active' type='checkbox' as={Checkbox} />

                        <button type='submit'>Submit</button>
                    </Form>
                </LocalizationProvider>
            </Formik>
        </FormContainer>
    );
};

export default Forms;
