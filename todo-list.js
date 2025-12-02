

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
    <div class="priority" id="0">
       <div class="sub-list-box" id="uncheck">
       <div class="p-tag">
            <img height= 30px src="https://img.icons8.com/ios_filled/512/FFFFFF/bookmark-ribbon.png" alt="">
        </div>
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
                            <p>Add Tag</p>
                        </div>
                        <div class="kebab-tag kebab-choice" onclick="set_priority(this)">
                            <img height="20px" width="20px" src="https://static.thenounproject.com/png/2456640-200.png" alt="">
                            <p>Priority</p>
                        </div>
                        <div class="kebab-tag kebab-choice" onclick="set_due_date(this)">
                            <img height="20px" width="20px" src="https://marketplace.canva.com/BMGvE/MAE5CWBMGvE/1/tl/canva-date-icon-MAE5CWBMGvE.png" alt="">
                            <p>Due Date</p>
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

            <div class="due-date-box" onclick="remove_due_date(this)">
            </div>
        </div>
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
    close_p_menu()
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




function priority_rate(el){
    
    parent = el.closest(".main-list")
    let task_list = parent.getElementsByClassName("priority")
    let task_box = parent.querySelector(".insert-task")
    
    rate = 3
    let list_array = []

    while(rate > -1){
        list_array.push(...pick_rate(rate,task_list))
        rate -= 1
    }

    let list_length = list_array.length
    console.log(list_length)
    
    for (let i = list_length - 1; i >= 0; i--){
        task_list[i].remove()
    }

    for (let i = 0; i < list_array.length; i++) {
        task_box.insertAdjacentHTML("beforebegin",list_array[i])
    }

}

function pick_rate(rate,task_list){
    let list_array = []

    for (let i = 0; i < task_list.length; i++) {
        if(task_list[i].id == rate){
            list_array.push(task_list[i].outerHTML)
        }
    }

    if(list_array != []){
        return list_array
    }

}

let task_need_p_tag

function set_priority(el){
    parent = el.closest(".priority")
    task_need_p_tag = parent
    open_p_menu()
    close_tag_menu()
}

function set_p_tag(){
    let p_select = document.getElementById("p-tag-slect")
    task_need_p_tag.id = p_select.value
    priority_rate(task_need_p_tag)
    close_p_menu()
    
}

function open_p_menu(){
    let p_menu = document.getElementsByClassName("p-tag-menu")[0]
    p_menu.style.display = "flex"
}

function close_p_menu(){
    let p_select = document.getElementById("p-tag-slect")
    let p_menu = document.getElementsByClassName("p-tag-menu")[0]
    p_menu.style.display = "none"
    p_select.value = "0"
}

let task_need_date 

function set_due_date(el){
    let parent = el.closest(".priority")
    task_need_date = parent.querySelector(".due-date-box")
    open_date_menu()
}

function set_date(){
    let input_date = document.getElementById("input-date")

    if (input_date.value == ""){
        let toast = document.getElementsByClassName("toast-box")[0]
        toast.id = "a-true"
        toast.addEventListener("animationend", reset_animation)
        return
    }

    task_need_date.innerHTML = input_date.value
    task_need_date.style.display = "block"
    close_date_menu()
}

function open_date_menu(){
    let menu = document.getElementsByClassName("date-menu")[0]
    menu.style.display = "flex"
}

function close_date_menu(){
    let menu = document.getElementsByClassName("date-menu")[0]
    menu.style.display = "none"

}

function remove_due_date(el){
    el.style.display = "none"
    el.innerHTML = ""
}

function add_new_warning_box(text){
    let contianer = document.getElementsByClassName("warning-container")[0]
    contianer.insertAdjacentHTML("beforeend", `<div class="warning-box">
            <div class="warning-color"></div>
            <img height="30px" src="https://cdn-icons-png.freepik.com/512/6897/6897039.png" alt="">
            <div class="w-text-box">
                <p class="warning">Notification</p>
                <p class="warning-text">`+text+`</p>
            </div>
            <img class="warning-cancel" height= 14px src="https://cdn-icons-png.flaticon.com/512/75/75519.png" alt="" onclick="cancel_warning(this)">
        </div>`)
}

function add_new_high_warning_box(text){
    let contianer = document.getElementsByClassName("warning-container")[0]
    contianer.insertAdjacentHTML("beforeend", `<div class="warning-box">
            <div class="warning-color-high"></div>
            <img height="30px" src="https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/red-alert-icon.png" alt="">
            <div class="w-text-box">
                <p class="warning">Notification</p>
                <p class="warning-text">`+text+`</p>
            </div>
            <img class="warning-cancel" height= 14px src="https://cdn-icons-png.flaticon.com/512/75/75519.png" alt="" onclick="cancel_warning(this)">
        </div>`)
}

function cancel_warning(el){
    parent = el.closest(".warning-box")
    parent.remove()
}

function defind_warning(){
    let task_list = document.getElementsByClassName("priority")
    for(let i = 0;i < task_list.length;i++){
        let task = task_list[i].querySelector(".due-date-box")
        let date = calculate_date(task.innerHTML)
        let task_name = task_list[i].querySelector(".sub-list-name")
        let check = task_list[i].querySelector(".sub-list-box")
        if(check.id == "check"){
            task.style.color = "#000000ff"
        }
        else if(date < 0){
            task.style.color = "#ff0000"
            add_new_high_warning_box("<b>"+ task_name.innerHTML + "</b>"+  " is over the due date!!!")
        }
        else if(date == 0){
            task.style.color = "#f7b02dff"
            add_new_warning_box("<b>"+ task_name.innerHTML  + "</b>" + " is due Today!!!")
        }
        else if(date <= 3){
            task.style.color = "#f7b02dff"
            add_new_warning_box("<b>"+ task_name.innerHTML  + "</b>" + " have only " + date + " day left!")
        }
        else{
            task.style.color = "#000000ff"
        }

}
}

function calculate_date(date){
    let today = new Date()
    let target = new Date(date)

    let t1 = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    let t2 = new Date(target.getFullYear(), target.getMonth(), target.getDate())

    let diff = t2 - t1
    let diff_days = diff / (1000 * 60 * 60 * 24)

    return diff_days
    
}

function clear_nofi(){
    let contianer = document.getElementsByClassName("warning-container")[0]
    contianer.innerHTML = ""
}

get_html()
clear_nofi()
defind_warning()
