

function input_new_main_list(el){
    let parent = el.closest(".add-new-main-list")
    let input =  parent.querySelector("#new-list-name")
    let add_list = document.getElementsByClassName("add-new-main-list")[0]
    if(add_list.id == "choose"){
        add_list.id = "unchoose"
        input.value = ""
    }
    else{
        add_list.id = "choose"
    }
    console.log(add_list)
}


function add_new_main_list(el){
    let parent = el.closest(".input-main-list-name")
    let input =  parent.querySelector("#new-list-name")
    let list_name = input.value
    let insert = document.getElementById("insert-new-list-here")

    if(input.value == ""){
        let toast = document.getElementsByClassName("toast-box")[0]
        toast.id = "a-true"
        toast.addEventListener("animationend", reset_animation)
        return
    }

    insert.insertAdjacentHTML("beforebegin", `
        <div class="main-list">
            <div class="list-title-box">
                <div class="list-top">
                    <p class="rename-list" onclick="rename_list(this)"><img height="20px" width="20px" src="https://static.thenounproject.com/png/3053734-200.png" alt=""></p>
                    <p id="list-title">`+list_name+`</p>
                    <p class="delete-list" onclick="deleted_list(this)"><img  height="20px" width="20px" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt=""></p>
                </div>
                
                <div class="rename-list-main-box">
                    <div class="rename-list-box">
                        <input type="text" class="new-rename-list" placeholder="Title">
                    </div>
                    <div class="rename-list-button-box">
                        <div class="rename-list-button" onclick="add_name_to_list(this)">
                            <label>Rename</label>
                        </div>
                    </div>
                    <div class="rename-list-cancel" onclick="cancel_rename_list(this)">
                        <img height= 16px src="https://cdn-icons-png.flaticon.com/512/75/75519.png" alt="">
                    </div>
                </div>
                
            </div>   
        
            <div class="insert-task"></div>
        
            <div class="add-task-box" id="unchoose">
                <p id="add-task" onclick="input_new_task(this)">+ Add task</p>
                <div class="input-main-list-name">
                    <input type="text" id="new-list-name" placeholder="Task">
                    <div class="input-main-list-button-box">
                        <div class="input-main-list-button" onclick="add_new_task(this)">
                            <label>Add task</label>
                        </div>
                        <div class="input-main-list-cancel" onclick="input_new_task(this)">
                            <img height= 16px src="https://cdn-icons-png.flaticon.com/512/75/75519.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `)
        
        input.value = ""
        input_new_main_list(el)
    }
    
    function deleted_list(el){
        close_tag_menu()
        let parent = el.closest(".main-list")
        parent.remove()
}


function input_new_task(el){
    let parent = el.closest(".add-task-box")
    let input = parent.querySelector("#new-list-name")
    if(parent.id == "choose"){
        parent.id = "unchoose"
        input.value = ""
    }
    else{
        parent.id = "choose"
    }
}



