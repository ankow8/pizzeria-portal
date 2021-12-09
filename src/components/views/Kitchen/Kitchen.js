import React from 'react';
import styles from './Kitchen.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

const mockOrders = [
  {id: '1', source: 'remote', table: '5', status: 'done', info:'tomato soup, vege balls'},
  {id: '2', source: 'online', table: '#01', status: 'done', info:'pepperoni, cola'},
  {id: '3', source: 'remote', table: '1', status: 'delivered', info:'salmon, salad'},
  {id: '4', source: 'remote', table: '3', status: 'ordered', info:'kartofelsalad'},
  {id: '5', source: 'remote', table: '7', status: 'done', info:'chicken, potatoes'},
  {id: '6', source: 'online', table: '#03', status: 'delivered', info:'kebab'},
  {id: '7', source: 'remote', table: '4', status: 'delivered', info:'pizza frutti di mare'},
  {id: '8', source: 'online', table: '#02', status: 'ordered', info:'sandwiches'},
  {id: '9', source: 'remote', table: '2', status: 'done', info:'pro secco'},
];

const Kitchen = () => (

  <div>
    <h2 className={styles.header}>Kitchen view</h2>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Source</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Info</TableCell>
            <TableCell>Realization</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockOrders.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.source}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.info}
              </TableCell>
              <TableCell>
                <Checkbox {...mockOrders} color="succes"/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Kitchen;
