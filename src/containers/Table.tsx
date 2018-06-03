import { connect } from 'react-redux';
import { Table as TableComponent } from '../components';
import { ApplicationState } from '../typings';

const mapStateToProps = (state: ApplicationState) => ({ cards: state.table });

export const Table = connect(mapStateToProps)(TableComponent);
