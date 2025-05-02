import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function TodoForm() {
    return (
        <Form>
            <InputGroup className='mb-3'>
                <FormControl
                    placeholder='Todo...'
                    aria-label='Todo'
                    aria-describedby='basic-addon2'
                />
                <Button
                    variant='outline-primary'
                    id='button-addon2'
                >
                    Add Todo
                </Button>
            </InputGroup>
        </Form>
    );
};

export default TodoForm;
