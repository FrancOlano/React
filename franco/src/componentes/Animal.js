const Animal=(props)=> {
    return(
      <>
     
     <div className="card">
          <p>{props.animal.nombre}</p>
          <img className="img" src={props.animal.src}/>
          </div>
      
    </>
    )
  }
  
  export default Animal;
  