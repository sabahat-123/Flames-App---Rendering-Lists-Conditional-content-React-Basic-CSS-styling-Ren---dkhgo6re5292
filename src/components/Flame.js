

import React, { useState } from 'react'


function Flame() {
    const [output, setoutput] = useState("");
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");

    const firstNameHandler = (event)=>{
        setFirstName(event.target.value);
        console.log(event.target.value);
    }

    const secondNameHandler = (event)=>{
        setSecondName(event.target.value);
    }

    const clickCalculateHandler = ()=>{
        let checkInput1 = firstName.trim();
        let checkInput2 = secondName.trim();
        if((checkInput1 === "") || (checkInput2 === "")){
            setoutput("Please Enter valid input");
            return
        }

        let arrInput1 = checkInput1.split("");
        let arrInput2 = checkInput2.split("");
        let letterCount = 0;
        for(let i=0;i<arrInput1.length;i++){
            for(let j=0;j<arrInput2.length;j++){
                if(arrInput1[i] === arrInput2[j]){
                    letterCount++; 
                    arrInput2[j] = "" 
                    arrInput1[i] = "1" 
                }
            }
        }

        const result = ((arrInput1.length - letterCount) + (arrInput2.length - letterCount)) % 6;

        let output = "";

        switch(result) {
            case 0: 
                output = "Siblings";
                break;
            case 1:
                output = "Friends";
                break;
            case 2:
                output = "Love";
                break;
            case 3:
                output = "Affection";
                break;
            case 4:
                output = "Marriage";
                break;
            case 5:
                output = "Enemy";
                break
        }

        setoutput(output);
    }

    const clickClearHandler = ()=>{
        setoutput("");
        setFirstName("");
        setSecondName("");
    }

    

  return (
    <div>
        <div>
        <input data-testid="input1" onChange={firstNameHandler} value={firstName}></input>
        <input data-testid="input2" onChange={secondNameHandler} value={secondName}></input>
        </div>
        
        <button data-testid="calculate_relationship" onClick={clickCalculateHandler}>Calculate</button>
        <button data-testid="clear" onClick={clickClearHandler}>Clear</button>
        <div>
        <h3 data-testid="answer">{output}</h3>
        </div>
    </div>
  )
}

export default Flame;