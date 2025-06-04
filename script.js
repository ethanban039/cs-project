setInterval(() => {
    let irlname = document.getElementById('nameinput').value
    let irlage = document.getElementById('ageinput').value
    let irlBirthMonth = document.getElementById('bminput').value
    const unquser = irlname.substring(0, 3) + irlage + `-${irlBirthMonth}`

    const unqUserDOM = document.getElementById('unquserGenerated').textContent = `Your Unique User Is: ${unquser}`
}, 150)