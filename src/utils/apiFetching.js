import { API_BASE_URL } from "./constants";

export const fetchFromStationInfo = (fromStation, setFromStationInfo) => {
  try {
    fetch(`${API_BASE_URL}/stations?query=${fromStation}&limit=10&fuzzy=false&completion=true`)
    .then(res => res.json())
    .then(data => setFromStationInfo(data))
  } catch (error) {
    console.error(error);
  }
}

export const fetchToStationInfo = (toStation, setToStationInfo) => {
  try {
    fetch(`${API_BASE_URL}/stations?query=${toStation}&limit=10&fuzzy=false&completion=true`)
    .then(res => res.json())
    .then(data => setToStationInfo(data))
  } catch (error) {
    console.error(error);
  }
}

export const fetchJourneyList = (fromStationId, toStationId, setJourneyList) => {
  try {
    fetch(`${API_BASE_URL}/journeys?from=${fromStationId}&to=${toStationId}&bus=false&tickets=true`)
    .then(res => res.json())
    .then(data => setJourneyList(data))
  } catch (error) {
    console.error(error);
  }
}
