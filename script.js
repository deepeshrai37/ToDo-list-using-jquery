
let ulTasks= $('#ulTasks')
let btnAdd= $('#btnAdd')
let btnClear= $('#btnClear')
let btnSort= $('#btnSort')
let btnCleanup= $('#btnCleanup')
let inpNewTask= $('#inpNewTask')


btnAdd.click(() =>
{
   let listItem= $('<li>' ,{
        'class':'list-group-item',
        text:inpNewTask.val()
    })

    listItem.click(() => {
        listItem.toggleClass('done')
    }
    )
    ulTasks.append(listItem)
    inpNewTask.val("")


})
function clearDone(){
 $(' #ulTasks .done').remove()

}

function sortTasks(){
    $(' #ulTasks .done').appendTo(ulTasks)
}
btnClear.click(()=> inpNewTask.val(""))
btnCleanup.click(clearDone)
btnSort.click(sortTasks)