import {action, observable} from 'mobx'

class AppStore{

    @observable counter

    constructor(){
        this.counter = 1
    }
    @action.bound add(){
        console.log(this.counter)
        this.counter++
    }
}
export default new AppStore()