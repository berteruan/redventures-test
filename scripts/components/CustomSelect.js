export const CustomSelect = {
  component: () => {
    for (const dropdown of document.querySelectorAll(".select-wrapper")) {
      dropdown.addEventListener('click', function() {
          this.querySelector('.select').classList.toggle('open');
      })
    }

    for (const option of document.querySelectorAll(".option")) {
      option.addEventListener('click', function() {
          if (!this.classList.contains('selected')) {
              if (!!this.parentNode.querySelector('.option.selected')) {
                this.parentNode.querySelector('.option.selected').classList.remove('selected');
              }

              this.classList.add('selected');
              this.closest('.select').querySelector('.select-trigger span').textContent = this.textContent;
              window.dispatchEvent(new CustomEvent('customSelectUpdated'))
          }
      })
    }

    window.addEventListener('click', function(e) {
      for (const select of document.querySelectorAll('.select')) {
          if (!select.contains(e.target)) {
              select.classList.remove('open');
          }
      }
    });
  },
  init: () => {
    CustomSelect.component()
  }
}
