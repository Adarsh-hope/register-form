document.getElementById('form').addEventListener("submit",(e)=>{
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(username.trim() === "" || email.trim() === '' || password.trim() ===""){
        alert('please fil in all the field');
        return;
    }
    submitForm({ username, email, password });
    console.log("Username", username);
    console.log("email", email)
    console.log("Password", password);
})
    
function submitForm(formData){
    fetch('http://localhost:3000/register', {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(formData)
    })
    .then(Response => Response.text())
    .then(data => {
        alert(data);
    })
    .catch( error => console.error("Error :", error))
}