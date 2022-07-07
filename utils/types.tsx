interface RegionInterface {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface ReceiptDataInterface {
  heading: string;
  subtitle: string;
  spot: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

export { RegionInterface, ReceiptDataInterface };
