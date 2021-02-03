import {action, configure, observable} from 'mobx'

configure({enforceActions: true})

class appStore{

    @observable counter

    constructor(){
        this.counter = 1
    }
    @action.bound add(){
        console.log(this.counter)
        this.counter++
    }
}
export default new appStore()