import { observable, action, configure } from 'mobx';
import moment from 'moment';
import api from './../api';

configure({ enforceActions: 'observed' })

class Header {
    @observable time = moment().format('HH:mm:ss');
    @action startTask = () => {
        setInterval(() => {
            this.changeTime();
          }, 1000)
    }
    @action changeTime = () => {
        this.time = moment().format('HH:mm:ss');
    }

    @observable userName = '未知用户';
    @action getUserName = () =>{
        api.get('/api/test/getName', {}).then((e) => {
            if(e && e.data){
                this.changeUserName(e.data.data);
            }
        });
    }
    @action changeUserName = (userName) => {
        this.userName = userName;
    }
}

const header = new Header()
export default header