function add_new_task(el){
    let parent = el.closest(".main-list")
    let task_box = parent.querySelector(".insert-task")
    let input = parent.querySelector("#new-list-name")
    let task_name = input.value
    
    if(input.value == ""){
        let toast = document.getElementsByClassName("toast-box")[0]
        toast.id = "a-true"
        toast.addEventListener("animationend", reset_animation)
        return
    }

    task_box.insertAdjacentHTML("beforebegin", `
       <div class="sub-list-box" id="uncheck">
            <div class="sub-list-title">
                <div class="sub-list-check" onclick="check_list(this)">
                    <div class=c-icon-r></div>
                    <div class=c-icon-l></div>
                    <div class="effect-box">
                        <div class="effect e-1"></div>
                        <div class="effect e-2"></div>
                        <div class="effect e-3"></div>
                        <div class="effect e-4"></div>
                        <div class="effect e-5"></div>
                        <div class="effect e-6"></div>
                        <div class="effect e-7"></div>
                        <div class="effect e-8"></div>
                    </div>
                </div>
                <div class="sub-list-text">
                    <p class="sub-list-name">`+task_name+`</p>
                </div>
                <div class="sub-list-kebab" id="s-false" onclick="kebab_open(this)">
                    <img  height="15px" width="15px" src="https://cdn-icons-png.flaticon.com/512/3661/3661472.png" alt="">
                    <div class="kebab-menu">
                        <div class="kebab-rename kebab-choice" onclick="rename_task(this)">
                            <img height="20px" width="20px" src="https://static.thenounproject.com/png/3053734-200.png" alt="">
                            <p>Rename</p>
                        </div>
                        <div class="kebab-tag kebab-choice" onclick="add_tag_menu(this)">
                            <img height="20px" width="20px" src="https://cdn-icons-png.flaticon.com/512/876/876770.png" alt="">
                            <p>Add tag</p>
                        </div>
                        <div class="kebab-del kebab-choice" onclick="delete_task(this)">
                            <img height="20px" width="20px" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="">
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="rename-main-box">
                <div class="rename-task-box">
                    <input type="text" class="new-rename-task" placeholder="Task">
                </div>
                <div class="rename-task-button-box">
                    <div class="rename-task-button" onclick="add_name_to_task(this)">
                        <label>Rename</label>
                    </div>
                </div>
                <div class="rename-task-cancel" onclick="cancel_rename_task(this)">
                    <img height= 16px src="https://cdn-icons-png.flaticon.com/512/75/75519.png" alt="">
                </div>
            </div>

            <div class="sub-list-tag-box"></div>

        </div>
        `)  
    input.value = ""
    input_new_task(el)
}

function delete_task(el){
    close_tag_menu()
    let parent = el.closest(".sub-list-box")
    parent.remove()
}

function check_list(el){
    let parent = el.closest(".sub-list-box")
    console.log(parent)
    if(parent.id == "check"){
        parent.id = "uncheck"
    }
    else{
        parent.id = "check"
    }
}

function reset_animation(){
    let toast = document.getElementsByClassName("toast-box")[0]
    toast.id = "a-false"
}

function kebab_open(el){

    let kebab = el.querySelector(".kebab-menu")

    if(el.id == "s-false"){
        kebab.style.display = "flex"
        el.id = "s-true"
    }
    else{
        kebab.style.display = "none"
         el.id = "s-false"
    }

}

let tag_color ="#baf3db"

function rgbToHex(rgbString) {
    let rgb = rgbString.match(/\d+/g); 
    return "#" + rgb.map(x =>
        Number(x).toString(16).padStart(2, "0")
    ).join("");
}

function isHexColor(str) {
    return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(str);
}

function reset_color(){
    let color_array = document.getElementsByClassName("color-box")
    for (let i = 0; i < color_array.length; i++) {
        color_array[i].id = "c-false"
    }
}

function choose_color(el){
    let color_array = document.getElementsByClassName("color-box")
    let color_hex = document.getElementById("color-hex")

    for (let i = 0; i < color_array.length; i++) {
        color_array[i].id = "c-false"
    }

    el.id = "c-true"
    color_hex.value = rgbToHex(el.style.backgroundColor)
}

function close_tag_menu(){
    let tag_name = document.getElementById("tag-name")
    let menu = document.getElementsByClassName("tag-menu")[0]
    let hex_warning = document.getElementById("hex-warning")
    tag_name.value = ""
    menu.style.display = "none"
    hex_warning.style.display = "none"
}

function open_tag_menu(){
    let menu = document.getElementsByClassName("tag-menu")[0]
    menu.style.display = "flex"
}

let sub_list_need_tag

function add_tag_menu(el){
    parent = el.closest(".sub-list-box")
    sub_list_need_tag = parent.querySelector(".sub-list-tag-box")
    open_tag_menu()
}

