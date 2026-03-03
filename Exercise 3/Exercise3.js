let counter = 0;
let choice;


do {

    let menuMessage = "Current Counter: " + counter + "\n\n" +
        "Choose an option:\n" +
        "1. Increment counter\n" +
        "2. Decrement counter\n" +
        "4. Exit";


    choice = parseInt(prompt(menuMessage));


    switch (choice) {
        case 1:
            counter++;
            break;

        case 2:
            counter--;
            break;

        case 4:

            alert("Exiting the menu. Final counter value: " + counter);
            break;

        default:

            alert("Invalid choice! Please enter 1, 2, or 4.");
            break;
    }


} while (choice !== 4);