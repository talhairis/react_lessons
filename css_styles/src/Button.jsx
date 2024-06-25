/*MODULES METHOD*//*import styles from './Button.module.css'*/

function Button(){

    /*EXTERNAL METHOD*//*return(<button className="button">Click me</button>);*/
    /*MODULES METHOD*//*return(<button className={styles.button}>Click me</button>);*/
    /*INLINE METHOD*/
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    return(<button style={styles}>Click me</button>)
}

export default Button