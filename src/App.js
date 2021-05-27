import './index.css';
import {useState} from "react";


function App() {

    const [first_par,setFirst_par]=useState("")
    const [second_par,setSecond_par]=useState("")


    function handleFirstPar(e){

        setFirst_par(e.target.value)



    }
    function handleSecondtPar(e){
        setSecond_par(e.target.value)

    }


    function AddChangePas(){
        if(first_par==0 || second_par==0){
                     alert("Поле пароля пустое, введите пароль")
        }
            else {
                    if(first_par!==second_par){
                           alert("Пароль не верен")
                    }
                    else {
                        if(first_par===second_par){
                            alert("Добро пожаловать, вы вошли в свой аккаунт")
                        }
                    }
             }


    }





    return (<div className="app" >Введите от 1 до 8 символов
              <div className="string_1">
                <div className="text">Password first</div>
                <input maxLength={8} className="par_first" onChange={handleFirstPar}></input>
              </div>
              <div className="string_2">
                <div className="text">Password repet</div>
                 <input  maxLength={8} className="par_sec" onChange={handleSecondtPar}></input>
              </div>
              <button className="btn" onClick={AddChangePas}>Добавить</button>
         </div>)

}

export default App;
