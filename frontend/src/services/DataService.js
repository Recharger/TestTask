import io from 'socket.io-client';
import APIService from './APIService';
import { receiveResponse, setRequestError } from '../actions/APIServiceActions';
import { dispatch } from '../services/ReduxService';

class DataService {
  constructor() {
    this.socket = null;
  }

  getData = (step) => {
 };
    
}

export default new DataService();
