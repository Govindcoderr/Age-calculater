function calculaterAge(){
    const birthday = document.getElementById('birthday').value;

    if (!birthday){
        document.getElementById('result').textContent="Please enter a valid birthdate!";
        return;
    }

    const today = new Date();

    const birthDate = new Date(birthdate);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust age if the current month and day are before the birthdate
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

        
}