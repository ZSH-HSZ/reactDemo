import {action, observable, decorate, computed} from "mobx";

class AppState {
  @observable userName = 'zhao'

  @computed get userNameText() {
    return this.userName ? this.userName : 'admin';
  }
  
  @action writeUser(val) {
    this.userName = val;
  }
}
export default new AppState()