// Wraps the JQuery interface of Foundation in order to seperate it from angular.

class Modals {
  constructor ($window, $timeout) {
    Object.assign(this, { $window, $timeout })
    this.modals = {}
  }

  open (modalSymbol) {
    return this.initializeModal(modalSymbol)
      .then(modal => {
        modal.open()
        return modal
      })
  }

  close (modalSymbol) {
    return this.initializeModal(modalSymbol)
      .then(modal => {
        modal.close()
        return modal
      })
  }

  initializeModal (modalSymbol) {
    return new Promise(resolve => {
      if (modalSymbol instanceof this.$window.Foundation.Reveal) {
        resolve(modalSymbol)
      } else {
        this.$timeout(() => {
          if (!this.modals.hasOwnProperty(modalSymbol)) {
            this.modals[modalSymbol] = new this.$window.Foundation.Reveal(this.$window.$(modalSymbol))
          }
          resolve(this.modals[modalSymbol])
        })
      }
    })
  }
}

Modals.$$ngIsClass = true
Modals.$inject = ['$window', '$timeout']

export default Modals
