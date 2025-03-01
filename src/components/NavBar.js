function NavBar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/home">MyAutomobiles</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/vehiclelist">Vehicles</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/addvehicle">Add Vehicle</a>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" href="/updatevehicle">Update Vehicle</a>
                        </li> */}
                    </ul>
                </div>
            </div>  
        </nav>
        
        </>
    )
}

export default NavBar;