let addNoteCircle = document.getElementById("add-note-circle");


addNoteCircle.addEventListener("click", () => {


    // Creating and Adding a new Note
    let allNotesContainer = document.getElementById("all-notes-container");
    let noteDiv = document.createElement("div");
    noteDiv.setAttribute("class", "note-div");

    let data = `<div class="edit-del-container">

         <div class="edit-del-div">

           <div class="edit-circle"><i color="purple" class="fa-regular fa-pen-to-square"></i></div>
           <div class="del-circle"><i class="fa-regular fa-trash-can"></i></div>

         </div>

        </div>

        <textarea name="" class="inputText" cols="3" rows="3" placeholder="Write Here........"></textarea>`

    noteDiv.insertAdjacentHTML("afterbegin", data);
    allNotesContainer.appendChild(noteDiv);



    // deleting the note
    let delCircle = noteDiv.getElementsByClassName("del-circle")[0];

    delCircle.addEventListener("click", () => {

        noteDiv.remove();

    })




    // editing the note

    let editCircle = noteDiv.getElementsByClassName("edit-circle")[0];
    let inputText = noteDiv.getElementsByClassName("inputText")[0];
    let isDisabled = false;


    editCircle.addEventListener("click", () => {

        if (isDisabled == false) {
            inputText.style.opacity = "0.7";
            inputText.disabled = true
            isDisabled = true
        }
        else {
            inputText.style.opacity = "1";
            inputText.disabled = false;
            isDisabled = false
        }
    })




})



