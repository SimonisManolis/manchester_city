import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import AdminLayout from '../../../HOC/admin_layuot';
import {firebaseMatches} from '../../../firebase';
import {firebaseLooper, reverseArray} from '../../ui/misc';

//table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//loading 
import CircuralProgress from '@material-ui/core/CircularProgress';
class AdminMatches extends Component {
    
    state={
        isLoading:true,
        matches:[]
    }

    componentDidMount(){
        firebaseMatches.once('value').then(snapshot=>{
            const matches = firebaseLooper(snapshot);

            this.setState({
                isLoading:false,
                matches:reverseArray(matches)
            })
        })
    }
    
    render(){
        console.log(this.state)
        return(
           <AdminLayout>
               <div>

                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Match</TableCell>
                                    <TableCell>Result</TableCell>
                                    <TableCell>Final</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.matches.map((match,i)=>(
                                        <TableRow key={i}>
                                            <TableCell>{match.date}</TableCell>
                                            <Link to={`/admin_matches/edit_match/${match.id}`}>
                                                <TableCell>{match.local}<strong> - </strong> {match.away}</TableCell>
                                            </Link>
                                            <TableCell>{match.resultLocal} - {match.resultAway}</TableCell>
                                            <TableCell>
                                                {
                                                    match.final === 'No' ?
                                                        <span className="matches_tag_green">Not played yet</span>
                                                    :
                                                        <span className="matches_tag_red">Final</span>
                                                }
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </Paper>

                    <div className="admin_progress">
                        {
                            this.state.isLoading ?
                                <CircuralProgress thickness={7} style={{color:'#98c5e9'}}/>
                                :''
                        }

                    </div>
               </div>
               
           </AdminLayout>
        )
    }
}

export default AdminMatches;