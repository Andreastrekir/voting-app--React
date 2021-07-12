import React from 'react'

class Voting extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]
        };
    }

    
//ACA CREO LA FUNCION PARA QUE SUME AL TOCAR EL BOTON
   vote = (item) =>{
       item.votes++;
       this.setState({
           languages: [...this.state.languages]
       })
  // console.log(filter);
    }


    render() {
        return(
            <div className="languagess">
            <h1>Vote your Language !</h1>

            {
            this.state.languages.map((language,e) =>
            
            <div className="names">
            
                <div className="votes">{language.votes}</div>

                <div className="name">{language.name}</div>
                
               
                <button onClick={()=>this.vote(language)}>Click here</button>
            </div>
             ) 
            }
            </div>
  
        )}
    }
     export default Voting;