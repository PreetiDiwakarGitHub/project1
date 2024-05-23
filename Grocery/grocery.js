
const form = document.querySelector('.form');
const itemInput = document.getElementById('item');
const list = document.querySelector('.list');
const alert = document.querySelector('.text');
const clearItems = document.querySelector('.clear');

form.addEventListener('submit', addItem);
clearItems.addEventListener('click', clearAllItems);

function addItem(e) {
    e.preventDefault();
    const value = itemInput.value.trim();
    if (value !== '') {
        const listItem = document.createElement('li');
        listItem.className = 'list-item';
        listItem.textContent = value;
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteBtn.addEventListener('click', () => {
            listItem.remove();
            showAlert('Item removed', 'success');
        });
        listItem.appendChild(deleteBtn);
        list.appendChild(listItem);
        showAlert('Item added', 'success');
        itemInput.value = '';
    } else {
        showAlert('Please enter a value', 'danger');
    }
}

function clearAllItems() {
    list.innerHTML = '';
    showAlert('All items cleared', 'success');
}

function showAlert(message, type) {
    alert.textContent = message;
    alert.className = `alert alert-${type}`;
    alert.style.display = 'block';
    setTimeout(() => {
        alert.style.display = 'none';
    }, 1000);
}
