import axios from "axios"; //Axios is used to make api requests

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  //The word “async” before a function means one simple thing: a function always returns a promise.

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};
