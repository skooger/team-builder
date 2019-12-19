import React, {useState} from 'react';

const Form = props => {
    console.log(props)
    const [form, setForm] =useState({
        name: "",
        email: "",
        role: ""
    });

    const handleChanges = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(form);
        setForm({ name:"", email:"", role:"" })
    };

    return (

        <form onSubmit={submitForm}>
            <label htmlFor="Name">Name</label>
            <input 
                id="name"
                type="text"
                placeholder="name"
                onChange={handleChanges}
                name="name"
                value={form.name}
            />
            <label htmlFor="Email">Email</label>
            <input 
                id="email"
                type="text"
                placeholder="email"
                onChange={handleChanges}
                name="email"
                value={form.email}
            />
            <label htmlFor="Role">Role</label>
            <input 
                id="role"
                type="text"
                placeholder="role"
                onChange={handleChanges}
                name="role"
                value={form.role}
            />
            <button type="submit">Add Member</button>
        </form>
    )
}

export default Form;