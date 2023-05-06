// import {Link} from 'react-router-dom';

function Navbar(props){
    return (
      <>
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Text-Utils</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="/">Home</a>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link active" to="/about">About</Link>
                </li> */}
              </ul>
              <form className="d-flex" role="search" onSubmit={(event)=>{event.preventDefault()}}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
              </form>
            </div>
            <div className="form-check form-switch" style={{marginLeft: "10px", marginRight: "10px"}}>
              <input className="form-check-input" onClick={props.redClick}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: 'red'}}>
              Red Mode</label>
              </div>
            <div className="form-check form-switch" style={{marginLeft: "10px", marginRight: "10px"}}>
              <input className="form-check-input" onClick={props.onClick}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={props.mode === 'light'? {color: 'black'}: {color: 'white'}}>
              Dark Mode</label>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar;