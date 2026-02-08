function ListItem(props: {animal: string}){
    return <li key={props.animal}>{props.animal}</li>;
}

function ListAnimals(props: {animals?: string[] }){
    if(!props.animals){
        return <div>Loading...</div>;
    }

    if(props.animals.length === 0){
        return <div>There are no animals in the list</div>;
    }
 
    return (
        <ul>{
            props.animals.map((animal)=> animal.startsWith("L") ? <ListItem animal={animal} /> : null)
            }</ul>
    );
}

export default ListAnimals;