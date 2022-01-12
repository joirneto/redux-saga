import React from "react"
import { connect } from "react-redux"
import {loadUARequest} from '../actions'

const UserAgent = (props) =>{
    return (
        <div>
            <span> User Agent: {props.data}</span> <br/>
            <button onClick={()=>props.loadData()} >LOAD</button>
        </div>

    )
}

const mapStateToProps = (state) =>{
    return{
        isFetching: state.ua.isFetching,
        data: state.ua.data,
        error: state.ua.error
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        loadData: () => dispatch(loadUARequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAgent)