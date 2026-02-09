function Button({text="Click Me!", color="blue", fontSize=12, handleClick} : {text?: string, color?: string, fontSize?: number, handleClick?: () => void}){
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    };

    return (<button style={buttonStyle} onClick={handleClick}>{text}</button>);
}

export default Button;