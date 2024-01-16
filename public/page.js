const form=document.querySelector('form');
const cancel=form.querySelector('#cancel');
const save=form.querySelector('#save');
const nameInput=form.querySelector('input[name="name"]');
const emailInput=form.querySelector('input[name="email"]');
const list=document.querySelector('ul');
const items=list.querySelectorAll('li');

cancel.addEventListener('click',()=>{
  nameInput.value="";
  emailInput.value="";
  updateState(-1);
});

items.forEach(item=>{
  item.addEventListener('click',(e)=>{
    var itemIndex=item.getAttribute('data-index');
    if (e.target.classList.contains('update-btn')) {
      getData(itemIndex);
    }
  });

});

function updateState(url,parenIndex) {
  // items[parenIndex].querySelector('#id').value;
  form.action=(parenIndex==-1)? "/": `/${url}/${items[parenIndex].querySelector('#id').value}`;
 
}
function getData(index) {  
  nameInput.value=items[index].querySelector('.name-data').textContent;
  emailInput.value=items[index].querySelector('.email-data').textContent;
  updateState("update",index);
}