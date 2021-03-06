import React ,{ Component } from 'react' ;
import { withGoogleMap, GoogleMap, Marker, Circle} from "react-google-maps";
import LoadingImg from './imgs/loading2.gif';

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
        //     " Longitude: " + position.coords.longitude);
        this.setState({position:{
            lat:position.coords.latitude,
            lng:position.coords.longitude
        }});
    }

    render(){
        const image = {
            url: './imgs/person3.ico',
            scaledSize: new google.maps.Size(52, 53)
        };
        const markers = this.props.markers[0].position || []
        const radius = this.props.radius || {}

        const { lat, lng } = this.state.position;

        if (!lat){
            return <img id="loading" className="map_loading_img" src={LoadingImg} alt=""/>
            
        }
        return(
            <GoogleMap
                defaultZoom={15}
                defaultCenter={{lat, lng}}>
                <Marker
                    position={{lat, lng}}
                    icon={image}/>
            </GoogleMap>
        )
    }
}

export default withGoogleMap(Maps)