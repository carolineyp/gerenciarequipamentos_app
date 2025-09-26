function mudarNome(){
    
    let nmUser = localStorage.getItem('newUser'); 
    document.getElementById('nmuser').innerHTML = nmUser;
    return nmUser;
}