document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameinput');
    const ageInput = document.getElementById('ageinput');
    const yearInput = document.getElementById('yginput');
    const output = document.getElementById('unquserGenerated');

    function generateUsername() {
        const name = nameInput.value.trim();
        const age = parseInt(ageInput.value);
        const yearGroup = parseInt(yearInput.value)

        if(name.length < 3 || isNaN(age) || age < 1 || age > 100 || isNaN(yearGroup) || yearGroup < 7 || yearGroup > 13) {
            output.textContent = "Please enter valid details."
            return;
        }

        const unquser = name.substring(0, 3) + age + `-${yearGroup}`;
        output.textContent = `Your Unique User Is: ${unquser}`
        
        const pointerInterval = setInterval(() => {
            let startbtn = document.getElementById('beginButton')

            if(name.length < 3 || isNaN(age) || age < 1 || age > 100 || isNaN(yearGroup) || yearGroup < 7 || yearGroup > 13) {
                startbtn.style.cursor = "not-allowed"
            } else {
                startbtn.style.cursor = "pointer"

                startbtn.addEventListener('click', (e) => {
                    e.preventDefault()
                    console.log("Started, Interval Clearing")
                    clearInterval(pointerInterval)
                })
            }
        }, 10)
    }

    nameInput.addEventListener('input', generateUsername);
    ageInput.addEventListener('input', generateUsername);
    yearInput.addEventListener('input', generateUsername);
})


// ---------------------------------------------------------------(Above is Details & Unique User Generator)---------------------------------------------------------------------------------