const stocksBase = [
  {
    companyTicker: "MSFT",
    companyName: "Microsoft Corp.",
    companyInfo:
      "Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers.",
    stockPrice: 166.0
  },
  {
    companyTicker: "FB",
    companyName: "Facebook Inc. Cl A",
    companyInfo:
      "Facebook is an American online social media and social networking service based in Menlo Park, California and a flagship service of the namesake company Facebook, Inc. It was founded by Mark Zuckerberg, along with fellow Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.",
    stockPrice: 186.75
  },
  {
    companyTicker: "AAPL",
    companyName: "Apple Inc.",
    companyInfo:
      "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services. It is considered one of the Big Four technology companies, alongside Amazon, Google, and Facebook.",
    stockPrice: 290.9
  },
  {
    companyTicker: "INTC",
    companyName: "Intel Corp.",
    companyInfo:
      "Intel Corporation (commonly known as Intel and stylized as intel) is an American multinational corporation and technology company headquartered in Santa Clara, California, in Silicon Valley. It is the world's largest and highest valued semiconductor chip manufacturer based on revenue, and is the inventor of the x86 series of microprocessors, the processors found in most personal computers (PCs). Intel ranked No. 46 in the 2018 Fortune 500 list of the largest United States corporations by total revenue. Intel is incorporated in Delaware.",
    stockPrice: 56.35
  },
  {
    companyTicker: "IBM",
    companyName: "International Business Machines Corp.",
    companyInfo:
      "The International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York, with operations in over 170 countries. The company began in 1911, founded in Endicott, New York, as the Computing-Tabulating-Recording Company (CTR) and was renamed International Business Machines in 1924. IBM is incorporated in New York.",
    stockPrice: 130.49
  },
  {
    companyTicker: "WMT",
    companyName: "Walmart Inc.",
    companyInfo:
      "Walmart Inc. is an American multinational retail corporation that operates a chain of hypermarkets, discount department stores, and grocery stores, headquartered in Bentonville, Arkansas.",
    stockPrice: 112.91
  },
  {
    companyTicker: "NKE",
    companyName: "Nike Inc. Cl B",
    companyInfo:
      "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Beaverton, Oregon, in the Portland metropolitan area. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment.",
    stockPrice: 92
  }
];

const manipulateStockPrice = price => {
  const rand = Math.random();
  return price + (rand - 0.5) * price * 0.1;
};

const returnStocks = (stocks = stocksBase) => {
  let newStocks = [...stocks];
  for (let stock of newStocks) {
    stock.stockPrice = manipulateStockPrice(stock.stockPrice);
  }
  stocks = newStocks;
  return stocks;
};

export default returnStocks;
