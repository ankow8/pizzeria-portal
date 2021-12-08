import React, {useState} from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

const mockTable = [
  {startHour: '9:00', table1: 'free', table2: 'free', table3: 'busy', table4: 'free', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '9:30', table1: 'free', table2: 'free', table3: 'busy', table4: 'free', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '10:00', table1: 'free', table2: 'free', table3: 'free', table4: 'free', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '10:30', table1: 'free', table2: 'free', table3: 'free', table4: 'free', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '11:00', table1: 'free', table2: 'free', table3: 'free', table4: 'free', table5: 'busy', table6: 'free', table7: 'free'},
  {startHour: '11:30', table1: 'free', table2: 'free', table3: 'free', table4: 'free', table5: 'busy', table6: 'free', table7: 'free'},
  {startHour: '12:00', table1: 'free', table2: 'free', table3: 'free', table4: 'free', table5: 'free', table6: 'free', table7: 'busy'},
  {startHour: '12:30', table1: 'free', table2: 'free', table3: 'free', table4: 'free', table5: 'free', table6: 'free', table7: 'busy'},
  {startHour: '13:00', table1: 'free', table2: 'free', table3: 'free', table4: 'free', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '13:30', table1: 'free', table2: 'free', table3: 'free', table4: 'free', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '14:00', table1: 'free', table2: 'free', table3: 'free', table4: 'free', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '14:30', table1: 'free', table2: 'free', table3: 'free', table4: 'free', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '15:00', table1: 'busy', table2: 'free', table3: 'free', table4: 'free', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '15:30', table1: 'busy', table2: 'free', table3: 'free', table4: 'free', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '16:00', table1: 'busy', table2: 'free', table3: 'free', table4: 'free', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '16:30', table1: 'busy', table2: 'free', table3: 'free', table4: 'free', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '17:00', table1: 'free', table2: 'free', table3: 'free', table4: 'busy', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '17:30', table1: 'free', table2: 'free', table3: 'free', table4: 'busy', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '18:00', table1: 'free', table2: 'free', table3: 'free', table4: 'busy', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '18:30', table1: 'free', table2: 'free', table3: 'free', table4: 'busy', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '19:00', table1: 'free', table2: 'busy', table3: 'free', table4: 'busy', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '19:30', table1: 'free', table2: 'busy', table3: 'free', table4: 'busy', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '20:00', table1: 'free', table2: 'busy', table3: 'free', table4: 'free', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '20:30', table1: 'free', table2: 'busy', table3: 'free', table4: 'free', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '21:00', table1: 'free', table2: 'free', table3: 'free', table4: 'free', table5: 'free', table6: 'free', table7: 'free'},
  {startHour: '21:30', table1: 'free', table2: 'free', table3: 'free', table4: 'free', table5: 'free', table6: 'free', table7: 'free'},
];

/*<h2>Tables view</h2>
<Link to={process.env.PUBLIC_URL + '/tables/booking/:id'} activeClassName='active'>Tables booking id</Link>
<Link to={process.env.PUBLIC_URL + '/tables/booking/new'} activeClassName='active'>Tables booking new</Link>
<Link to={process.env.PUBLIC_URL + '/tables/events/:id'} activeClassName='active'>Tables events id</Link>
<Link to={process.env.PUBLIC_URL + '/tables/events/new'} activeClassName='active'>Tables events new</Link>*/

const Tables = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };

  return (
    <div>
      <h2 className={styles.header}>Chose your date and hour</h2>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker className={styles.datePicker}
          label="Day to book"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <KeyboardTimePicker
          id="time-picker"
          label="Hour to book"
          minutesStep={30}
          minTime={'9:00'} // nie dziala
          maxTime={'21:30'}
          value={selectedDate}
          onChange={handleDateChange}
        />
      </MuiPickersUtilsProvider>
      <h2 className={styles.header}>Chose your table</h2>
      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Hour</TableCell>
              <TableCell>Table 1</TableCell>
              <TableCell>Table 2</TableCell>
              <TableCell>Table 3</TableCell>
              <TableCell>Table 4</TableCell>
              <TableCell>Table 5</TableCell>
              <TableCell>Table 6</TableCell>
              <TableCell>Table 7</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockTable.map(row => (
              <TableRow key={row.startHour}>
                <TableCell component="th" scope="row">
                  {row.startHour}
                </TableCell>
                <TableCell>
                  {row.table1 && (
                    <Button variant="outlined" component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table1}`}>
                      {row.table1}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table2 && (
                    <Button variant="outlined" component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table2}`}>
                      {row.table2}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table3 && (
                    <Button variant="outlined" component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table3}`}>
                      {row.table3}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table4 && (
                    <Button variant="outlined" component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table4}`}>
                      {row.table4}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table5 && (
                    <Button variant="outlined" component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table5}`}>
                      {row.table5}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table6 && (
                    <Button variant="outlined" component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table6}`}>
                      {row.table6}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table7 && (
                    <Button variant="outlined" component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table7}`}>
                      {row.table7}
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Paper>
        <div>
          <Button className={styles.button} color="primary" variant="contained" component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>Reservations</Button>
          <Button className={styles.button} color="primary" variant="contained" component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`}>Events</Button>
        </div>
      </Paper>
    </div>
  );
};

export default Tables;
