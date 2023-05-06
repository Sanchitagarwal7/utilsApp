function Alert(props){
    return(    
    props.alert&&<div className={`alert alert-${props.alert.color}`} role="alert">
    <strong>{props.alert.msg}</strong>
    </div>);
}

export default Alert;

