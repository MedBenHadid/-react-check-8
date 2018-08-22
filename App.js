import React, { Component } from 'react';
import './App.css';
import { FormControl } from 'react-bootstrap';

class App extends Component {
  /*constructor(props, context) {
    super(props, context);

    this.FNum = this.FNum.bind(this);

    this.state = {
      value: this.state   };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length === 16) return 'success';
    else if (length <16) return 'error';
    return null;
  }

  FNum(e) {
    this.setState({ value: e.target.value });
  }*/

  render() {

const Sinput = {
   width: 200,
   height: 30
  };
const FNum = (event) => {

	let Et=document.getElementById("Num*").innerHTML;
	let NumC=document.F.Num.value;
	let text;
	let etoile="*";
	let E;
	let txt;
 	let charCode = event.which;
 	let message;

if(event.key === "Backspace"){
	E=NumC.substr(0,NumC.length)//copy 
	 txt=E.concat(etoile.repeat(16-NumC.length))
	document.getElementById("Num*").innerHTML=txt
 
}else{
	for (var i =0; i < Et.length; i++) {
		if (charCode>=96 || charCode>=105){
		if (Et[i]==='*'){
			text=Et.replace(Et[i],NumC[NumC.length-1])
			 document.getElementById("Num*").innerHTML=text
			 document.getElementById("message").innerHTML=""
		}
	}else{
		message="<Alert bsStyle='warning'><strong>Num carte non valide !</strong></Alert>"
		document.getElementById("message").innerHTML=message;
		break;	
			}
	}

        
}
}

const FDate = (event) => {

	let Et=document.getElementById("Date*").innerHTML;
	let DateC=document.F.Date.value;
	let text;
	let etoile="*";
	let E;
	let txt;
 	let charCode = event.which;
 	let message;


if(event.key === "Backspace"){
	E=DateC.substr(0,DateC.length)//copy 

	 txt=E.concat(etoile.repeat(4-DateC.length))

	document.getElementById("Date*").innerHTML=txt
 	
}else{
	for (var i =0; i < Et.length; i++) {
		if (charCode>=96 || charCode>=105){
		if (Et[i]==='*'){
			text=Et.replace(Et[i],DateC[DateC.length-1])
			 document.getElementById("Date*").innerHTML=text
			 document.getElementById("message").innerHTML=""
		}
	}else{
		message="<Alert bsStyle='warning'><strong>Date carte non valide !</strong></Alert>"
		document.getElementById("message").innerHTML=message;
		break;	
			}
	}

        
}
}


const FNom = (event) => {


document.getElementById("Nom*").innerHTML=document.F.Nom.value;
/*
if(event.key === "Backspace"){
	E=DateC.substr(0,DateC.length)//copy 

	 txt=E.concat(etoile.repeat(4-DateC.length))

	document.getElementById("Date*").innerHTML=txt
 	
}else{
	for (var i =0; i < Et.length; i++) {
		if (charCode>=96 || charCode>=105){
		if (Et[i]==='*'){
			text=Et.replace(Et[i],DateC[DateC.length-1])
			 document.getElementById("Date*").innerHTML=text
			 document.getElementById("message").innerHTML=""
		}
	}else{
		message="<Alert bsStyle='warning'><strong>Date carte non valide !</strong></Alert>"
		document.getElementById("message").innerHTML=message;
		break;	
			}
	}

        
}*/
}


    return (
    <div>
   <div className="carteBorder">
<br/><br/><br/><br/>
&nbsp;&nbsp;&nbsp;<p id="Num*" className="Style">****************</p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p id="Nbr" className="Style"> </p>
<p className="Style2" id="Date*">**/**</p>
<p className="Style3" id="Nom*"></p>
  </div>
 <div className="inline">
 <br/>
 <span id="message"></span>
 <form name="F">
	Num Carte : <FormControl type="text"  name="Num" id="Num" onKeyUp={FNum} maxlength="16" style={Sinput}/><br/>
	Nom Client : <FormControl type="text" name="Nom" id="Nom" onKeyUp={FNom}  style={Sinput}/><br/>
	Date Carte : <FormControl type="text" name="date" id="Date" onKeyUp={FDate}style={Sinput} maxlength="4"/><br/>
</form>

	</div>

</div>
     


    );
  }
}

export default App;
