import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import MemberCard from "./Components/MemberCard";
import Form from "./Components/Form"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function App() {
  const [teamMembers,setTeamMembers] = useState([
    {
      id: 1,
      name: "Adam Skoog",
      email:"adamjskoog@gmail.com",
      role: "React  Dev"
    }


  ]);
 const addNewMember = member => {
    const newMember ={
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMembers([...teamMembers, newMember]);
  };

  return (
    <div className="App">
      <Form  addNewMember={addNewMember}/>
      <MemberCard members={teamMembers}/>
    </div>
  );
}

export default App;
