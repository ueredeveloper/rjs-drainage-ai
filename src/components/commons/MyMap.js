import React from "react";
import { GoogleMap, LoadScript, Wrapper } from "@googlemaps/react-wrapper";
import { Box } from "@material-ui/core";

/**
 * @typedef {Object} MyMapProps
 * @property {string} apiKey Google Maps API key
 * @property {number} lat Initial latitude for the map
 * @property {number} lng Initial longitude for the map
 * @property {number} zoom Initial zoom level for the map
 */

/**
 * MyMap component
 * @param {MyMapProps} props Component props
 * @returns {JSX.Element}
 */
function MyMap(props) {
  const { apiKey, lat, lng, zoom } = props;

  return (
    <Box style={{ width: '100%', height: '100%', minWidth: '200px', minHeight: '200px', backgroundColor: 'blue' }}></Box>
  );
}

export default MyMap;
