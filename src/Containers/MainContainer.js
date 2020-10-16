import { connect } from 'react-redux';
import { fetchActionMovies, addActionMovies, fetchSuccessAction, fetchFailedAction } from '../Actions/Index';


const mapStateToProps = (state) => {
    return {
        movies:state.movieName.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovies:()=>{
            dispatch(fetchActionMovies())
        },
        onAddMovies:()=>{
            dispatch(addActionMovies())
        }
        
    }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainer)
export default MainContainer;