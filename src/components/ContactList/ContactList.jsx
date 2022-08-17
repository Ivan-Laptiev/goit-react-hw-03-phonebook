import { List, Item, Button } from "./ContactList.styled";

const ContactList = ({ value, onDeleteContact }) => {
    return (
        <List>
            {value.map(val => (<Item key={val.id}>{val.name}: {val.number}
                <Button onClick={()=> onDeleteContact(val.id) }>Delete</Button>
            </Item>))}
        </List>
    )

};

export default ContactList;