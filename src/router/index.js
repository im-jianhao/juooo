import Vue from "vue";
import VueRouter from "vue-router";

import Index from "views/index/Index";
import City from "views/index/City";

import TheatreList from "views/theatre/TheatreList";

import Search from "views/search/Search";

import Calendar from "views/calendar/Calendar";

import ShowsLibrary from "views/show/ShowsLibrary";

import Ticket from "views/ticket/Ticket";

import Venue from "views/venue/Venue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    name: "index",
    component: Index
  },
  {
    path: "/index/selectCity",
    name: "selectCity",
    component: City
  },
  {
    path: "/theatre/theatreList",
    name: "theatreList",
    component: TheatreList
  },
  {
    path: "/search/index",
    name: "search",
    component: Search
  },
  {
    path: "/calendar/index",
    name: "calendar",
    component: Calendar
  },
  {
    path: "/show/showsLibrary",
    name: "show",
    component: ShowsLibrary
  },
  {
    path: "/ticket/:id",
    name: "ticket",
    props: true,
    component: Ticket
  },
  {
    path: "/venue/venueAddress",
    name: "venueAddress",
    component: Venue
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
