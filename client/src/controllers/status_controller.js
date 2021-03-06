class StatusController {
  constructor (connectivity) {
    Object.assign(this, { connectivity })
    
    this.UI = {
      [this.connectivity.STATUS_CODES.ONLINE]: { class: 'online', text: 'Online' },
      [this.connectivity.STATUS_CODES.TEMPORARY_OFFLINE]: { class: 'temporary-offline', text: 'Temporary offline' },
      [this.connectivity.STATUS_CODES.PERMANENTLY_OFFLINE]: { class: 'permanently-offline', text: 'Permanently offline' }
    }
  }

  class () {
    return this.UI[this.connectivity.status()].class
  }

  text () {
    return this.UI[this.connectivity.status()].text
  }
}

StatusController.$$ngIsClass = true
StatusController.$inject = ['Connectivity']

export default StatusController
