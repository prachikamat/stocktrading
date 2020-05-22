import stocks from '../../data/stocks'
import { Math } from 'core-js';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * ( 1 + Math.random() - 0.5));
        });
    }
};

const actions = {
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks);
    },
    buyStock: ( {commit}, order) => {
        commit('BUY_STOCK',order);
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
