var hour = new Date () . getHours ()
hour = 19

if (hour < 12 && hour > 1) {
   
    if (hour != 19) {
        document.write ("Bine ai venit la curs!")
    }
    if (hour < 2) {
        year = document.getElementById ("year").value
    } else if (hour < 12) {
        document.write("Buna dimineata!")
    } else if (hour < 18) {
        document.write("Buna ziua")
    } else if (hour < 24) {
        document.write ("Buna seara!")
    }
    document.write("Buna dimineata!")
} else if (hour > 12 && hour < 18) {
    document.write("Buna ziua")
} else if (hour >= 18 && hour <= 23) {
      document.write ("Buna seara!")
} else {
    document.write("Somn usor")
}
