import style from "./input.module.css";
function Input({show})
{
    return <input className={style.input}type="text" value={show}/>;
}
export default Input;