import Button from "./Button";
import style from "./buttonContainer.module.css";
function ButtonContainer({list,click})
{
   return <div className={style.container}>
   {list.map((item)=>
   <Button type ={item} action={click}></Button>
   )}
   </div>
}
export default ButtonContainer;