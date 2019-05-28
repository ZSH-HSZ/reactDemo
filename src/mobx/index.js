import {action, observable, decorate, computed} from "mobx";

class AppState {
  userName = ''

  get userNameText() {
    return this.userName ? this.userName : 'admin';
  }
  
  writeUser(val) {
    this.userName = val;
  }
}

decorate(AppState, {
  userName: observable,
  userNameText: computed,
  writeUser: action,
})
export default new AppState()