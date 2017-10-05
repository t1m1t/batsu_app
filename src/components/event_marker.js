import React ,{ Component } from 'react' ;
import { withGoogleMap, GoogleMap, Marker, Circle} from "react-google-maps";


class Maps extends Component {
    constructor(props){
        super(props);
        this.state = {
            position: {}
        };

        this.getUserPermision = this.getUserPermision.bind(this);

    }

    componentWillMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getUserPermision);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    getUserPermision(position) {
        this.setState({position:{
            lat:position.coords.latitude,
            lng:position.coords.longitude
        }});

    }

    render(){
        const radius = this.props.radius || {}
        const { lat, lng } = this.state.position;

        if (!lat){
            return(
                <h4>LOADING ...</h4>
            )
        }
        return(
            <GoogleMap
                defaultZoom={16}
                defaultCenter={this.props.center}>
                
                <Marker
                    position={this.props.position} />

                <Circle
                    center={this.props.position}
                    radius={60.96}
                    options={{
                        fillColor: `blue`,
                        fillOpacity: 0.20,
                        strokeColor: `orange`,
                        strokeOpacity: 1,
                        strokeWeight: 1,
                    }} />
            </GoogleMap>
        )
    }
}

export default withGoogleMap(Maps) 