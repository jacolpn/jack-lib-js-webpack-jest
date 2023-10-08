/**
 * @class OnLeaveIntent
 * @description A class to check if the user is leaving the window
 * and run a callback when it happens.
 * @param callback - a function to run when the user is leaving the page
 * @param delay - time in milliseconds defined to start tracking the user
 */
class OnLeaveIntent {
  constructor(callback, delay) {
    this.callback = callback;
    this.delay = delay;

    this.init();
  }

  init = () => {
    this.timer = window.setTimeout(this.handleMouseOut, this.delay);
  }

  destroy = () => {
    clearTimeout(this.timer);
    document.removeEventListener('mouseout', this.checkOutOfBounds);
  }

  checkOutOfBounds = e => {
    if (e.relatedTarget === null) {
      this.callback();
      this.destroy();
    }
  }

  handleMouseOut = () => {
    document.addEventListener('mouseout', this.checkOutOfBounds);
  }
}

const ValidPhone = () => {
  return function cellPhoneValidate(control) {
    if (!control.value) {
      return null;
    }

    const CELL_PHONE_REGEXP = /\([1-9]{2}\)\s9[1-9][0-9]{3}-\d{4}/;

    if (CELL_PHONE_REGEXP.test(control.value)) {
      return null;
    }

    return {
      invalidCellPhone: true,
    };
  };
}

module.exports = { OnLeaveIntent, ValidPhone };
