function Modal(){
    return (
        <div className='modal'>
            <div class="modal-window">
                <h2 class="modal-title">Ad New Task <span className='close-window'>X</span></h2>
                <label for="task" class="label">Write task</label>
                <textarea id='task' cols='30' rows='10'/>
                <label for="comment" class="label">Add comment</label>
                <textarea id='comment' cols='30' rows='10'/>
                <button className='newTask-modal'>Add</button>
            </div>
        </div>
        )
}
export {Modal}