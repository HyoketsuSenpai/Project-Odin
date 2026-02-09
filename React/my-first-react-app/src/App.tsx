import './App.css'
import Button from './Button'

function App() {
  
  const handleButtonClick = (url:string) => {
    window.location.href = url;
  };

  return (
    <div>
      <Button handleClick={() => handleButtonClick("https://www.google.com")}/>
      <Button text="Don't Click Me!" color="red" />
      <Button fontSize={20} />
    </div>
  )
}

export default App
