import React from "react"
import { connect } from "react-redux"
import {loadDataRequest} from '../actions'

const Info = (props) =>{
    return (
        <div>
            <span> MY IP: {props.data}</span> <br/>
            <button onClick={()=>props.loadData()} >LOAD</button>
        </div>

    )
}

const mapStateToProps = (state) =>{
    return{
        isFetching: state.ip.isFetching,
        data: state.ip.data,
        error: state.ip.error
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        loadData: () => dispatch(loadDataRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)