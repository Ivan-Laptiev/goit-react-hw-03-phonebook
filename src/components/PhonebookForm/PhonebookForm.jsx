import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
import { Label, Button } from "./PhonebookForm.styled";
import styled from "styled-components";

const InputName = styled(Field)`
    border: 1px solid gray;
    border-radius: 5px;
    outline: none;
    &:hover, &:focus {
        border: 1px solid #81b9e7;
    }
`;

const initialValues = {
    id: "",
    name: "",
    number: "",
};

let schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required()
});

const PhonebookForm = ({onAddContact}) => {
    
        const handleSubmit = (values, {resetForm}, ) => {
        const contact = { id: nanoid(7), name: values.name, number: values.number };       
        onAddContact(contact);        
        resetForm();
    }

        return (
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>            
                <Form>
                    <Label htmlFor="name">Name
                        <InputName
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required
                        />
                        <ErrorMessage name="name" />
                    </Label>
                    <Label htmlFor="number">Number                        
                        <InputName
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                        <ErrorMessage name="number" />
                    </Label>
                    <Button type="submit">Add contact</Button>
                </Form>
            </Formik>
        )
}

PhonebookForm.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
}

export default PhonebookForm;