import * as actions from '../actions';

const quotesReducer = (state = {
  historicalsQuotes: {},
  quotes: {}
}, action) => {
  switch (action.type) {
    case actions.ADD_HIS_QUOTES:
      let newHistoricalsQuotes = Object.assign({}, state.historicalsQuotes);
      newHistoricalsQuotes[ action.symbol+action.hisType ] = action.quotes;
      return {
        ...state,
        historicalsQuotes: newHistoricalsQuotes
      }
    case actions.DELETE_HIS_QUOTES:
      let tempHistoricalsQuotes = Object.assign({}, state.historicalsQuotes);
      delete tempHistoricalsQuotes[action.symbolHisType];
      return {
        ...state,
        historicalsQuotes: tempHistoricalsQuotes
      }
    case actions.ADD_QUOTE:
      let newQuotes = Object.assign({}, state.quotes);
      newQuotes[action.symbol] = action.quote;
      return {
        ...state,
        quotes: newQuotes
      }
    case actions.DELETE_QUOTE:
      let tempQuotes = Object.assign({}, state.quotes);
      delete tempQuotes[action.symbol];
      return {
        ...state,
        quotes: tempQuotes
      }
    case actions.ADD_MULTIPLE_QUOTES:
      let tempQuotesObj = {};
      action.quotesArray.forEach((quote)=>{
        if(quote !== null){
          tempQuotesObj[quote.symbol] = quote;
        }
      })
      return {
        ...state,
        quotes: Object.assign({}, state.quotes, tempQuotesObj)
      }
    default:
      return state
  }
}

export default quotesReducer
