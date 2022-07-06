import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "@env";

interface IProps {
  region: any;
  setRegion: any;
  setConfirmPark: any;
  setSearch: any;
}

const GooglePlacesInput = ({
  region,
  setRegion,
  setConfirmPark,
  setSearch,
}: IProps) => {
  return (
    <GooglePlacesAutocomplete
      enablePoweredByContainer={false}
      keyboardShouldPersistTaps={"never"}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      fetchDetails={true}
      placeholder="Where would you like to park today?"
      query={{
        key: GOOGLE_API_KEY,
        language: "en",
      }}
      onPress={(data, details = null) => {
        setRegion({
          ...region,
          latitude: details?.geometry?.location?.lat,
          longitude: details?.geometry?.location?.lng,
        });
        setConfirmPark(true);
        setSearch(details?.formatted_address);
      }}
      onFail={(error) => {
        console.log("error", error);
      }}
      styles={{
        container: {
          zIndex: 1,
        },
        textInput: {
          borderRadius: 10,
          shadowColor: "black",
          shadowOpacity: 0.2,
          shadowOffset: {
            width: 0,
            height: 2,
          },
        },
      }}
    />
  );
};

export default GooglePlacesInput;
