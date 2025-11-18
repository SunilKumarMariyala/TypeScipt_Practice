function displayUserDetails(fname, lname) {
    //? on a parameter - makes it optinal param
    if (lname)
        console.log("User name is: ", fname + lname);
    else
        console.log("User name is: ", fname);
}
displayUserDetails("John", "Doe");
displayUserDetails("Jane");
