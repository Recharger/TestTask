import React from 'react';
import { LineChart } from "react-chartjs";
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import APIService from '../services/APIService';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Bar } from 'react-chartjs-2';



class ExampleComponent extends React.Component {
  state = {
      keywords: [],
      tempKeyword: '',
      period: 'today 5-y',
      chartData: null
  }

  constructor(props) {
    super(props);
    this.handleAddNewKeyword = this.handleAddNewKeyword.bind(this);  
    this.handleChangePeriod = this.handleChangePeriod.bind(this);  
    this.applyFilter = this.applyFilter.bind(this);  
    
  }

  static getDerivedStateFromProps(props, state) {
     
    let chartData = {};
    let { example } = props; 
    if (example.interestData !== null && example.interestData.length !== 0) {
      
      let data = JSON.parse(example.interestData.response)
      let keys = Object.keys(data)
      let datasets = [], labels = [] 
      for (let key in data) {
        if (key === 'isPartial') continue 
        let dataArray = []
        for (let element in data[key]) { 
          console.log(element)
          labels.push(new Date(parseInt(element)))
          dataArray.push(data[key][element])
        }
        chartData['labels'] = labels
        chartData['datasets'] = [{ data: dataArray, label: key }]
        chartData.datasets.map((data) => console.log('hellow'))
        state.chartData = chartData
        console.log(state)
        return state 
      }
      
    } else {
      return null
    }
  }

  handleChangePeriod(event) {
    this.setState({ period: event.target.value });
  }

  handleAddNewKeyword(event) {
    console.log(this.state);
    if (this.state.tempKeyword !== '') {
      let newKeywords = this.state.keywords
      newKeywords.push(this.state.tempKeyword)
      this.setState({ keywords: newKeywords })
    }
  }

  applyFilter(event) { 
    let data = {
      'timePeriod': this.state.period,
      'keywords': this.state.keywords
    }
    APIService.sendRequest('get_trends_data', data);
  }

  handleDelete = data => () => {
    this.setState(state => {
      const keywords = [...state.keywords];
      const chipToDelete = keywords.indexOf(data);
      keywords.splice(chipToDelete, 1);
      return { keywords};
    });
  };

  render() {
    const { example, classes } = this.props;
    const { chartData } = this.state;
    console.log(chartData) 
    return (
      <div>
        <FormControl> 
          <InputLabel htmlFor="age-helper">Age</InputLabel>
          <Select
            value={this.state.period}
            onChange={this.handleChangePeriod}
            input={<Input name="age" id="age-helper" />}
          >
            <MenuItem value='today 5-y'>Last 5 years</MenuItem>
            <MenuItem value='today 1-m'>Last Month</MenuItem>
            <MenuItem value='today 1-w'>Last Week</MenuItem>
            <MenuItem value='today 1-d'>Last Day</MenuItem>
          </Select>
        </FormControl>
          <Paper> 
          {this.state.keywords.map((data, key) => {
              return (<Chip
                key={key}
                label={data}
                onDelete={this.handleDelete(data)}
              />)
          })}
        </Paper>
        <TextField
          id="name"
          label="Name"
          value={this.state.name}
          onChange={(event) => this.setState({ tempKeyword: event.target.value })}
          margin="normal"
        />
        <Button onClick={this.handleAddNewKeyword} >
          Add new keyword 
        </Button>
        <Button onClick={this.applyFilter}>
          Apply
        </Button>
        {chartData && ( 
        <Bar
          data={chartData}
          width={100}
          height={50}
          options={{
              maintainAspectRatio: false
          }}
        />)}
      </div>
    );
  }
};


const mapStateToProps = store => ({
  example: store.example,
});

export default connect(mapStateToProps)(ExampleComponent);
