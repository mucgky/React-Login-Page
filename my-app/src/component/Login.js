import React from "react";
import './login.css';
const login=()=>{

    function handleClick (){
        document.querySelector("#right-click").setAttribute('style','display:block !important')
        document.querySelector(".left").setAttribute('style','display:none !important')
        console.log('calisti')
      }
      function handleClick2 (){
        document.querySelector(".right").setAttribute('style','display:none !important')
        document.querySelector(".left").setAttribute('style','display:block !important')
        console.log('calisti')
      }
    return(  
        <div id="back">
            <div className="backRight"></div>
            <div className="backLeft"></div>
            <div className="toplayer">
                <div className="left" >
                    <div className="content">
                        <h2>Sign Up</h2>
                        <form method="post">
                            <div className="form-group">
                                <input type="text" placeholder="Username"/>
                                <input type="password" placeholder="Password"/>
                            </div>
                         
                        </form>
                        <button id="goLeft" className="off" onClick={handleClick}>Login</button>
                        <button id="sign" type="submit">Sign Up</button>
                    </div>
                </div>
                <div className="right" id="right-click">
                    <div className="content">
                        <h2>Login</h2>
                        <form method="post">
                            <div className="form-group">
                                <input type="text" placeholder="Username"/>
                                <input type="password" placeholder="Password"/>
                            </div>
                        </form>
                        <button id="goRight" className="off" onClick={handleClick2} >Sign Up</button>
                        <button id="login" type="submit">Login</button> {/*button login*/}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default login