import React , {useState} from "react";
import './login.css';

function login(){

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [switToggled, setSwitchToggled] = useState(false);

    const ToggleSwitch = ()=>{
        switToggled ? setSwitchToggled(false) : setSwitchToggled(true)
        console.log(switToggled)

    }
    // function handleClick (){
    //     document.querySelector("#right-click").setAttribute('style','display:block !important')
    //     document.querySelector(".left").setAttribute('style','display:none !important')
    //     console.log('calisti')
    //   }
    //   function handleClick2 (){
    //     document.querySelector(".right").setAttribute('style','display:none !important')
    //     document.querySelector(".left").setAttribute('style','display:block !important')
    //     console.log('calisti')
    //   }
    return(  
        <div id="back">
            <div className="backRight"></div>
            <div className="backLeft"></div>
            <div className="toplayer">
                <div id="left" className={switToggled ? "off" :"on"} >
                    <div className="content">
                        <h2>Sign Up</h2>
                        <form method="post">
                            <div className="form-group">
                                <input type="text" placeholder="Username"/>
                                <input type="password" placeholder="Password"/>
                            </div>
                         
                        </form>
                        <button id="#background"  onClick={ToggleSwitch}>Login</button>
                        <button id="button" type="submit">Sign Up</button>
                    </div>
                </div>
                <div id="right" className={switToggled ? "on" :"off"}>
                    <div className="content">
                        <h2>Login</h2>
                        <form method="post">
                            <div className="form-group">
                                <input type="text" placeholder="Username"/>
                                <input type="password" placeholder="Password"/>
                            </div>
                        </form>
                        <button id="#background" onClick={ToggleSwitch}>Sign Up</button>
                        <button id="button" type="submit">Login</button> {/*button login*/}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default login