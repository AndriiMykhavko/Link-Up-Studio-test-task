import axios from "axios";
import * as firebase from "firebase";

export const articlesAPI = {
  getArticlesList() {
    return axios
      .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
        params: {
          fq: "education",
          facet_field: "day_of_week",
          facet: "true",
          begin_date: "20200629",
          end_date: "20200630",
          facet_filter: "true",
          sort: "newest",
          fl: "web_url,abstract,headline,lead_paragraph",
          "api-key": "3U9xlekVuIjOsc9SZGg0F8geomPWM8mX",
        },
      })
      .then((response) => response.data);
  },
};

export const authAPI = {
  login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  registration(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  logout() {
    return firebase.auth().signOut();
  },
};
