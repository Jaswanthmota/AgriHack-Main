 import {Link} from 'react-router-dom';
 import classes from './Navigation.module.css';

 function Navigation({setShow,size}){

     const searchHandler=(event)=>{
        event.preventDefault()
     }
     return <nav class="navbar navbar-expand-lg navbar-light bg-light" >
  <div class="container-fluid">
    <Link class="navbar-brand text-dark fw-bold" to ='/home' ><img src='/logo1.png' alt="pic" className={classes.logo} /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(true)}>
      <span class="navbar-toggler-icon"></span>
    </button>&nbsp;&nbsp;&nbsp;
    <div className={classes.search}>
      <form onSubmit={searchHandler}>
    <div class="input-group " >
      <input type="text" class="form-control" placeholder="Search product" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      <button class="input-group-text" id="inputGroup-sizing-default"><i class="bi bi-search"></i></button>
    </div>
    </form>
    </div>
    <div className={classes.navs}>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item px-3">
          <Link class="nav-link text-success h6" to='/home'><button class='rounded-pill h6 p-2 m-2 btn-outline-light' >Home</button></Link>
        </li>
        <li class="nav-item px-3">
          <Link class="nav-link text-succeess  h6" to='/aboutus'><button class='rounded-pill  h6 p-2 m-2 btn-outline-light '>About</button></Link>
        </li>
         <li class="nav-item px-3">
          <Link class="nav-link text-success  h6" to='/carts' ><button class='rounded-pill h6 p-2 m-2 btn-outline-light'>Products</button></Link>
        </li>
        <li class="nav-item px-3">
          <Link class="nav-link text-success  " to='/register'  ><button className='btn' ><abbr title="Login/Signup?"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg></abbr></button></Link>
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav>;
 }

 export default Navigation;