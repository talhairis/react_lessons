
function Button(){

    //FUNCTION HAS ONLY ONE MISSION
    /*
    const handleClick1 = (name) => console.log(`${name} stop clicking me!`);
    return(<button onClick={() => handleClick1("Talha")}>Click me </button>);
    */

    //FUNCTION HAS MORE THAN ONE MISSION
    /*let count = 0;

    const handleClick2 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name}, you clicked me ${count} times!/s`);
        }
        else{
            console.log(`${name} stop clicking me!`);
        }
    };
    return(<button onClick={() => handleClick2("Talha")}>Click me </button>);
    */

    const handleClick3 = (e) => e.target.textContent = "OUCH!";
    return(<button onDoubleClick={(e) => handleClick3(e)}>Click me </button>);
}

export default Button