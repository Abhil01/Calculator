import styles from "./button.module.css";
function Button({type,action})
{
  return <button className={styles.button} value={type} onClick={()=>action(type)}>{type}</button>
}
export default Button;