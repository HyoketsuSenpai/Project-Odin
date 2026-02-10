import {useState, type ChangeEvent} from 'react';

function Person(){
   const [person, setPerson] = useState({firstName: "", lastName: "", age:100});
   const handleIncreaseAge = ()=>{
    setPerson({...person, age: person.age + 1});
   }

   const handlefnChange = (e: ChangeEvent<HTMLInputElement>)=>{setPerson({...person, firstName:e.target.value})};
   const handlelnChange = (e: ChangeEvent<HTMLInputElement>)=>{setPerson({...person, lastName:e.target.value})};

   return (
    <>
    <p>first name: </p><input type="text" value={person.firstName} onChange={handlefnChange} />
    <p>last name: </p><input type="text" value={person.lastName} onChange={handlelnChange}/>
    <h1>{person.firstName + ' ' + person.lastName}</h1>
    <h2>{person.age}</h2>
    <button onClick={handleIncreaseAge}>Increase Age</button>
    </>
   )
}

export default Person;