// burger-menu
const burgerMenu = document.querySelector('.burger-menu');
const blackout = document.querySelector('.blackout');

const changeHeaderBackground = (element) => {
  if (havingClass(element, 'active')) {
    setTimeout(() => element.classList.remove('active'), 500);
  } else {
    element.classList.add('active');
  }
}

const havingClass = (element, name) => {
  return element.classList.contains(name);
}

burgerMenu.addEventListener('click', () => {
    changeHeaderBackground(blackout);
});

// modal
const openModal = (id) => {
  const modal = document.getElementById(`modal-${id}`);
  modal.style.opacity = 1;
  modal.style.visibility = 'visible';
}

const closeModal = (id) => {
  const modal = document.getElementById(`modal-${id}`);
  modal.style.opacity = 0;
  modal.style.visibility = 'hidden';
}


document.querySelectorAll('.open-modal').forEach((elem) => {
  console.log('elem', elem)
  const id = elem.dataset.targetId;
  elem.addEventListener('click', () => {
    openModal(id);
  });
});

document.querySelectorAll('.close-modal').forEach((elem) => {
  const id = elem.dataset.targetId;
  elem.addEventListener('click', () => {
    closeModal(id);
  });
  
  document.addEventListener('click', (e) => {
    const modal = document.getElementById(`modal-${id}`);
    if (e.target === modal) {
      closeModal(id);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      closeModal(id);
    }
  });
})
