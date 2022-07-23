function addTask(){
    document.getElementById('update').innerHTML='';
    let task = document.getElementById('task').value;
    if(task==''){
        document.getElementById('update').innerHTML="Enter a task";

    }else{
let mybox=document.getElementById('mybox');
let li =document.createElement('li');
li.textContent= task;

 let a= document.createElement('a');
 a.textContent="X";
 a.href="javascript:void(0)";
 a.className="remove";
 li.appendChild(a);


 let pos =mybox.firstElementChild;
 if(pos==null){
    mybox.appendChild(li);
 }else{
    mybox.insertBefore(li,pos);
 }
 
    }
    document.getElementById('task').value="";
}

let btn= document.querySelector('ul');
btn.addEventListener('click',function(e){
    let mybox=document.getElementById('mybox');   
let li=e.target.parentNode;
mybox.removeChild(li);

});