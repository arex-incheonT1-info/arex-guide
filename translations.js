// 공항철도 이용안내 — 언어별 문구 및 링크
// AREX·서울교통공사·인천공항 공식 사이트에 실제로 쓰이는 표기를 그대로 옮겼다.
// 문구나 링크를 고칠 땐 이 파일만 수정하면 된다 (app.js는 건드릴 필요 없음).

var TRANSLATIONS = {
  ko: {
    text: {
      pageTitle: "공항철도 이용안내",
      pageSubtitle: "필요한 정보를 눌러 확인하세요",
      linkRouteMap: "노선도",
      linkExpressFare: "직통열차 운임표",
      linkNormalFare: "일반열차 운임표",
      linkStationInfo: "역별 시간표",
      linkFaq: "자주 묻는 질문 (F&Q)",
      faqDocTitle: "자주 묻는 질문 - 공항철도 이용안내",
      backToMain: "← 이용안내",
      faqTitle: "자주 묻는 질문",
      faqSubtitle: "궁금한 항목을 눌러 확인하세요",
      faqExpressGuide: "직통 이용 안내",
      faqNormalGuide: "일반 이용 안내",
      faqCityAirport: "도심공항 이용 안내",
      faqTerminal1: "1터미널 시설 안내",
      faqTmoney: "티머니 환불 안내",
      faqWowpass: "WOW PASS 안내",
      faqTransfer: "직통 하차 후 서울역 환승방법",
      footer: "인천공항 ↔ 서울역 공항철도",
      arexLangNote: "AREX 사이트 우측 상단에서 언어를 변경할 수 있습니다."
    },
    links: {
      routeMap: "http://www.seoulmetro.co.kr/kr/cyberStation.do",
      terminal1: "https://www.airport.kr/geomap/ap_ko/view.do?type=2&alertType=0&tmnlId=P01#/search",
      expressFare: "https://www.airportrailroad.com/train/express/introduce",
      normalFare: "https://www.airportrailroad.com/train/normal/fare",
      stationInfo: "https://www.airportrailroad.com/train/normal/info/010/0",
      faqExpressGuide: "https://www.airportrailroad.com/train/express/guide",
      faqNormalGuide: "https://www.airportrailroad.com/train/normal/ticket",
      faqCityAirport: "https://www.airportrailroad.com/train/express/city/info"
    },
    images: {
      tmoney: "images/tmoney-refund-ko.jpg"
    },
    videos: {
      transfer: "https://www.youtube.com/embed/6LaMrRYxmfA"
    }
  },

  en: {
    text: {
      pageTitle: "AREX Airport Railroad Guide",
      pageSubtitle: "Tap for the information you need",
      linkRouteMap: "Subway Route Map",
      linkExpressFare: "Express Train Fare Information",
      linkNormalFare: "All-Stop Train Fare Information",
      linkStationInfo: "Station Information",
      linkFaq: "FAQ",
      faqDocTitle: "FAQ - AREX Airport Railroad Guide",
      backToMain: "← Guide",
      faqTitle: "FAQ",
      faqSubtitle: "Tap an item to learn more",
      faqExpressGuide: "Express Train Usage Guide",
      faqNormalGuide: "All-Stop Train Usage Guide",
      faqCityAirport: "City Airport Terminal Guide",
      faqTerminal1: "Terminal 1 Facility Guide",
      faqTmoney: "T-money Refund Guide",
      faqWowpass: "WOW PASS Guide",
      faqTransfer: "Transfer to Seoul Station After Express Train",
      footer: "Incheon Airport ↔ Seoul Station Airport Railroad",
      arexLangNote: "You can change the language at the top right of the AREX site."
    },
    links: {
      routeMap: "http://www.seoulmetro.co.kr/en/cyberStation.do",
      terminal1: "https://www.airport.kr/geomap/ap_en/view.do?type=2&alertType=0&tmnlId=P01#/search",
      expressFare: "https://www.airportrailroad.com/train/express/introduce",
      normalFare: "https://www.airportrailroad.com/train/normal/fare",
      stationInfo: "https://www.airportrailroad.com/train/normal/info/010/0",
      faqExpressGuide: "https://www.airportrailroad.com/train/express/guide",
      faqNormalGuide: "https://www.airportrailroad.com/train/normal/ticket",
      faqCityAirport: "https://www.airportrailroad.com/train/express/city/info"
    },
    images: {
      tmoney: "images/tmoney-refund-en.jpg"
    },
    videos: {
      transfer: "https://www.youtube.com/embed/6LaMrRYxmfA"
    }
  },

  zh: {
    text: {
      pageTitle: "机场铁路使用指南",
      pageSubtitle: "点击查看所需信息",
      linkRouteMap: "路线图",
      linkExpressFare: "直达列车票价指南",
      linkNormalFare: "普通列车票价指南",
      linkStationInfo: "车站信息",
      linkFaq: "常见问题 (FAQ)",
      faqDocTitle: "常见问题 - 机场铁路使用指南",
      backToMain: "← 使用指南",
      faqTitle: "常见问题",
      faqSubtitle: "点击查看详细内容",
      faqExpressGuide: "直达列车使用指南",
      faqNormalGuide: "普通列车使用指南",
      faqCityAirport: "城市航站楼使用指南",
      faqTerminal1: "第1航站楼设施指南",
      faqTmoney: "T-money退款指南",
      faqWowpass: "WOW PASS指南",
      faqTransfer: "直达列车下车后首尔站换乘方法",
      footer: "仁川机场 ↔ 首尔站 机场铁路",
      arexLangNote: "可以在机场铁路官方网站右上角更改语言。"
    },
    links: {
      routeMap: "http://www.seoulmetro.co.kr/download/map_chinese.jpg",
      terminal1: "https://www.airport.kr/geomap/ap_ch/view.do?type=2&alertType=0&tmnlId=P01#/search",
      expressFare: "https://www.airportrailroad.com/train/express/introduce",
      normalFare: "https://www.airportrailroad.com/train/normal/fare",
      stationInfo: "https://www.airportrailroad.com/train/normal/info/010/0",
      faqExpressGuide: "https://www.airportrailroad.com/train/express/guide",
      faqNormalGuide: "https://www.airportrailroad.com/train/normal/ticket",
      faqCityAirport: "https://www.airportrailroad.com/train/express/city/info"
    },
    images: {
      tmoney: "images/tmoney-refund-zh.jpg"
    },
    videos: {
      transfer: "https://www.youtube.com/embed/wBh3-8_SMxY"
    }
  },

  ja: {
    text: {
      pageTitle: "空港鉄道利用案内",
      pageSubtitle: "必要な情報をタップしてご確認ください",
      linkRouteMap: "路線図",
      linkExpressFare: "直通列車運賃案内",
      linkNormalFare: "一般列車運賃案内",
      linkStationInfo: "駅情報",
      linkFaq: "よくある質問 (FAQ)",
      faqDocTitle: "よくある質問 - 空港鉄道利用案内",
      backToMain: "← 利用案内",
      faqTitle: "よくある質問",
      faqSubtitle: "気になる項目をタップしてご確認ください",
      faqExpressGuide: "直通列車利用案内",
      faqNormalGuide: "一般列車利用案内",
      faqCityAirport: "都心空港ターミナル利用案内",
      faqTerminal1: "第1ターミナル施設案内",
      faqTmoney: "T-money払い戻し案内",
      faqWowpass: "WOW PASSのご案内",
      faqTransfer: "直通列車下車後のソウル駅乗り換え方法",
      footer: "仁川空港 ↔ ソウル駅 空港鉄道",
      arexLangNote: "空港鉄道サイト右上で言語を変更できます。"
    },
    links: {
      routeMap: "http://www.seoulmetro.co.kr/download/map_japanese.jpg",
      terminal1: "https://www.airport.kr/geomap/ap_ja/view.do?type=2&alertType=0&tmnlId=P01#/search",
      expressFare: "https://www.airportrailroad.com/train/express/introduce",
      normalFare: "https://www.airportrailroad.com/train/normal/fare",
      stationInfo: "https://www.airportrailroad.com/train/normal/info/010/0",
      faqExpressGuide: "https://www.airportrailroad.com/train/express/guide",
      faqNormalGuide: "https://www.airportrailroad.com/train/normal/ticket",
      faqCityAirport: "https://www.airportrailroad.com/train/express/city/info"
    },
    images: {
      tmoney: "images/tmoney-refund-ja.jpg"
    },
    videos: {
      transfer: "https://www.youtube.com/embed/UX9bpU0m2cU"
    }
  }
};
