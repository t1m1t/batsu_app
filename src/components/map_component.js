import React ,{ Component } from 'react' ;
import { withGoogleMap, GoogleMap, Marker, Circle, InfoWindow} from "react-google-maps";


class Maps extends Component {

  componentDidMount() {
   if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getUserPermision);
        } else { 
           console.log("Geolocation is not supported by this browser.");
        }
  }
    

  getUserPermision(position) {
    console.log("Latitude: " + position.coords.latitude + 
    " Longitude: " + position.coords.longitude);
     let userLocation = {
      lat:position.coords.latitude,
      lng:position.coords.longitude
    }
    
  }
    



  render(){
      const markers = this.props.markers[0].position || []
      const radius = this.props.radius || {}
      console.log(this.props.markers[0].position);
      return(
          <GoogleMap
                    defaultZoom={16}
                    defaultCenter={this.props.center}
          >
             <Marker
              position={markers}
              onC
               />
               
               <Circle
              center={markers}
              radius={60.96}
              options={{
                      fillColor: `yellow`,
                      fillOpacity: 0.20,
                      strokeColor: `orange`,
                      strokeOpacity: 1,
                      strokeWeight: 1,
                      }}
              />

              }
              }
          </GoogleMap>

      )
  }
}

export default withGoogleMap(Maps) 