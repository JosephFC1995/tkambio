import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const axios = require("axios");

export default new Vuex.Store({
    state: {
        tcambioCompra: 0,
        tcambioVenta: 0,
        penTOdollar: true,
        activeMenu: false,
    },
    mutations: {
        SET_T_CAMBIO(state, payload) {
            state.tcambioCompra = payload.precio_compra;
            state.tcambioVenta = payload.precio_venta;
        },
        TOGGLE_DIRECTION_CAMBIO(state, payload) {
            state.penTOdollar = payload;
        },
        TOGGLE_MENU(state, payload) {
            state.activeMenu = payload;
        },
    },
    actions: {
        async GET_TIPO_CAMBIO({ commit }) {
            console.log(process.env);
            const { data } = await axios.post("https://api.migo.pe/api/v1/exchange/latest", {
                token: process.env.KEY_TCAMBIO,
            });
            commit("SET_T_CAMBIO", data);
        },
        TOGGLE_DIRECTION_CAMBIO({ commit, state }) {
            commit("TOGGLE_DIRECTION_CAMBIO", !state.penTOdollar);
        },
        TOGGLE_MENU({ commit }, action) {
            commit("TOGGLE_MENU", action);
        },
    },
    getters: {
        getTCambioCompra: (state) => {
            return state.tcambioCompra;
        },
        getTCambioVenta: (state) => {
            return state.tcambioVenta;
        },
        getDirectionCambio: (state) => {
            return state.penTOdollar;
        },
        getActiveMenu: (state) => {
            return state.activeMenu;
        },
    },
    modules: {},
});