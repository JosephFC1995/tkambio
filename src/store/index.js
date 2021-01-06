import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const axios = require("axios");

export default new Vuex.Store({
    state: {
        tcambio: 0,
        penTOdollar: true,
    },
    mutations: {
        SET_T_CAMBIO(state, payload) {
            state.tcambio = payload;
        },
        TOGGLE_DIRECTION_CAMBIO(state, payload) {
            state.penTOdollar = payload;
        },
    },
    actions: {
        async GET_TIPO_CAMBIO({ commit }) {
            const { data } = await axios.get("http://api.currencylayer.com/live", {
                params: {
                    access_key: process.env.KEY_TCAMBIO,
                    currencies: "PEN",
                    format: 1,
                },
            });
            commit("SET_T_CAMBIO", data.quotes.USDPEN);
        },
        TOGGLE_DIRECTION_CAMBIO({ commit, state }) {
            commit("TOGGLE_DIRECTION_CAMBIO", !state.penTOdollar);
        },
    },
    getters: {
        getTCambio: (state) => {
            return state.tcambio.toFixed(3);
        },
        getDirectionCambio: (state) => {
            return state.penTOdollar;
        },
    },
    modules: {},
});