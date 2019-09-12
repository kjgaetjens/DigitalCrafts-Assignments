import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { fetchLocation } from '../store/actions/actionCreator'


function LocationList(props) {
    useEffect(() => {
        props.onLocationsLoaded()
    }, [])

    return (
        <div>
            {props.locations.map(location => {
                return <div>
                        {location.lat}, {location.long}
                    </div>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        locations: state.locations
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLocationsLoaded: () => dispatch(fetchLocation())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationList)