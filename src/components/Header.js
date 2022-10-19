/** there are two types of methods is here in JSX condition  1 funtions and 2 classes 
 * 1 : funtions is the normal ways of using jsc conditions 
 * 2 : classes is the objective way of using in jsc .
 */

import { Component } from "react";

class Header extends Component {
    render(){
        return(
            <div>
            <h1>Hai I'm Header and {this.props.argument_data}</h1>
            <p>this is the anoter folder and file connection component.</p>
            </div>
        );
    }
}


/*
function Header(props){
    return(
        <div>
            <h1>Hai I'm Header and {props.argument_data}</h1>
            <p>this is the anoter folder and file connection component.</p>
        </div>
    );
}
*/
export default Header