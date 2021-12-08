import React from 'react';
import styles from './Dashboard.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const mockRemoteOrders = [
  {id: '1', status: 'done', cost: '$18'},
  {id: '3', status: 'delivered', cost: '$23'},
  {id: '4', status: 'ordered', cost: '$17'},
  {id: '5', status: 'done', cost: '$48'},
  {id: '7', status: 'delivered', cost: '$12'},
  {id: '9', status: 'done', cost: '$73'},
];

const mockOnlineOrders = [
  {id: '2', status: 'done', cost: '$18'},
  {id: '6', status: 'delivered', cost: '$23'},
  {id: '8', status: 'ordered', cost: '$17'},
];

const mockBookedAndEventsToday = [
  {id: '1', table: 1, startHour: '15', duration: '2'},
  {id: '2', table: 7, startHour: '12', duration: '1'},
  {id: '3', table: 3, startHour: '9', duration: '1'},
  {id: '4', table: 4, startHour: '17', duration: '3'},
  {id: '5', table: 2, startHour: '19', duration: '2'},
  {id: '6', table: 5, startHour: '11', duration: '1'},
];

const Dashboard = () => (

  <div>
    <h2 className={styles.header}>Remote Orders</h2>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Order</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockRemoteOrders.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.cost}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <h2 className={styles.header}>Online Orders</h2>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Order</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockOnlineOrders.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.cost}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <h2 className={styles.header}>Booked and Events Today</h2>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Start</TableCell>
            <TableCell>Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockBookedAndEventsToday.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {row.startHour}
              </TableCell>
              <TableCell>
                {row.duration}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Dashboard;