function add_tag_to_list(){
    let tag_name = document.getElementById("tag-name")
    let color_hex = document.getElementById("color-hex")

    if(tag_name.value == ""){
        let toast = document.getElementsByClassName("toast-box")[0]
        toast.id = "a-true"
        toast.addEventListener("animationend", reset_animation)
        return
    }

    if(isHexColor(color_hex.value) == false){
        let hex_warning = document.getElementById("hex-warning")
        hex_warning.style.display = "block"
        return
    }

    tag_color = color_hex.value

    sub_list_need_tag.insertAdjacentHTML("beforeend",`
    <div class="sub-list-tag" style="background-color:`+tag_color+`; color:white;" >
        <label>`+tag_name.value+`</label>
        <img height="14px" width="14px" src="https://img.icons8.com/ios11/512/FFFFFF/delete-sign.png" alt="" onclick="delete_tag(this)"></img>
    </div>`)

        
    tag_name.value = ""
    close_tag_menu()
}


function get_rename_need(el){
    parent = el.closest(".sub-list-box")

    let title_box = parent.querySelector(".sub-list-title")
    let rename_box = parent.querySelector(".rename-main-box")

    return [title_box,rename_box]
}

function rename_task(el){

    let [title_box,rename_box] = get_rename_need(el)
    let rename = parent.querySelector(".new-rename-task")
    let sub_list_need_rename = parent.querySelector(".sub-list-name")
    rename.value = sub_list_need_rename.innerHTML

    title_box.style.display = "none"
    rename_box.style.display = "flex"

}

function cancel_rename_task(el){
    let [title_box,rename_box] = get_rename_need(el)
    let rename = parent.querySelector(".new-rename-task")

    title_box.style.display = "flex"
    rename_box.style.display = "none"
    rename.value = ""

}

function add_name_to_task(el){

    parent = el.closest(".sub-list-box")

    let rename = parent.querySelector(".new-rename-task")
    let new_name = rename.value

    if(rename.value == ""){
        let toast = document.getElementsByClassName("toast-box")[0]
        toast.id = "a-true"
        toast.addEventListener("animationend", reset_animation)
        return
    }

    let sub_list_need_rename = parent.querySelector(".sub-list-name")
    sub_list_need_rename.innerHTML = new_name
    
    rename.value = ""
    cancel_rename_task(el)

}


function get_rename_list_need(el){
    parent = el.closest(".list-title-box")

    let title_box = parent.querySelector(".list-top")
    let rename_box = parent.querySelector(".rename-list-main-box")

    return [title_box,rename_box]
}

function rename_list(el){

    let [title_box,rename_box] = get_rename_list_need(el)
    let rename = parent.querySelector(".new-rename-list")
    let sub_list_need_rename = parent.querySelector("#list-title")
    rename.value = sub_list_need_rename.innerHTML

    title_box.style.display = "none"
    rename_box.style.display = "flex"

}

function cancel_rename_list(el){
    let [title_box,rename_box] = get_rename_list_need(el)
    let rename = parent.querySelector(".new-rename-list")

    title_box.style.display = "flex"
    rename_box.style.display = "none"
    rename.value = ""
}

function add_name_to_list(el){

    parent = el.closest(".list-title-box")

    let rename = parent.querySelector(".new-rename-list")
    let new_name = rename.value

    if(rename.value == ""){
        let toast = document.getElementsByClassName("toast-box")[0]
        toast.id = "a-true"
        toast.addEventListener("animationend", reset_animation)
        return
    }

    let sub_list_need_rename = parent.querySelector("#list-title")
    sub_list_need_rename.innerHTML = new_name
    
    rename.value = ""
    cancel_rename_list(el)

}


function delete_tag(el){
    let parent = el.closest(".sub-list-tag")
    parent.remove()
}

get_html()

function save_html(){
    let html_string = document.body.innerHTML
    let storage_ket = 'page_body'

    localStorage.setItem(storage_ket, html_string)
}

function get_html(){
    let saved_html = localStorage.getItem('page_body')
    if (saved_html !== null) {
        document.body.innerHTML = saved_html
}
}

const observer = new MutationObserver(save_html);

observer.observe(document.body,{
  childList: true,
  attributes: true,
  subtree: true,
  characterData: true
});