function interestsTree() {
  const interestsList = document.querySelector('.interests_main');

  interestsList.addEventListener('change', (e) => {
    const interest = e.target.closest('.interest');
    const interestChildren = interest.querySelectorAll('.interests');
    const interestParent = interest.querySelector('.interest__check');

    interestChildren.forEach((el) => {
      const interestsCheck = el.querySelectorAll('.interest__check');
      interestsCheck.forEach((el) => {
        el.checked = interestParent.checked;
      })
    })
  });
}

interestsTree()
