import Input from "./component/Input";
import Container from "./component/Container";
import ButtonContainer from "./component/ButtonContainer";
import Head from "./component/Head";
import { useState } from "react";
import style from "./app.module.css";

function App() {
  const [text,setText] = useState("");
  
  const clicked =(item) =>
  {
     let value = item;
     if(value === 'C')
     { 
       setText("");
     }
     else if(value==='=')
     {
        let result=eval(text);
        setText(result);
     }
     else{
      
      let str = value;
      let str1 = text + str;
      setText(str1);
     }
  }

  let button = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  return (
    <div className={style.con}> <Container>
      <Head></Head>
      <Input show={text}></Input>
      <ButtonContainer list ={button} click={clicked}></ButtonContainer>
      </Container>
    </div>
  )
}

export default App
