import * as actionTypes from "./actions";

const initialState = {
  user: {
    name: "John Doe",
    email: "john@doe.com",
    stocks: {},
    availableCash: 1000
  },
  marketPrices: {
    MSFT: 166.0,
    FB: 186.75,
    AAPL: 290.9,
    INTC: 56.35,
    IBM: 130.49,
    WMT: 112.91,
    NKE: 92
  },
  companyList: ["MSFT", "FB", "AAPL", "INTC", "IBM", "WMT", "NKE"],
  companyInfo: {
    MSFT: {
      companyName: "Microsoft Corp.",
      companyInfo:
        "Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers.",
      stockPrice: 166.0
    },
    FB: {
      companyName: "Facebook Inc. Cl A",
      companyInfo:
        "Facebook is an American online social media and social networking service based in Menlo Park, California and a flagship service of the namesake company Facebook, Inc. It was founded by Mark Zuckerberg, along with fellow Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.",
      stockPrice: 186.75
    },
    AAPL: {
      companyName: "Apple Inc.",
      companyInfo:
        "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services. It is considered one of the Big Four technology companies, alongside Amazon, Google, and Facebook.",
      stockPrice: 290.9
    },
    INTC: {
      companyName: "Intel Corp.",
      companyInfo:
        "Intel Corporation (commonly known as Intel and stylized as intel) is an American multinational corporation and technology company headquartered in Santa Clara, California, in Silicon Valley. It is the world's largest and highest valued semiconductor chip manufacturer based on revenue, and is the inventor of the x86 series of microprocessors, the processors found in most personal computers (PCs). Intel ranked No. 46 in the 2018 Fortune 500 list of the largest United States corporations by total revenue. Intel is incorporated in Delaware.",
      stockPrice: 56.35
    },
    IBM: {
      companyName: "International Business Machines Corp.",
      companyInfo:
        "The International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York, with operations in over 170 countries. The company began in 1911, founded in Endicott, New York, as the Computing-Tabulating-Recording Company (CTR) and was renamed International Business Machines in 1924. IBM is incorporated in New York.",
      stockPrice: 130.49
    },
    WMT: {
      companyName: "Walmart Inc.",
      companyInfo:
        "Walmart Inc. is an American multinational retail corporation that operates a chain of hypermarkets, discount department stores, and grocery stores, headquartered in Bentonville, Arkansas.",
      stockPrice: 112.91
    },
    NKE: {
      companyTicker: "NKE",
      companyName: "Nike Inc. Cl B",
      companyInfo:
        "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Beaverton, Oregon, in the Portland metropolitan area. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment.",
      stockPrice: 92
    }
  }
};

const manipulateStockPrice = price => {
  const rand = Math.random();
  const newNum = price + (rand - 0.5) * price * 0.1;
  return newNum;
};

const newMarket = (list, prices) => {
  let newPrices = { ...prices };
  for (let company of list) {
    newPrices = {
      ...newPrices,
      [company]: manipulateStockPrice(newPrices[company])
    };
  }
  return newPrices;
};

const sellStock = (user, stock, price) => {
  let newUser = { ...user };
  if (newUser.stocks[stock] == null) {
    return newUser;
  } else {
    const { quantity, averagePrice } = newUser.stocks[stock];
    newUser.availableCash += price;
    if (quantity > 1) {
      newUser.stocks[stock] = {
        quantity: quantity - 1,
        averagePrice: averagePrice
      };
    } else {
      delete newUser.stocks[stock];
    }
  }
  return newUser;
};

const buyStock = (user, stock, price) => {
  let newUser = { ...user };
  if (newUser.availableCash > price) {
    newUser.availableCash -= price;
    if (newUser.stocks[stock] == null) {
      newUser.stocks[stock] = {
        quantity: 1,
        averagePrice: price
      };
    } else {
      const { quantity, averagePrice } = newUser.stocks[stock];
      const newPrice = (averagePrice * quantity + price) / (quantity + 1);
      newUser.stocks[stock] = {
        quantity: quantity + 1,
        averagePrice: newPrice
      };
    }
    return newUser;
  } else return newUser;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_STOCK:
      return {
        ...state,
        user: buyStock(
          state.user,
          action.stockName,
          state.marketPrices[action.stockName]
        )
      };
    case actionTypes.SELL_STOCK:
      return {
        ...state,
        user: sellStock(
          state.user,
          action.stockName,
          state.marketPrices[action.stockName]
        )
      };
    case actionTypes.NEW_MARKET:
      return {
        ...state,
        marketPrices: newMarket(state.companyList, { ...state.marketPrices })
      };
    default:
      return state;
  }
};

export default reducer;
