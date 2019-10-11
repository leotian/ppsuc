const video = $("video").get(0);
video.onended = function () {
  if (video.src.includes('data/before.mp4')) video.src = "data/after.mp4";
  else video.src = "data/before.mp4";
}

$(function () {
  const deviceWidth = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = deviceWidth / 100 + 'px';
})

$(function () {
  // 重点人群跳转
  $('.xpanel-r-m .title').on('click', () => {
    window.open('http://172.29.1.167:8000')
  })

  // 社会雷达跳转
  $('.xpanel-l-t .title').on('click', () => {
    window.open('http://localhost:80')
  })

  /*************** 事件传播可视化展示 **************/
  const seriesGraph = echarts.init(document.getElementById("seriesGraph"));
  const constEdges = [{
    'sourceID': 'liudunews',
    'attributes': {},
    'targetID': 'Leojunite',
    'size': 1
  }, {
    'sourceID': 'Katy17997436',
    'attributes': {},
    'targetID': 'Williamlin139',
    'size': 1
  }, { 'sourceID': 'SZMG_zbgat', 'attributes': {}, 'targetID': 'DC027442', 'size': 1 }, {
    'sourceID': 'Takotakopolly',
    'attributes': {},
    'targetID': 'meowmimi6',
    'size': 1
  }, { 'sourceID': 'abeleung', 'attributes': {}, 'targetID': 'dongnan2030', 'size': 1 }, {
    'sourceID': 'AlvinYeungnk',
    'attributes': {},
    'targetID': 'QueenieLiu11',
    'size': 1
  }, { 'sourceID': 'michellev0v', 'attributes': {}, 'targetID': 'ROKUGATSUJUNE', 'size': 1 }, {
    'sourceID': 'awang728',
    'attributes': {},
    'targetID': 'uBAqHAwc95AfRD8',
    'size': 1
  }, {
    'sourceID': 'PSY36kwoHmsMylX',
    'attributes': {},
    'targetID': 'iunFQtcuoPRpHDb',
    'size': 1
  }, { 'sourceID': 'tanpenggiePDV', 'attributes': {}, 'targetID': 'anitalai19', 'size': 1 }, {
    'sourceID': 'RogerHPNg',
    'attributes': {},
    'targetID': 'caijingchao',
    'size': 1
  }, { 'sourceID': 'cxzj', 'attributes': {}, 'targetID': 'Leonard18762047', 'size': 1 }, {
    'sourceID': 'ILoveGZ1',
    'attributes': {},
    'targetID': 'hongkong_blog',
    'size': 1
  }, {
    'sourceID': 'ema93983729',
    'attributes': {},
    'targetID': 'EddiePang9',
    'size': 1
  }, {
    'sourceID': 'joezhu75910872',
    'attributes': {},
    'targetID': 'lonlonsury',
    'size': 1
  }, {
    'sourceID': 'HKmoviefan',
    'attributes': {},
    'targetID': 'weathernerdshk',
    'size': 1
  }, {
    'sourceID': 'fcnrhthatr',
    'attributes': {},
    'targetID': 'RSccSzfblnJgbKo',
    'size': 1
  }, {
    'sourceID': 'PolicyApple',
    'attributes': {},
    'targetID': 'sXx8BVejT9w8MRV',
    'size': 1
  }, {
    'sourceID': 'derekli84134905',
    'attributes': {},
    'targetID': 'TYrUjqdlIaphtBw',
    'size': 1
  }, {
    'sourceID': 'nicmt3',
    'attributes': {},
    'targetID': 'Lam123123Terry',
    'size': 1
  }, {
    'sourceID': '87ba24d433114f1',
    'attributes': {},
    'targetID': 'apr20273131',
    'size': 1
  }, {
    'sourceID': 'somsomsom2012',
    'attributes': {},
    'targetID': 'serika_sino',
    'size': 1
  }, {
    'sourceID': 'LydiaWa19763373',
    'attributes': {},
    'targetID': 'Skyblue85221970',
    'size': 1
  }, {
    'sourceID': 'RWNelson7',
    'attributes': {},
    'targetID': 'americatimes',
    'size': 1
  }, {
    'sourceID': 'Jackson06280428',
    'attributes': {},
    'targetID': 'Mandy67359116',
    'size': 1
  }, {
    'sourceID': 'SvetaisSweet',
    'attributes': {},
    'targetID': 'zhanglifan',
    'size': 1
  }, {
    'sourceID': 'xiaoxiannv526',
    'attributes': {},
    'targetID': 'apr20273131',
    'size': 1
  }, {
    'sourceID': 'HeungGongYan0',
    'attributes': {},
    'targetID': 'allan64625277',
    'size': 1
  }, {
    'sourceID': 'HK55020097',
    'attributes': {},
    'targetID': 'freespiritnwill',
    'size': 1
  }, {
    'sourceID': 'kelvin_wang',
    'attributes': {},
    'targetID': 'arlinghaha',
    'size': 1
  }, { 'sourceID': 'stephanieinhk', 'attributes': {}, 'targetID': 'VvFoodie', 'size': 1 }, {
    'sourceID': 'YihsiangShih',
    'attributes': {},
    'targetID': 'liberatehkg',
    'size': 1
  }, { 'sourceID': 'zhonghua70', 'attributes': {}, 'targetID': 'Fight4HongKong', 'size': 1 }, {
    'sourceID': 'JnD852',
    'attributes': {},
    'targetID': 'haruchann_jan',
    'size': 1
  }, {
    'sourceID': 'QuanqiuLianbo',
    'attributes': {},
    'targetID': 'Takotakopolly',
    'size': 1
  }, {
    'sourceID': 'FreedomBear4',
    'attributes': {},
    'targetID': 'Kuitauyin',
    'size': 1
  }, {
    'sourceID': 'RadioFreeAsiajp',
    'attributes': {},
    'targetID': 'edwinzhang',
    'size': 1
  }, { 'sourceID': 'econpoetic', 'attributes': {}, 'targetID': 'kanzhongguo', 'size': 1 }, {
    'sourceID': 'iy88888888',
    'attributes': {},
    'targetID': 'JamesHsiehTW',
    'size': 1
  }, {
    'sourceID': 'MingjingFocus',
    'attributes': {},
    'targetID': 'HongKongmyhome',
    'size': 1
  }, { 'sourceID': 'cultural_garden', 'attributes': {}, 'targetID': 'Niuphd', 'size': 1 }, {
    'sourceID': 'yauwaiching',
    'attributes': {},
    'targetID': 'calci7er',
    'size': 1
  }, {
    'sourceID': 'dUWp4yX8rHp0HMY',
    'attributes': {},
    'targetID': 'dongfangzhou1',
    'size': 1
  }, { 'sourceID': 'eggieofhk', 'attributes': {}, 'targetID': 'hk_alexin', 'size': 1 }, {
    'sourceID': 'nicmt3',
    'attributes': {},
    'targetID': 'Standwi13696803',
    'size': 1
  }, {
    'sourceID': 'DawninDark',
    'attributes': {},
    'targetID': 'standwithHKerrr',
    'size': 1
  }, { 'sourceID': 'PhilipsShiu', 'attributes': {}, 'targetID': 'AmyHugh4', 'size': 1 }, {
    'sourceID': 'trackingpaws',
    'attributes': {},
    'targetID': 'CX0J5dftYExob2E',
    'size': 1
  }, {
    'sourceID': 'JO7tENcURKEk8Im',
    'attributes': {},
    'targetID': 'kikuchih1',
    'size': 1
  }, {
    'sourceID': 'Sophie518421',
    'attributes': {},
    'targetID': 'standwi59443180',
    'size': 1
  }, { 'sourceID': 'VivienneChow', 'attributes': {}, 'targetID': 'meowmimi6', 'size': 1 }, {
    'sourceID': 'MdiTafu',
    'attributes': {},
    'targetID': 'TGfree520',
    'size': 1
  }, { 'sourceID': 'FionYeung5', 'attributes': {}, 'targetID': 'TGfree520', 'size': 1 }, {
    'sourceID': 'FionYeung5',
    'attributes': {},
    'targetID': 'jeff_bahangsan',
    'size': 1
  }, {
    'sourceID': 'FionYeung5',
    'attributes': {},
    'targetID': 'Andychanhotin',
    'size': 1
  }, { 'sourceID': 'nanyangpress', 'attributes': {}, 'targetID': 'Alanding13', 'size': 1 }, {
    'sourceID': 'bannedebook',
    'attributes': {},
    'targetID': 'hongkiu1118',
    'size': 1
  }, { 'sourceID': 'Tong_Shuo', 'attributes': {}, 'targetID': 'hanrongli', 'size': 1 }, {
    'sourceID': 'WpxmFvj3sUA5ZGN',
    'attributes': {},
    'targetID': 'Evertbeetho',
    'size': 1
  }, {
    'sourceID': 'standwithhknow',
    'attributes': {},
    'targetID': 'PDChinese',
    'size': 1
  }, {
    'sourceID': 'HKDogLover2',
    'attributes': {},
    'targetID': 'FocusNews99',
    'size': 1
  }, {
    'sourceID': 'su_ge01142893',
    'attributes': {},
    'targetID': 'HeungGongYan0',
    'size': 1
  }, { 'sourceID': 'Raymond31954081', 'attributes': {}, 'targetID': 'MXLRT', 'size': 1 }, {
    'sourceID': 'arlinghaha',
    'attributes': {},
    'targetID': 'EvaChiu17',
    'size': 1
  }, { 'sourceID': 'tqd2017nyc', 'attributes': {}, 'targetID': 'PeterYu0970', 'size': 1 }, {
    'sourceID': '7k_QYS',
    'attributes': {},
    'targetID': 'kanebbking',
    'size': 1
  }, { 'sourceID': 'HuPing1', 'attributes': {}, 'targetID': 'shaolao5', 'size': 1 }, {
    'sourceID': 'Catherinecat826',
    'attributes': {},
    'targetID': 'Aloha88617098',
    'size': 1
  }, { 'sourceID': 'CNS1952', 'attributes': {}, 'targetID': 'alexlaixin1', 'size': 1 }, {
    'sourceID': 'tiffany02343903',
    'attributes': {},
    'targetID': 'denton38314384',
    'size': 1
  }, { 'sourceID': 'ILoveGZ1', 'attributes': {}, 'targetID': '18261999wer', 'size': 1 }, {
    'sourceID': 'stitchbobo',
    'attributes': {},
    'targetID': 'Ccw14348622',
    'size': 1
  }, { 'sourceID': 'tqd2017nyc', 'attributes': {}, 'targetID': 'cps_414', 'size': 1 }, {
    'sourceID': 'FzJa5oBdLdLR6KJ',
    'attributes': {},
    'targetID': 'RTIChinese',
    'size': 1
  }, { 'sourceID': 'goooglefans', 'attributes': {}, 'targetID': 'ACSECAA', 'size': 1 }, {
    'sourceID': 'Hahahah23921079',
    'attributes': {},
    'targetID': 'k_r_n_o',
    'size': 1
  }, {
    'sourceID': 'withoutawell',
    'attributes': {},
    'targetID': 'Tonyworld15',
    'size': 1
  }, {
    'sourceID': 'a1256966686',
    'attributes': {},
    'targetID': 'mi_standwithHK',
    'size': 1
  }, {
    'sourceID': 'memory0321',
    'attributes': {},
    'targetID': 'TGTLiberateHK',
    'size': 1
  }, { 'sourceID': 'm0492339684', 'attributes': {}, 'targetID': 'Zhong_Weisen', 'size': 1 }, {
    'sourceID': 'DaniTang2',
    'attributes': {},
    'targetID': 'GreenPartyCN',
    'size': 1
  }, { 'sourceID': 'YihsiangShih', 'attributes': {}, 'targetID': 'jambusonic', 'size': 1 }, {
    'sourceID': '90s_gongnui',
    'attributes': {},
    'targetID': 'TedDaddy2',
    'size': 1
  }, {
    'sourceID': 'gongminyundong',
    'attributes': {},
    'targetID': 'Evergreen2k',
    'size': 1
  }, {
    'sourceID': 'HoareKortney',
    'attributes': {},
    'targetID': 'JAbbott45624607',
    'size': 1
  }, { 'sourceID': 'Bayi70917871', 'attributes': {}, 'targetID': 'Bayi70917871', 'size': 1 }, {
    'sourceID': 'HeiJeremy',
    'attributes': {},
    'targetID': 'Swkit5',
    'size': 1
  }, { 'sourceID': 'simonkwan8', 'attributes': {}, 'targetID': 'chantaimanblog', 'size': 1 }, {
    'sourceID': 'Tong_Shuo',
    'attributes': {},
    'targetID': 'MdiTafu',
    'size': 1
  }, {
    'sourceID': 'staywithhk1',
    'attributes': {},
    'targetID': 'CEcn_News',
    'size': 1
  }, {
    'sourceID': 'LydiaWa19763373',
    'attributes': {},
    'targetID': 'BELwhatslife',
    'size': 1
  }, { 'sourceID': 'Any__Lee', 'attributes': {}, 'targetID': 'cowcfj', 'size': 1 }, {
    'sourceID': 'aq2men',
    'attributes': {},
    'targetID': 'fromsophie000',
    'size': 1
  }, { 'sourceID': 'YungKalis', 'attributes': {}, 'targetID': 'dajiyuan', 'size': 1 }, {
    'sourceID': 'DaniTang2',
    'attributes': {},
    'targetID': 'li83347908',
    'size': 1
  }, { 'sourceID': 'dotdot1991', 'attributes': {}, 'targetID': 'Dubha3', 'size': 1 }, {
    'sourceID': 'PDChinese',
    'attributes': {},
    'targetID': 'cps_414',
    'size': 1
  }, {
    'sourceID': 'glory2hkfreedom',
    'attributes': {},
    'targetID': 'Kashi_1017',
    'size': 1
  }, { 'sourceID': 'LkjhgfdMxy3', 'attributes': {}, 'targetID': 'Bobrother5', 'size': 1 }, {
    'sourceID': 'M20835058',
    'attributes': {},
    'targetID': 'BELwhatslife',
    'size': 1
  }, { 'sourceID': 'TMAN2020', 'attributes': {}, 'targetID': 'texx731', 'size': 1 }, {
    'sourceID': 'im_hker',
    'attributes': {},
    'targetID': 'ssdbhadra',
    'size': 1
  }, { 'sourceID': 'ANKANINE1', 'attributes': {}, 'targetID': 'GodBlessHK18', 'size': 1 }, {
    'sourceID': 'yauwaiching',
    'attributes': {},
    'targetID': 'FionYeung5',
    'size': 1
  }, { 'sourceID': 'HkCtn', 'attributes': {}, 'targetID': 'noobmaster1025', 'size': 1 }, {
    'sourceID': 'KD3321',
    'attributes': {},
    'targetID': 'HongKongPig2_0',
    'size': 1
  }, {
    'sourceID': 'Raymond31954081',
    'attributes': {},
    'targetID': 'SwedenMoli2017',
    'size': 1
  }, {
    'sourceID': 'fduyuyture65',
    'attributes': {},
    'targetID': 'aigaogaoUSA',
    'size': 1
  }, {
    'sourceID': 'apr20273131',
    'attributes': {},
    'targetID': 'standwithHKerrr',
    'size': 1
  }, { 'sourceID': 'Kashi_1017', 'attributes': {}, 'targetID': 'yukikei', 'size': 1 }, {
    'sourceID': 'plzstandwithus',
    'attributes': {},
    'targetID': 'VvFoodie',
    'size': 1
  }, { 'sourceID': 'kzzzzz_', 'attributes': {}, 'targetID': 'Szetochiyung1', 'size': 1 }, {
    'sourceID': 'NTDChinese',
    'attributes': {},
    'targetID': 'DC027442',
    'size': 1
  }, { 'sourceID': '3dddyHuigui', 'attributes': {}, 'targetID': 'ATC_Mike', 'size': 1 }, {
    'sourceID': 'DJ_XIBANYA',
    'attributes': {},
    'targetID': 'sufangfeng2019',
    'size': 1
  }, {
    'sourceID': 'VvFoodie',
    'attributes': {},
    'targetID': 'Standwithhk15',
    'size': 1
  }, { 'sourceID': 'PSY36kwoHmsMylX', 'attributes': {}, 'targetID': 'briankuo', 'size': 1 }, {
    'sourceID': 'baoguangtv',
    'attributes': {},
    'targetID': 'standwithhknow',
    'size': 1
  }, { 'sourceID': 'Terence', 'attributes': {}, 'targetID': 'ho166', 'size': 1 }, {
    'sourceID': 'MaxTtll',
    'attributes': {},
    'targetID': 'voacantonese',
    'size': 1
  }, { 'sourceID': 'LawChiman', 'attributes': {}, 'targetID': 'chhk852', 'size': 1 }, {
    'sourceID': 'EricaL25808895',
    'attributes': {},
    'targetID': 'm0492339684',
    'size': 1
  }, {
    'sourceID': 'HunanToday',
    'attributes': {},
    'targetID': 'hotbloo12187117',
    'size': 1
  }, { 'sourceID': 'GreenPartyCN', 'attributes': {}, 'targetID': 'DjangoHcang', 'size': 1 }, {
    'sourceID': 'sanzhao41',
    'attributes': {},
    'targetID': 'bsdscn',
    'size': 1
  }, {
    'sourceID': 'vincentzkai',
    'attributes': {},
    'targetID': 'jtl_352003',
    'size': 1
  }, { 'sourceID': 'jojolenelene1', 'attributes': {}, 'targetID': 'LandiCao', 'size': 1 }, {
    'sourceID': 'HkOhha',
    'attributes': {},
    'targetID': 'Bayi70917871',
    'size': 1
  }, {
    'sourceID': 'LrBlUA8AsssKdx4',
    'attributes': {},
    'targetID': 'Baron16259809',
    'size': 1
  }, { 'sourceID': 'Leetasizan', 'attributes': {}, 'targetID': 'MaggieHo20', 'size': 1 }, {
    'sourceID': 'benchrstina',
    'attributes': {},
    'targetID': 'Lee93184179',
    'size': 1
  }, {
    'sourceID': 'eggieofhk',
    'attributes': {},
    'targetID': 'HongKongPig2_0',
    'size': 1
  }, {
    'sourceID': 'nikiv_86911',
    'attributes': {},
    'targetID': 'nikiv_86911',
    'size': 1
  }, {
    'sourceID': 'Darkandstar2000',
    'attributes': {},
    'targetID': 'PSY36kwoHmsMylX',
    'size': 1
  }, { 'sourceID': 'wl2019831', 'attributes': {}, 'targetID': 'dazhangfujp', 'size': 1 }, {
    'sourceID': 'bsdscn',
    'attributes': {},
    'targetID': 'abbyabababab',
    'size': 1
  }, {
    'sourceID': 'Vincy64175135',
    'attributes': {},
    'targetID': 'hkindigenous',
    'size': 1
  }, { 'sourceID': 'econpoetic', 'attributes': {}, 'targetID': 'zwzw_22', 'size': 1 }, {
    'sourceID': 'ducnnet',
    'attributes': {},
    'targetID': 'EnragedHongkon1',
    'size': 1
  }, {
    'sourceID': 'Msy30001',
    'attributes': {},
    'targetID': 'studentlocalism',
    'size': 1
  }, { 'sourceID': 'molamola214', 'attributes': {}, 'targetID': 'Ben_s214', 'size': 1 }, {
    'sourceID': 'cnewsgovhk',
    'attributes': {},
    'targetID': 'LiuDuShiJie',
    'size': 1
  }, {
    'sourceID': 'realGuancha',
    'attributes': {},
    'targetID': 'AlvinYeungnk',
    'size': 1
  }, { 'sourceID': 'apr20273131', 'attributes': {}, 'targetID': 'FionYeung5', 'size': 1 }, {
    'sourceID': 'lewis_kikiki',
    'attributes': {},
    'targetID': 'baoxiaofeng',
    'size': 1
  }, { 'sourceID': 'econpoetic', 'attributes': {}, 'targetID': 'MJUKNews', 'size': 1 }, {
    'sourceID': 'GodBlessHK18',
    'attributes': {},
    'targetID': 'thepapercn',
    'size': 1
  }, { 'sourceID': 'lonlonsury', 'attributes': {}, 'targetID': 'KS15630557', 'size': 1 }, {
    'sourceID': 'AlvinYeungnk',
    'attributes': {},
    'targetID': 'FHk178',
    'size': 1
  }, {
    'sourceID': 'LDEuropeNews',
    'attributes': {},
    'targetID': 'Hk60740379Hk',
    'size': 1
  }, {
    'sourceID': 'Pat04097729',
    'attributes': {},
    'targetID': 'StandwithHK_JPN',
    'size': 1
  }, { 'sourceID': 'BulletHong', 'attributes': {}, 'targetID': 'qssw81', 'size': 1 }, {
    'sourceID': 'XiaosongWangUSA',
    'attributes': {},
    'targetID': 'shengliangd',
    'size': 1
  }, {
    'sourceID': 'hjjohnson17',
    'attributes': {},
    'targetID': 'Hahahah23921079',
    'size': 1
  }, { 'sourceID': 'FocusNews99', 'attributes': {}, 'targetID': '912Guy', 'size': 1 }, {
    'sourceID': 'Mandy67359116',
    'attributes': {},
    'targetID': 'VvFoodie',
    'size': 1
  }, { 'sourceID': 'Bobrother5', 'attributes': {}, 'targetID': 'lz_64', 'size': 1 }, {
    'sourceID': '8worldnews',
    'attributes': {},
    'targetID': 'Freemax2020',
    'size': 1
  }, { 'sourceID': 'Louise_201969', 'attributes': {}, 'targetID': 'SandyHui5', 'size': 1 }, {
    'sourceID': 'VOG2020',
    'attributes': {},
    'targetID': 'chhk852',
    'size': 1
  }, {
    'sourceID': 'KS15630557',
    'attributes': {},
    'targetID': 'kikuchih1',
    'size': 1
  }, {
    'sourceID': 'KenMast87763989',
    'attributes': {},
    'targetID': 'ho166',
    'size': 1
  }, {
    'sourceID': 'jeff_bahangsan',
    'attributes': {},
    'targetID': 'sanzhao41',
    'size': 1
  }, {
    'sourceID': 'Matilda_C_Law',
    'attributes': {},
    'targetID': '9vvrgM4rP41xZoi',
    'size': 1
  }, { 'sourceID': 'TonyChungHonLam', 'attributes': {}, 'targetID': 'VOAHK', 'size': 1 }, {
    'sourceID': 'yoshicasaya',
    'attributes': {},
    'targetID': 'jkhy16435548',
    'size': 1
  }, { 'sourceID': 'kzglife', 'attributes': {}, 'targetID': 'Fish65064857', 'size': 1 }, {
    'sourceID': 'QueenieLiu11',
    'attributes': {},
    'targetID': 'standwithhk2',
    'size': 1
  }, { 'sourceID': 'studentlocalism', 'attributes': {}, 'targetID': 'anitalai19', 'size': 1 }, {
    'sourceID': 'DC027442',
    'attributes': {},
    'targetID': 'MingJingNews',
    'size': 1
  }, {
    'sourceID': 'PnW9eGAtThxLWLe',
    'attributes': {},
    'targetID': 'WpxmFvj3sUA5ZGN',
    'size': 1
  }, { 'sourceID': 'EriksonHK', 'attributes': {}, 'targetID': 'shhcaa', 'size': 1 }, {
    'sourceID': 'HkCtn',
    'attributes': {},
    'targetID': '2016RCFOnline2',
    'size': 1
  }, {
    'sourceID': 'SiuYuk777',
    'attributes': {},
    'targetID': 'RealHongKonger2',
    'size': 1
  }, {
    'sourceID': 'xiner01298818',
    'attributes': {},
    'targetID': 'XunLongJi2018',
    'size': 1
  }, {
    'sourceID': 'bannedebook',
    'attributes': {},
    'targetID': 'RSccSzfblnJgbKo',
    'size': 1
  }, {
    'sourceID': 'bbcchinese',
    'attributes': {},
    'targetID': 'TqnHnpz8rrMoZQj',
    'size': 1
  }, { 'sourceID': 'Williamlin139', 'attributes': {}, 'targetID': 'freeedomhai', 'size': 1 }, {
    'sourceID': 'bsdscn',
    'attributes': {},
    'targetID': 'alexlaixin1',
    'size': 1
  }, { 'sourceID': 'gm_shih', 'attributes': {}, 'targetID': 'yangmaosen', 'size': 1 }, {
    'sourceID': 'LoVellMInGll',
    'attributes': {},
    'targetID': 'caichu88',
    'size': 1
  }, { 'sourceID': 'LiuDuXinWen', 'attributes': {}, 'targetID': 'LDGermanyNews', 'size': 1 }, {
    'sourceID': 'liusega',
    'attributes': {},
    'targetID': 'Ccw14348622',
    'size': 1
  }, {
    'sourceID': 'XunLongJi2018',
    'attributes': {},
    'targetID': '_4152063299951',
    'size': 1
  }, {
    'sourceID': 'kiyoandthesea',
    'attributes': {},
    'targetID': 'Jackson06280428',
    'size': 1
  }, {
    'sourceID': 'RFA_Chinese',
    'attributes': {},
    'targetID': 'stitchbobo',
    'size': 1
  }, { 'sourceID': 'vincent_wong666', 'attributes': {}, 'targetID': 'bbcchinese', 'size': 1 }, {
    'sourceID': 'ChuLearn',
    'attributes': {},
    'targetID': 'hongkiu1118',
    'size': 1
  }, { 'sourceID': 'summerhaho', 'attributes': {}, 'targetID': 'awang728', 'size': 1 }, {
    'sourceID': 'CEcn_News',
    'attributes': {},
    'targetID': 'HongSica',
    'size': 1
  }, { 'sourceID': 'Longbow1066', 'attributes': {}, 'targetID': 'SinoSeer', 'size': 1 }, {
    'sourceID': 'Kuitauyin',
    'attributes': {},
    'targetID': 'yauwaiching',
    'size': 1
  }, { 'sourceID': 'hookylam', 'attributes': {}, 'targetID': 'ema93983729', 'size': 1 }, {
    'sourceID': 'kitwaho',
    'attributes': {},
    'targetID': 'HKguardian',
    'size': 1
  }, { 'sourceID': 'k_r_n_o', 'attributes': {}, 'targetID': 'DJ_XIBANYA', 'size': 1 }, {
    'sourceID': 'Angelina_M_L',
    'attributes': {},
    'targetID': 'stephengoldseal',
    'size': 1
  }, {
    'sourceID': 'onclesuperieur',
    'attributes': {},
    'targetID': 'HuPing1',
    'size': 1
  }, {
    'sourceID': 'HKDEMOCRACYNOW1',
    'attributes': {},
    'targetID': 'molamola214',
    'size': 1
  }, {
    'sourceID': 'bradlee16246911',
    'attributes': {},
    'targetID': 'baoxiaofeng',
    'size': 1
  }, {
    'sourceID': 'Lee93184179',
    'attributes': {},
    'targetID': 'Vivian82977741',
    'size': 1
  }, { 'sourceID': 'kanebbking', 'attributes': {}, 'targetID': 'SDeutschlands', 'size': 1 }, {
    'sourceID': 'NTDChinese',
    'attributes': {},
    'targetID': 'MaxTtll',
    'size': 1
  }, { 'sourceID': 'VOAHK', 'attributes': {}, 'targetID': 'Freemax2020', 'size': 1 }, {
    'sourceID': 'TW_nextmedia',
    'attributes': {},
    'targetID': 'FHk178',
    'size': 1
  }, { 'sourceID': 'et236', 'attributes': {}, 'targetID': 'zwzw_22', 'size': 1 }, {
    'sourceID': 'ClaudiaMCMo',
    'attributes': {},
    'targetID': 'Mike16301002',
    'size': 1
  }, { 'sourceID': 'hanrongli', 'attributes': {}, 'targetID': 'jojolenelene1', 'size': 1 }, {
    'sourceID': 'CEcn_News',
    'attributes': {},
    'targetID': 'kids_kim',
    'size': 1
  }, { 'sourceID': 'mileslam', 'attributes': {}, 'targetID': 'kamanchan17', 'size': 1 }, {
    'sourceID': 'charlesmok',
    'attributes': {},
    'targetID': 'freespiritnwill',
    'size': 1
  }, { 'sourceID': 'yang_danhe', 'attributes': {}, 'targetID': 'MingjingFocus', 'size': 1 }, {
    'sourceID': 'texlahoma3',
    'attributes': {},
    'targetID': 'Tong_Shuo',
    'size': 1
  }, {
    'sourceID': 'n_sfreedomestic',
    'attributes': {},
    'targetID': 'bornbredinhk',
    'size': 1
  }, { 'sourceID': 'kuonyuu', 'attributes': {}, 'targetID': 'kikuchih1', 'size': 1 }, {
    'sourceID': 'shhcaa',
    'attributes': {},
    'targetID': 'NicoleCeciWai',
    'size': 1
  }, { 'sourceID': 'freeedomhai', 'attributes': {}, 'targetID': 'ema93983729', 'size': 1 }, {
    'sourceID': 'SinoSeer',
    'attributes': {},
    'targetID': 'HeungGongYan0',
    'size': 1
  }, {
    'sourceID': 'HongkongerMs',
    'attributes': {},
    'targetID': 'Ren08486021',
    'size': 1
  }, {
    'sourceID': 'china5000_us',
    'attributes': {},
    'targetID': 'eggkingdom1',
    'size': 1
  }, {
    'sourceID': 'LeafLhraxSnX5Gw',
    'attributes': {},
    'targetID': 'PetrakeW',
    'size': 1
  }, {
    'sourceID': 'EmilieJiang',
    'attributes': {},
    'targetID': 'IsraVictory',
    'size': 1
  }, {
    'sourceID': 'QuanqiuLianbo',
    'attributes': {},
    'targetID': 'Andychanhotin',
    'size': 1
  }, { 'sourceID': 'hookylam', 'attributes': {}, 'targetID': 'HunanToday', 'size': 1 }, {
    'sourceID': 'sese7820',
    'attributes': {},
    'targetID': 'cnewsgovhk',
    'size': 1
  }, { 'sourceID': 'hsu44012222', 'attributes': {}, 'targetID': 'anacrose', 'size': 1 }, {
    'sourceID': 'OneLonelyLeaf',
    'attributes': {},
    'targetID': 'dongnan2030',
    'size': 1
  }, { 'sourceID': 'calci7er', 'attributes': {}, 'targetID': 'voacantonese', 'size': 1 }, {
    'sourceID': 'Leetasizan',
    'attributes': {},
    'targetID': 'abbyabababab',
    'size': 1
  }, { 'sourceID': 'VersieWoof', 'attributes': {}, 'targetID': 'Halim20886893', 'size': 1 }, {
    'sourceID': 'DJ_XIBANYA',
    'attributes': {},
    'targetID': 'tqd2017nyc',
    'size': 1
  }, {
    'sourceID': 'AmyHugh4',
    'attributes': {},
    'targetID': 'LydiaWa19763373',
    'size': 1
  }, {
    'sourceID': 'sekiro17446872',
    'attributes': {},
    'targetID': 'BluSummerSky',
    'size': 1
  }, { 'sourceID': 'AtomTong3', 'attributes': {}, 'targetID': 'tanguxiaojin', 'size': 1 }, {
    'sourceID': 'simonkwan8',
    'attributes': {},
    'targetID': 'B_I_S_hospital',
    'size': 1
  }, {
    'sourceID': 'eggieofhk',
    'attributes': {},
    'targetID': 'BubbleBreakBS',
    'size': 1
  }, { 'sourceID': 'WpxmFvj3sUA5ZGN', 'attributes': {}, 'targetID': 'GaviWu', 'size': 1 }, {
    'sourceID': 'slyc852',
    'attributes': {},
    'targetID': 'FzJa5oBdLdLR6KJ',
    'size': 1
  }, { 'sourceID': 'tomrummy2', 'attributes': {}, 'targetID': 'TheMuffStuff', 'size': 1 }, {
    'sourceID': 'texx731',
    'attributes': {},
    'targetID': 'Co_standwithHK',
    'size': 1
  }, {
    'sourceID': 'myy82charlie',
    'attributes': {},
    'targetID': 'bradlee16246911',
    'size': 1
  }, { 'sourceID': '18261999wer', 'attributes': {}, 'targetID': 'lvv2com', 'size': 1 }, {
    'sourceID': 'Freedomchina6',
    'attributes': {},
    'targetID': 'benchrstina',
    'size': 1
  }, { 'sourceID': 'Kuitauyin', 'attributes': {}, 'targetID': 'ANKANINE1', 'size': 1 }, {
    'sourceID': 'Baron16259809',
    'attributes': {},
    'targetID': 'hkerLEDlol_',
    'size': 1
  }, { 'sourceID': 'wenyan2', 'attributes': {}, 'targetID': 'Freemax2020', 'size': 1 }, {
    'sourceID': 'nes_tarot',
    'attributes': {},
    'targetID': 'HKguardian',
    'size': 1
  }, {
    'sourceID': 'hkernot1less',
    'attributes': {},
    'targetID': 'RogerHPNg',
    'size': 1
  }, {
    'sourceID': 'JohnsonLPThong',
    'attributes': {},
    'targetID': 'Itz7IudN4BU9uVK',
    'size': 1
  }, { 'sourceID': 'yezhiwei', 'attributes': {}, 'targetID': 'GodBlessHK18', 'size': 1 }, {
    'sourceID': 'Halim20886893',
    'attributes': {},
    'targetID': 'lotus_pak',
    'size': 1
  }, {
    'sourceID': 'Lam123123Terry',
    'attributes': {},
    'targetID': '3dddyHuigui',
    'size': 1
  }, {
    'sourceID': 'HongKongFP',
    'attributes': {},
    'targetID': 'Fish65064857',
    'size': 1
  }, {
    'sourceID': 'nanyangpress',
    'attributes': {},
    'targetID': 'NR62Vx7WWVJVsDb',
    'size': 1
  }, { 'sourceID': 'TMAN2020', 'attributes': {}, 'targetID': 'fuckpopo3', 'size': 1 }, {
    'sourceID': 'HuPing1',
    'attributes': {},
    'targetID': 'liberatehkg',
    'size': 1
  }, { 'sourceID': 'LDUSNews', 'attributes': {}, 'targetID': 'MJParisNews', 'size': 1 }, {
    'sourceID': 'china5000_us',
    'attributes': {},
    'targetID': 'admit2sin',
    'size': 1
  }, {
    'sourceID': 'joshuawongcf',
    'attributes': {},
    'targetID': 'Standwi13696803',
    'size': 1
  }, {
    'sourceID': 'CX0J5dftYExob2E',
    'attributes': {},
    'targetID': 'ttingxiao',
    'size': 1
  }, { 'sourceID': 'NovEspeXera', 'attributes': {}, 'targetID': 'MaxTtll', 'size': 1 }, {
    'sourceID': 'Arrryin',
    'attributes': {},
    'targetID': 'TW_nextmedia',
    'size': 1
  }, { 'sourceID': 'haiwainet', 'attributes': {}, 'targetID': 'Em55667416', 'size': 1 }, {
    'sourceID': 'KxMmyg',
    'attributes': {},
    'targetID': 'mi_standwithHK',
    'size': 1
  }, {
    'sourceID': 'CLC60391352',
    'attributes': {},
    'targetID': 'Em55667416',
    'size': 1
  }, {
    'sourceID': 'haixTlaphsjtmr',
    'attributes': {},
    'targetID': 'QueenieLiu11',
    'size': 1
  }, { 'sourceID': 'zhaozhenxiang', 'attributes': {}, 'targetID': 'HeiJeremy', 'size': 1 }, {
    'sourceID': 'SelinaJin1',
    'attributes': {},
    'targetID': 'ho166',
    'size': 1
  }, { 'sourceID': 'LDMacauNews', 'attributes': {}, 'targetID': 'Sophy5', 'size': 1 }, {
    'sourceID': 'SwedenMoli2017',
    'attributes': {},
    'targetID': 'PaulLaw60654084',
    'size': 1
  }, { 'sourceID': 'RFI_TradCn', 'attributes': {}, 'targetID': 'Pingyatyat', 'size': 1 }, {
    'sourceID': 'meilong15',
    'attributes': {},
    'targetID': 'LiuDuShiJie',
    'size': 1
  }, { 'sourceID': 'sese7820', 'attributes': {}, 'targetID': 'a1256966686', 'size': 1 }, {
    'sourceID': 'gaoyu200812',
    'attributes': {},
    'targetID': 'RFI_TradCn',
    'size': 1
  }, {
    'sourceID': 'CX0J5dftYExob2E',
    'attributes': {},
    'targetID': 'liuyun2018',
    'size': 1
  }, {
    'sourceID': 'FreedomHKG',
    'attributes': {},
    'targetID': 'MJParisNews',
    'size': 1
  }, {
    'sourceID': 'cookies_venus',
    'attributes': {},
    'targetID': 'haixTlaphsjtmr',
    'size': 1
  }, { 'sourceID': 'TransStateBelle', 'attributes': {}, 'targetID': 'Leojunite', 'size': 1 }, {
    'sourceID': 'SungChor',
    'attributes': {},
    'targetID': 'wai46223378',
    'size': 1
  }, {
    'sourceID': 'Bayi70917871',
    'attributes': {},
    'targetID': 'LawChiman',
    'size': 1
  }, { 'sourceID': 'allan64625277', 'attributes': {}, 'targetID': 'RWNelson7', 'size': 1 }, {
    'sourceID': 'szeyan1220',
    'attributes': {},
    'targetID': 'standwithhk2047',
    'size': 1
  }, {
    'sourceID': 'LkjhgfdMxy3',
    'attributes': {},
    'targetID': 'RFA_Chinese',
    'size': 1
  }, {
    'sourceID': 'Andychanhotin',
    'attributes': {},
    'targetID': 'HKDogLover2',
    'size': 1
  }, { 'sourceID': 'lihuan6688', 'attributes': {}, 'targetID': 'staywithhk1', 'size': 1 }, {
    'sourceID': 'WoobieKTada',
    'attributes': {},
    'targetID': 'TheMuffStuff',
    'size': 1
  }, { 'sourceID': 'rambo853_2000km', 'attributes': {}, 'targetID': 'hanrongli', 'size': 1 }, {
    'sourceID': 'Dubha3',
    'attributes': {},
    'targetID': 'HongKongFP',
    'size': 1
  }, {
    'sourceID': 'Standwi13696803',
    'attributes': {},
    'targetID': 'lewis_kikiki',
    'size': 1
  }, { 'sourceID': 'HKguardian', 'attributes': {}, 'targetID': 'Tong_Shuo', 'size': 1 }, {
    'sourceID': 'MingjingToday',
    'attributes': {},
    'targetID': 'kykl',
    'size': 1
  }, { 'sourceID': 'msntaiwan', 'attributes': {}, 'targetID': 'a118390', 'size': 1 }, {
    'sourceID': 'standwithhknow',
    'attributes': {},
    'targetID': 'onclesuperieur',
    'size': 1
  }, {
    'sourceID': 'LoFRetTIrDaQRHi',
    'attributes': {},
    'targetID': 'lvv2com',
    'size': 1
  }, { 'sourceID': 'gujiangjiang', 'attributes': {}, 'targetID': 'abeleung', 'size': 1 }, {
    'sourceID': 'CEcn_News',
    'attributes': {},
    'targetID': 'Jackson06280428',
    'size': 1
  }, {
    'sourceID': 'globalnews_ltn',
    'attributes': {},
    'targetID': 'manyrabbitscc',
    'size': 1
  }, {
    'sourceID': '87ba24d433114f1',
    'attributes': {},
    'targetID': 'zhanglifan',
    'size': 1
  }, { 'sourceID': 'RFA_Chinese', 'attributes': {}, 'targetID': 'BeijingEye', 'size': 1 }, {
    'sourceID': 'hkgers2019',
    'attributes': {},
    'targetID': 'XiaosongWangUSA',
    'size': 1
  }, {
    'sourceID': 'PeterYu0970',
    'attributes': {},
    'targetID': 'Longbow1066',
    'size': 1
  }, {
    'sourceID': 'ROKUGATSUJUNE',
    'attributes': {},
    'targetID': 'XinWenShiShiBao',
    'size': 1
  }, { 'sourceID': 'Jan58473367', 'attributes': {}, 'targetID': 'HoareKortney', 'size': 1 }, {
    'sourceID': '912Guy',
    'attributes': {},
    'targetID': 'standwithhknow',
    'size': 1
  }, {
    'sourceID': 'Catherinecat826',
    'attributes': {},
    'targetID': 'HK_is_China_Gov',
    'size': 1
  }, {
    'sourceID': 'Dubha3',
    'attributes': {},
    'targetID': 'iunFQtcuoPRpHDb',
    'size': 1
  }, {
    'sourceID': 'manyrabbitscc',
    'attributes': {},
    'targetID': 'caichu88',
    'size': 1
  }, {
    'sourceID': 'tiffany02343903',
    'attributes': {},
    'targetID': 'nextdodo',
    'size': 1
  }, { 'sourceID': 'Evertbeetho', 'attributes': {}, 'targetID': 'dajiyuan', 'size': 1 }, {
    'sourceID': 'nikiv_86911',
    'attributes': {},
    'targetID': '168schk',
    'size': 1
  }, { 'sourceID': 'mileslam', 'attributes': {}, 'targetID': 'hanrongli', 'size': 1 }, {
    'sourceID': 'TatieChoukette',
    'attributes': {},
    'targetID': 'HKers_HKers',
    'size': 1
  }, { 'sourceID': 'TamManLai1', 'attributes': {}, 'targetID': 'AtomTong3', 'size': 1 }, {
    'sourceID': 'HaruJan4',
    'attributes': {},
    'targetID': 'econpoetic',
    'size': 1
  }, { 'sourceID': 'dcv3ymSFpwhBspC', 'attributes': {}, 'targetID': 'suntinhk', 'size': 1 }, {
    'sourceID': 'baoguangtv',
    'attributes': {},
    'targetID': '18261999wer',
    'size': 1
  }, { 'sourceID': 'aq2men', 'attributes': {}, 'targetID': 'Kashi_1017', 'size': 1 }, {
    'sourceID': 'kitwaho',
    'attributes': {},
    'targetID': 'ANKANINE1',
    'size': 1
  }, { 'sourceID': 'RFI_Cn', 'attributes': {}, 'targetID': 'PolicyApple', 'size': 1 }, {
    'sourceID': 'Msy30001',
    'attributes': {},
    'targetID': 'NTDChinese',
    'size': 1
  }, {
    'sourceID': 'MingjingLive',
    'attributes': {},
    'targetID': 'Vincy64175135',
    'size': 1
  }, { 'sourceID': 'defendhk1', 'attributes': {}, 'targetID': '168schk', 'size': 1 }, {
    'sourceID': 'hkernot1less',
    'attributes': {},
    'targetID': 'GracoValrie',
    'size': 1
  }, { 'sourceID': 'Dubha3', 'attributes': {}, 'targetID': 'cindywei2017', 'size': 1 }, {
    'sourceID': 'liusega',
    'attributes': {},
    'targetID': 'Superwoman_Jess',
    'size': 1
  }, {
    'sourceID': 'FreeHKgaayau',
    'attributes': {},
    'targetID': 'uBAqHAwc95AfRD8',
    'size': 1
  }, {
    'sourceID': 'iunFQtcuoPRpHDb',
    'attributes': {},
    'targetID': 'Freedomchina6',
    'size': 1
  }, { 'sourceID': 'aerbeis', 'attributes': {}, 'targetID': 'Angelina_M_L', 'size': 1 }, {
    'sourceID': 'gongminyundong',
    'attributes': {},
    'targetID': 'Dubha3',
    'size': 1
  }, { 'sourceID': 'ChanSamuel10', 'attributes': {}, 'targetID': 'econpoetic', 'size': 1 }, {
    'sourceID': 'gm_shih',
    'attributes': {},
    'targetID': 'ema93983729',
    'size': 1
  }, {
    'sourceID': 'CX0J5dftYExob2E',
    'attributes': {},
    'targetID': 'icablenews',
    'size': 1
  }, {
    'sourceID': 'Halim20886893',
    'attributes': {},
    'targetID': 'Ching15134179',
    'size': 1
  }, {
    'sourceID': 'GNAzPMf3XvYijaH',
    'attributes': {},
    'targetID': 'JAbbott45624607',
    'size': 1
  }, { 'sourceID': 'RockyWang66', 'attributes': {}, 'targetID': 'TongMediaHK', 'size': 1 }, {
    'sourceID': 'aboluowang',
    'attributes': {},
    'targetID': 'Pingyatyat',
    'size': 1
  }, { 'sourceID': 'Sakura50837268', 'attributes': {}, 'targetID': 'Code46499', 'size': 1 }, {
    'sourceID': 'RFI_Cn',
    'attributes': {},
    'targetID': '8worldnews',
    'size': 1
  }, { 'sourceID': 'ryomatome_tokua', 'attributes': {}, 'targetID': 'WoobieKTada', 'size': 1 }, {
    'sourceID': 'Dubha3',
    'attributes': {},
    'targetID': 'TqnHnpz8rrMoZQj',
    'size': 1
  }, { 'sourceID': 'wl2019831', 'attributes': {}, 'targetID': 'VvFoodie', 'size': 1 }, {
    'sourceID': 'tastesmelllife',
    'attributes': {},
    'targetID': 'liberatehkg',
    'size': 1
  }, {
    'sourceID': 'lz_64',
    'attributes': {},
    'targetID': 'XinWenShiShiBao',
    'size': 1
  }, { 'sourceID': 'jeff_bahangsan', 'attributes': {}, 'targetID': 'Mahgi9', 'size': 1 }, {
    'sourceID': 'benchrstina',
    'attributes': {},
    'targetID': 'aboutfish',
    'size': 1
  }, {
    'sourceID': 'TaoTaoyu2',
    'attributes': {},
    'targetID': 'EnragedHongkon1',
    'size': 1
  }, {
    'sourceID': 'HongKongPLG',
    'attributes': {},
    'targetID': 'bornbredinhk',
    'size': 1
  }, { 'sourceID': 'RitaWon30015101', 'attributes': {}, 'targetID': 'meilong15', 'size': 1 }, {
    'sourceID': 'Chowwt',
    'attributes': {},
    'targetID': '6TM3t8IrQvWTxkw',
    'size': 1
  }, { 'sourceID': 'bradlee16246911', 'attributes': {}, 'targetID': 'liberatehkg', 'size': 1 }, {
    'sourceID': 'OkayLau',
    'attributes': {},
    'targetID': 'chaplinwu',
    'size': 1
  }, { 'sourceID': 'NTDCanada', 'attributes': {}, 'targetID': 'dajueli', 'size': 1 }, {
    'sourceID': 'Zhong_Weisen',
    'attributes': {},
    'targetID': 'SirhcGnow',
    'size': 1
  }, {
    'sourceID': 'AlexGucinari',
    'attributes': {},
    'targetID': 'XiaosongWangUSA',
    'size': 1
  }, {
    'sourceID': 'SinoSeer',
    'attributes': {},
    'targetID': 'serika_sino',
    'size': 1
  }, {
    'sourceID': 'RSccSzfblnJgbKo',
    'attributes': {},
    'targetID': 'FredLeung10',
    'size': 1
  }, {
    'sourceID': 'jianzhongwang4',
    'attributes': {},
    'targetID': 'LaiFrederik',
    'size': 1
  }, { 'sourceID': 'Em55667416', 'attributes': {}, 'targetID': 'CEcn_News', 'size': 1 }, {
    'sourceID': 'jtl_352003',
    'attributes': {},
    'targetID': 'ouyanglishi2019',
    'size': 1
  }, { 'sourceID': 'molamola214', 'attributes': {}, 'targetID': 'HK_is_China_Gov', 'size': 1 }, {
    'sourceID': 'yukikei',
    'attributes': {},
    'targetID': 'KaKa45008465',
    'size': 1
  }, { 'sourceID': 'yauwaiching', 'attributes': {}, 'targetID': 'SirhcGnow', 'size': 1 }, {
    'sourceID': '_toastNjam',
    'attributes': {},
    'targetID': 'hinhung0119',
    'size': 1
  }, {
    'sourceID': 'AllenZeng20',
    'attributes': {},
    'targetID': 'StandwithHK_JPN',
    'size': 1
  }, {
    'sourceID': 'withoutawell',
    'attributes': {},
    'targetID': 'zhonghua70',
    'size': 1
  }, {
    'sourceID': 'm7ThtCxcFJK9bzh',
    'attributes': {},
    'targetID': 'cnliuyu1110',
    'size': 1
  }, { 'sourceID': 'LUsagiii', 'attributes': {}, 'targetID': 'SigmaSDQ', 'size': 1 }, {
    'sourceID': 'ZhaoMingObserve',
    'attributes': {},
    'targetID': 'palm18406422',
    'size': 1
  }, {
    'sourceID': 'lixulai1',
    'attributes': {},
    'targetID': 'standwi08717514',
    'size': 1
  }, { 'sourceID': 'Jan58473367', 'attributes': {}, 'targetID': 'BulletHong', 'size': 1 }, {
    'sourceID': 'moto531',
    'attributes': {},
    'targetID': 'LandiCao',
    'size': 1
  }, {
    'sourceID': 'octoberforth',
    'attributes': {},
    'targetID': 'lanzhansheng',
    'size': 1
  }, { 'sourceID': 'crystalfok', 'attributes': {}, 'targetID': 'bsdscn', 'size': 1 }, {
    'sourceID': 'Andychanhotin',
    'attributes': {},
    'targetID': 'expat219',
    'size': 1
  }, {
    'sourceID': 'Angel88052901',
    'attributes': {},
    'targetID': 'su_ge01142893',
    'size': 1
  }, {
    'sourceID': 'YPyPJY37BBy2AHb',
    'attributes': {},
    'targetID': 'LamMarston',
    'size': 1
  }, { 'sourceID': 'econpoetic', 'attributes': {}, 'targetID': 'FredLeung10', 'size': 1 }, {
    'sourceID': 'MingJingNews',
    'attributes': {},
    'targetID': 'hkindigenous',
    'size': 1
  }, {
    'sourceID': 'trackingpaws',
    'attributes': {},
    'targetID': 'hkindigenous',
    'size': 1
  }, {
    'sourceID': 'MingjingTVAsia',
    'attributes': {},
    'targetID': 'RfaCantonese',
    'size': 1
  }, { 'sourceID': 'shaolao5', 'attributes': {}, 'targetID': 'MaggieHo20', 'size': 1 }, {
    'sourceID': 'LDMacauNews',
    'attributes': {},
    'targetID': 'searchalltruth',
    'size': 1
  }, { 'sourceID': 'ILoveGZ1', 'attributes': {}, 'targetID': 'Catherinecat826', 'size': 1 }, {
    'sourceID': 'kikuchih1',
    'attributes': {},
    'targetID': 'ducnnet',
    'size': 1
  }, { 'sourceID': 'G2_1988', 'attributes': {}, 'targetID': 'Em55667416', 'size': 1 }, {
    'sourceID': 'v_vcchan',
    'attributes': {},
    'targetID': 'simonkwan8',
    'size': 1
  }, {
    'sourceID': 'kiyoandthesea',
    'attributes': {},
    'targetID': 'liuzhiqiang1954',
    'size': 1
  }, {
    'sourceID': 'HKDEMOCRACYNOW1',
    'attributes': {},
    'targetID': 'StandwithHK_JPN',
    'size': 1
  }, { 'sourceID': 'BulletHong', 'attributes': {}, 'targetID': 'Mahgi9', 'size': 1 }, {
    'sourceID': 'xiaoxiannv526',
    'attributes': {},
    'targetID': 'kanebbking',
    'size': 1
  }, { 'sourceID': 'MaryCha52747410', 'attributes': {}, 'targetID': 'Eurasch', 'size': 1 }, {
    'sourceID': 'ducnnet',
    'attributes': {},
    'targetID': 'bannedebook',
    'size': 1
  }, {
    'sourceID': 'GodBlessHK18',
    'attributes': {},
    'targetID': 'RFA_Chinese',
    'size': 1
  }, {
    'sourceID': 'stephengoldseal',
    'attributes': {},
    'targetID': 'standwithHKerrr',
    'size': 1
  }, { 'sourceID': 'zdyee1', 'attributes': {}, 'targetID': 'standwithhkj', 'size': 1 }, {
    'sourceID': 'cnliuyu1110',
    'attributes': {},
    'targetID': 'joshuawongcf',
    'size': 1
  }, {
    'sourceID': 'Evertbeetho',
    'attributes': {},
    'targetID': 'BubbleBreakBS',
    'size': 1
  }, {
    'sourceID': 'WgsK2VLKdBimfao',
    'attributes': {},
    'targetID': 'hongkongdaobao',
    'size': 1
  }, {
    'sourceID': 'Raymond31954081',
    'attributes': {},
    'targetID': 'weathernerdshk',
    'size': 1
  }, { 'sourceID': 'yidiankanshijie', 'attributes': {}, 'targetID': 'HongSica', 'size': 1 }, {
    'sourceID': 'RogerHPNg',
    'attributes': {},
    'targetID': 'aigaogaoUSA',
    'size': 1
  }, { 'sourceID': 'derekli84134905', 'attributes': {}, 'targetID': 'ttingxiao', 'size': 1 }, {
    'sourceID': 'tomrummy2',
    'attributes': {},
    'targetID': 'slidsuse',
    'size': 1
  }, {
    'sourceID': 'xiaoxin11786630',
    'attributes': {},
    'targetID': 'baoguangtv',
    'size': 1
  }, { 'sourceID': 'Louise_201969', 'attributes': {}, 'targetID': 'Yuguotianhei', 'size': 1 }, {
    'sourceID': 'aq2men',
    'attributes': {},
    'targetID': 'NowNews99',
    'size': 1
  }, { 'sourceID': 'fcnrhthatr', 'attributes': {}, 'targetID': 'RWNelson7', 'size': 1 }, {
    'sourceID': 'AinChinese',
    'attributes': {},
    'targetID': 'Arrryin',
    'size': 1
  }, {
    'sourceID': 'tanguxiaojin',
    'attributes': {},
    'targetID': 'hjjohnson17',
    'size': 1
  }, {
    'sourceID': '2020_victory',
    'attributes': {},
    'targetID': 'nikiv_86911',
    'size': 1
  }, { 'sourceID': 'Vincy64175135', 'attributes': {}, 'targetID': 'HkCtn', 'size': 1 }, {
    'sourceID': 'tqd2017nyc',
    'attributes': {},
    'targetID': 'hsu44012222',
    'size': 1
  }, { 'sourceID': 'love_umei', 'attributes': {}, 'targetID': 'bornbredinhk', 'size': 1 }, {
    'sourceID': 'HCYHK',
    'attributes': {},
    'targetID': 'VOAChinese',
    'size': 1
  }, {
    'sourceID': 'tiffany02343903',
    'attributes': {},
    'targetID': 'JamesHsiehTW',
    'size': 1
  }, { 'sourceID': 'PetrakeW', 'attributes': {}, 'targetID': 'lixinghuasky', 'size': 1 }, {
    'sourceID': 'pantongzhen',
    'attributes': {},
    'targetID': 'TGfree520',
    'size': 1
  }, { 'sourceID': 'TGTLiberateHK', 'attributes': {}, 'targetID': 'Louise_201969', 'size': 1 }, {
    'sourceID': 'Swkit5',
    'attributes': {},
    'targetID': 'hka1989',
    'size': 1
  }, {
    'sourceID': 'thepapercn',
    'attributes': {},
    'targetID': 'XunLongJi2018',
    'size': 1
  }, {
    'sourceID': 'dazhangfujp',
    'attributes': {},
    'targetID': 'Wenjiesong3',
    'size': 1
  }, {
    'sourceID': 'PassionTimes',
    'attributes': {},
    'targetID': 'Raymond31954081',
    'size': 1
  }, {
    'sourceID': 'wakeupfrog01',
    'attributes': {},
    'targetID': 'Mike16301002',
    'size': 1
  }, {
    'sourceID': 'TransStateBelle',
    'attributes': {},
    'targetID': 'RadioFreeAsiajp',
    'size': 1
  }, { 'sourceID': 'expat219', 'attributes': {}, 'targetID': 'JeffShen19', 'size': 1 }, {
    'sourceID': 'chng70733062',
    'attributes': {},
    'targetID': 'LeafLhraxSnX5Gw',
    'size': 1
  }, { 'sourceID': 'ClaudiaMCMo', 'attributes': {}, 'targetID': 'kids_kim', 'size': 1 }, {
    'sourceID': 'fduyuyture65',
    'attributes': {},
    'targetID': 'TuCaoFakeNews',
    'size': 1
  }, {
    'sourceID': 'IsraVictory',
    'attributes': {},
    'targetID': 'TuCaoFakeNews',
    'size': 1
  }, { 'sourceID': 'Matilda_C_Law', 'attributes': {}, 'targetID': 'Terence', 'size': 1 }, {
    'sourceID': 'SkyLJ2',
    'attributes': {},
    'targetID': 'kzglife',
    'size': 1
  }, { 'sourceID': 'zhonghua70', 'attributes': {}, 'targetID': 'sanzhao41', 'size': 1 }, {
    'sourceID': 'RWNelson7',
    'attributes': {},
    'targetID': 'RFI_Cn',
    'size': 1
  }, {
    'sourceID': 'leonids_meteor',
    'attributes': {},
    'targetID': 'msntaiwan',
    'size': 1
  }, { 'sourceID': 'laoqiangshou', 'attributes': {}, 'targetID': 'MJTVHoPin', 'size': 1 }, {
    'sourceID': 'eggkingdom1',
    'attributes': {},
    'targetID': 'milpitas95035',
    'size': 1
  }, { 'sourceID': 'hkerLEDlol_', 'attributes': {}, 'targetID': 'QuanqiuLive', 'size': 1 }, {
    'sourceID': 'Tonyworld15',
    'attributes': {},
    'targetID': 'sufangfeng2019',
    'size': 1
  }, { 'sourceID': 'abeleung', 'attributes': {}, 'targetID': 'Arrryin', 'size': 1 }, {
    'sourceID': 'HKmoviefan',
    'attributes': {},
    'targetID': 'haruchann_jan',
    'size': 1
  }, {
    'sourceID': 'MingjingLive',
    'attributes': {},
    'targetID': 'ManYuen_Ng',
    'size': 1
  }, {
    'sourceID': 'CarolChan312',
    'attributes': {},
    'targetID': 'Fight4HongKong',
    'size': 1
  }, {
    'sourceID': 'myy82charlie',
    'attributes': {},
    'targetID': 'HongkongerMs',
    'size': 1
  }, {
    'sourceID': 'KTluJjoeW4xdsg6',
    'attributes': {},
    'targetID': 'Katy17997436',
    'size': 1
  }, { 'sourceID': 'aky73246834', 'attributes': {}, 'targetID': 'msntaiwan', 'size': 1 }, {
    'sourceID': 'Ching15134179',
    'attributes': {},
    'targetID': 'kamanchan17',
    'size': 1
  }, { 'sourceID': 'lanzhansheng', 'attributes': {}, 'targetID': 'joshuawongcf', 'size': 1 }, {
    'sourceID': 'OkayLau',
    'attributes': {},
    'targetID': 'Bobrother5',
    'size': 1
  }, { 'sourceID': 'ho166', 'attributes': {}, 'targetID': 'YihsiangShih', 'size': 1 }, {
    'sourceID': 'PhilipsY18',
    'attributes': {},
    'targetID': 'cindywei2017',
    'size': 1
  }, {
    'sourceID': 'PeonyShum',
    'attributes': {},
    'targetID': 'Vivian82977741',
    'size': 1
  }, { 'sourceID': 'PeterYu0970', 'attributes': {}, 'targetID': 'kitwaho', 'size': 1 }, {
    'sourceID': 'PSY36kwoHmsMylX',
    'attributes': {},
    'targetID': 'denton38314384',
    'size': 1
  }, {
    'sourceID': 'Riko_Fx_Day7',
    'attributes': {},
    'targetID': 'Fight4HongKong',
    'size': 1
  }, {
    'sourceID': 'Ben_s214',
    'attributes': {},
    'targetID': 'FjgKxrc5VBKmJxh',
    'size': 1
  }, {
    'sourceID': 'LaiFrederik',
    'attributes': {},
    'targetID': 'liberatehkg',
    'size': 1
  }, {
    'sourceID': 'onclesuperieur',
    'attributes': {},
    'targetID': 'BoxunN',
    'size': 1
  }, { 'sourceID': 'RealHongKonger2', 'attributes': {}, 'targetID': 'SinoSeer', 'size': 1 }, {
    'sourceID': 'EddiePang9',
    'attributes': {},
    'targetID': 'slyc852',
    'size': 1
  }, { 'sourceID': 'RWNelson7', 'attributes': {}, 'targetID': 'wikikik88840662', 'size': 1 }, {
    'sourceID': 'China_vtv',
    'attributes': {},
    'targetID': 'LrBlUA8AsssKdx4',
    'size': 1
  }, { 'sourceID': 'AmyHugh4', 'attributes': {}, 'targetID': 'iy88888888', 'size': 1 }, {
    'sourceID': 'XieTianqi2015',
    'attributes': {},
    'targetID': 'mikiki568513741',
    'size': 1
  }, { 'sourceID': 'Freedomchina6', 'attributes': {}, 'targetID': 'zdyee1', 'size': 1 }, {
    'sourceID': 'Stacey05112',
    'attributes': {},
    'targetID': 'kids_kim',
    'size': 1
  }, { 'sourceID': 'SerenaSin', 'attributes': {}, 'targetID': 'chrlcg', 'size': 1 }, {
    'sourceID': 'wi60184394',
    'attributes': {},
    'targetID': 'jojolenelene1',
    'size': 1
  }, {
    'sourceID': 'zhangheci',
    'attributes': {},
    'targetID': 'FzJa5oBdLdLR6KJ',
    'size': 1
  }, { 'sourceID': 'antielabhk', 'attributes': {}, 'targetID': 'Grog_Go', 'size': 1 }, {
    'sourceID': 'ronronaldald',
    'attributes': {},
    'targetID': 'cavan_yau',
    'size': 1
  }, { 'sourceID': 'sinbad_W', 'attributes': {}, 'targetID': 'a118390', 'size': 1 }, {
    'sourceID': 'ryomatome_tokua',
    'attributes': {},
    'targetID': 'LoVellMInGll',
    'size': 1
  }, {
    'sourceID': 'baoguangtv',
    'attributes': {},
    'targetID': 'XunLongJi2018',
    'size': 1
  }, { 'sourceID': 'jojolenelene1', 'attributes': {}, 'targetID': 'icablenews', 'size': 1 }, {
    'sourceID': 'tax_free',
    'attributes': {},
    'targetID': 'SZMG_zbgat',
    'size': 1
  }, { 'sourceID': 'becaTo1217', 'attributes': {}, 'targetID': 'Mike16301002', 'size': 1 }, {
    'sourceID': 'GracoValrie',
    'attributes': {},
    'targetID': 'stitchbobo',
    'size': 1
  }, { 'sourceID': 'MingjingFocus', 'attributes': {}, 'targetID': 'jkhy16435548', 'size': 1 }, {
    'sourceID': 'ATC_Mike',
    'attributes': {},
    'targetID': 'Darkandstar2000',
    'size': 1
  }, { 'sourceID': 'G2_1988', 'attributes': {}, 'targetID': 'hongkiu1118', 'size': 1 }, {
    'sourceID': 'MaxTtll',
    'attributes': {},
    'targetID': 'TruthMediaCHN',
    'size': 1
  }, { 'sourceID': 'noname9855', 'attributes': {}, 'targetID': 'Niuphd', 'size': 1 }, {
    'sourceID': 'Vanessa47639987',
    'attributes': {},
    'targetID': 'laoqiangshou',
    'size': 1
  }, { 'sourceID': '_hotalu_', 'attributes': {}, 'targetID': 'szdaily1', 'size': 1 }, {
    'sourceID': 'xiaoxiannv526',
    'attributes': {},
    'targetID': 'Lam123123Terry',
    'size': 1
  }, {
    'sourceID': 'EmilieJiang',
    'attributes': {},
    'targetID': 'MingjingTVAsia',
    'size': 1
  }, { 'sourceID': 'RockyWang66', 'attributes': {}, 'targetID': 'fduyuyture65', 'size': 1 }, {
    'sourceID': 'econpoetic',
    'attributes': {},
    'targetID': 'HaruJan4',
    'size': 1
  }, { 'sourceID': 'tqd2017nyc', 'attributes': {}, 'targetID': 'memory0321', 'size': 1 }, {
    'sourceID': 'Yuguotianhei',
    'attributes': {},
    'targetID': 'GracoValrie',
    'size': 1
  }, { 'sourceID': 'somsomsom2012', 'attributes': {}, 'targetID': 'et236', 'size': 1 }, {
    'sourceID': 'FzJa5oBdLdLR6KJ',
    'attributes': {},
    'targetID': 'standwithhknow',
    'size': 1
  }, { 'sourceID': 'su_ge01142893', 'attributes': {}, 'targetID': 'hookylam', 'size': 1 }, {
    'sourceID': 'CHOI_SE_WOO',
    'attributes': {},
    'targetID': 'gongminyundong',
    'size': 1
  }, {
    'sourceID': 'somsomsom2012',
    'attributes': {},
    'targetID': 'gm_shih',
    'size': 1
  }, { 'sourceID': 'younghe87425190', 'attributes': {}, 'targetID': 'smokygreat', 'size': 1 }, {
    'sourceID': 'HkCtn',
    'attributes': {},
    'targetID': 'bornbredinhk',
    'size': 1
  }, { 'sourceID': 'PeonyShum', 'attributes': {}, 'targetID': 'lewis_kikiki', 'size': 1 }, {
    'sourceID': 'et236',
    'attributes': {},
    'targetID': 'GlobalTimes_CN',
    'size': 1
  }, {
    'sourceID': 'RockyWang66',
    'attributes': {},
    'targetID': 'ZhaoMingObserve',
    'size': 1
  }, { 'sourceID': '72Jarling', 'attributes': {}, 'targetID': 'VOAHK', 'size': 1 }, {
    'sourceID': 'withoutawell',
    'attributes': {},
    'targetID': 'kanebbking',
    'size': 1
  }, {
    'sourceID': 'Mahgi9',
    'attributes': {},
    'targetID': 'GNAzPMf3XvYijaH',
    'size': 1
  }, {
    'sourceID': 'JAbbott45624607',
    'attributes': {},
    'targetID': 'TransStateBelle',
    'size': 1
  }, {
    'sourceID': 'sXx8BVejT9w8MRV',
    'attributes': {},
    'targetID': 'TonyChungHonLam',
    'size': 1
  }, {
    'sourceID': 'searchalltruth',
    'attributes': {},
    'targetID': 'kathyyinn',
    'size': 1
  }, { 'sourceID': 'Sophie518421', 'attributes': {}, 'targetID': 'nobleits', 'size': 1 }, {
    'sourceID': 'MdiTafu',
    'attributes': {},
    'targetID': 'standwithhk_',
    'size': 1
  }, { 'sourceID': 'asuraof4', 'attributes': {}, 'targetID': 'summerhaho', 'size': 1 }, {
    'sourceID': 'dajueli',
    'attributes': {},
    'targetID': 'nu3taki',
    'size': 1
  }, { 'sourceID': 'gangaotai', 'attributes': {}, 'targetID': 'RockyWang66', 'size': 1 }, {
    'sourceID': 'PhilipsY18',
    'attributes': {},
    'targetID': 'WgsK2VLKdBimfao',
    'size': 1
  }, { 'sourceID': 'yezhiwei', 'attributes': {}, 'targetID': 'tqd2017nyc', 'size': 1 }, {
    'sourceID': 'M20835058',
    'attributes': {},
    'targetID': 'HKDogLover2',
    'size': 1
  }, { 'sourceID': 'im_hker', 'attributes': {}, 'targetID': 'lixinghuasky', 'size': 1 }, {
    'sourceID': 'hanrongli',
    'attributes': {},
    'targetID': 'Mike16301002',
    'size': 1
  }, { 'sourceID': 'zhanglifan', 'attributes': {}, 'targetID': 'LoVellMInGll', 'size': 1 }, {
    'sourceID': 'HkOhha',
    'attributes': {},
    'targetID': 'QuanqiuLianbo',
    'size': 1
  }, {
    'sourceID': 'iunFQtcuoPRpHDb',
    'attributes': {},
    'targetID': 'EEFromHongKong',
    'size': 1
  }, { 'sourceID': 'AllenZeng20', 'attributes': {}, 'targetID': 'FreeHKgaayau', 'size': 1 }, {
    'sourceID': 'kykl',
    'attributes': {},
    'targetID': 'Angelina_M_L',
    'size': 1
  }, { 'sourceID': 'HKwai288', 'attributes': {}, 'targetID': 'jtl_352003', 'size': 1 }, {
    'sourceID': 'PnW9eGAtThxLWLe',
    'attributes': {},
    'targetID': 'isoisokorokoro',
    'size': 1
  }, { 'sourceID': 'PhilipsShiu', 'attributes': {}, 'targetID': 'HunanToday', 'size': 1 }, {
    'sourceID': 'nathanlawkc',
    'attributes': {},
    'targetID': 'NeimuNews',
    'size': 1
  }, {
    'sourceID': 'sanzhao41',
    'attributes': {},
    'targetID': 'Yuguotianhei',
    'size': 1
  }, { 'sourceID': 'xiaoxiannv526', 'attributes': {}, 'targetID': 'hkopinion', 'size': 1 }, {
    'sourceID': 'HkCtn',
    'attributes': {},
    'targetID': 'dcv3ymSFpwhBspC',
    'size': 1
  }, { 'sourceID': 'molihua_org', 'attributes': {}, 'targetID': 'HCYHK', 'size': 1 }, {
    'sourceID': 'Evergreen2k',
    'attributes': {},
    'targetID': 'DjangoHcang',
    'size': 1
  }, { 'sourceID': 'AmyHugh4', 'attributes': {}, 'targetID': 'bsdscn', 'size': 1 }, {
    'sourceID': 'HongSica',
    'attributes': {},
    'targetID': '7k_QYS',
    'size': 1
  }, { 'sourceID': 'jkhy16435548', 'attributes': {}, 'targetID': 'funchi168', 'size': 1 }, {
    'sourceID': 'funchi168',
    'attributes': {},
    'targetID': 'yezhiwei',
    'size': 1
  }, { 'sourceID': 'EriksonHK', 'attributes': {}, 'targetID': 'trackingpaws', 'size': 1 }, {
    'sourceID': 'staywithhk1',
    'attributes': {},
    'targetID': 'tax_free',
    'size': 1
  }, { 'sourceID': 'summerhaho', 'attributes': {}, 'targetID': 'VOG2020', 'size': 1 }, {
    'sourceID': 'Any__Lee',
    'attributes': {},
    'targetID': 'hkopinion',
    'size': 1
  }, {
    'sourceID': 'isoisokorokoro',
    'attributes': {},
    'targetID': 'yoshicasaya',
    'size': 1
  }, { 'sourceID': 'tqd2017nyc', 'attributes': {}, 'targetID': 'PDChinese', 'size': 1 }, {
    'sourceID': 'NicoleCeciWai',
    'attributes': {},
    'targetID': 'Grog_Go',
    'size': 1
  }, {
    'sourceID': 'szdaily1',
    'attributes': {},
    'targetID': 'FocusNews99',
    'size': 1
  }, {
    'sourceID': 'wikikik88840662',
    'attributes': {},
    'targetID': 'onclesuperieur',
    'size': 1
  }, { 'sourceID': 'wangwangyue2019', 'attributes': {}, 'targetID': 'Niuphd', 'size': 1 }, {
    'sourceID': 'ray_slowbeat',
    'attributes': {},
    'targetID': 'derekli84134905',
    'size': 1
  }, { 'sourceID': 'eggieofhk', 'attributes': {}, 'targetID': 'SiuYuk777', 'size': 1 }, {
    'sourceID': 'Bobrother5',
    'attributes': {},
    'targetID': 'MingjingFocus',
    'size': 1
  }, { 'sourceID': 'Leojunite', 'attributes': {}, 'targetID': 'kzzzzz_', 'size': 1 }, {
    'sourceID': 'calci7er',
    'attributes': {},
    'targetID': 'cxzj',
    'size': 1
  }, {
    'sourceID': 'standwi59443180',
    'attributes': {},
    'targetID': 'benchrstina',
    'size': 1
  }, { 'sourceID': 'Takotakopolly', 'attributes': {}, 'targetID': 'zhanglifan', 'size': 1 }, {
    'sourceID': 'JJSaveHK9',
    'attributes': {},
    'targetID': 'jun19977',
    'size': 1
  }, { 'sourceID': 'molamola214', 'attributes': {}, 'targetID': 'Jim97147570', 'size': 1 }, {
    'sourceID': 'KS15630557',
    'attributes': {},
    'targetID': 'Szetochiyung1',
    'size': 1
  }, { 'sourceID': 'NTDCanada', 'attributes': {}, 'targetID': 'CNS1952', 'size': 1 }, {
    'sourceID': 'JeffShen19',
    'attributes': {},
    'targetID': 'chrlcg',
    'size': 1
  }, {
    'sourceID': 'XinWenShiShiBao',
    'attributes': {},
    'targetID': 'KenMast87763989',
    'size': 1
  }, {
    'sourceID': 'PnW9eGAtThxLWLe',
    'attributes': {},
    'targetID': 'bbcchinese',
    'size': 1
  }, { 'sourceID': 'Polo30248174', 'attributes': {}, 'targetID': 'kathyyinn', 'size': 1 }, {
    'sourceID': 'initiumnews',
    'attributes': {},
    'targetID': 'baoguangtv',
    'size': 1
  }, {
    'sourceID': 'Stacey05112',
    'attributes': {},
    'targetID': 'stephengoldseal',
    'size': 1
  }, { 'sourceID': 'AtomTong3', 'attributes': {}, 'targetID': 'edwinzhang', 'size': 1 }, {
    'sourceID': 'LoVellMInGll',
    'attributes': {},
    'targetID': 'RFI_TradCn',
    'size': 1
  }, {
    'sourceID': 'HKDogLover2',
    'attributes': {},
    'targetID': 'TYrUjqdlIaphtBw',
    'size': 1
  }, { 'sourceID': 'fuckpopo3', 'attributes': {}, 'targetID': 'molihua_org', 'size': 1 }, {
    'sourceID': 'dzjsqy',
    'attributes': {},
    'targetID': 'summerhaho',
    'size': 1
  }, { 'sourceID': '8worldnews', 'attributes': {}, 'targetID': 'Sophie518421', 'size': 1 }, {
    'sourceID': 'JnD852',
    'attributes': {},
    'targetID': 'sese7820',
    'size': 1
  }, { 'sourceID': 'Sophy5', 'attributes': {}, 'targetID': 'QueenieLiu11', 'size': 1 }, {
    'sourceID': 'liudunews',
    'attributes': {},
    'targetID': 'Kashi_1017',
    'size': 1
  }, { 'sourceID': 'MingjingToday', 'attributes': {}, 'targetID': 'becaTo1217', 'size': 1 }, {
    'sourceID': 'fuckpopo3',
    'attributes': {},
    'targetID': 'China_vtv',
    'size': 1
  }, {
    'sourceID': 'hjY2ToFQ3ScIWxN',
    'attributes': {},
    'targetID': 'gongminyundong',
    'size': 1
  }, { 'sourceID': 'cps_414', 'attributes': {}, 'targetID': 'ShawTim', 'size': 1 }, {
    'sourceID': 'TatieChoukette',
    'attributes': {},
    'targetID': 'KaKa45008465',
    'size': 1
  }, { 'sourceID': 'Lee97703713', 'attributes': {}, 'targetID': 'RockyWang66', 'size': 1 }, {
    'sourceID': 'gangaotai',
    'attributes': {},
    'targetID': 'VOAChinese',
    'size': 1
  }, {
    'sourceID': 'uBAqHAwc95AfRD8',
    'attributes': {},
    'targetID': 'm0492339684',
    'size': 1
  }, {
    'sourceID': 'PhilipsY18',
    'attributes': {},
    'targetID': 'PaulLaw60654084',
    'size': 1
  }, { 'sourceID': 'Raymond31954081', 'attributes': {}, 'targetID': 'shhcaa', 'size': 1 }, {
    'sourceID': 'freeedomhai',
    'attributes': {},
    'targetID': 'hjY2ToFQ3ScIWxN',
    'size': 1
  }, {
    'sourceID': 'RSccSzfblnJgbKo',
    'attributes': {},
    'targetID': 'HoareKortney',
    'size': 1
  }, { 'sourceID': 'nikiv_86911', 'attributes': {}, 'targetID': 'qssw81', 'size': 1 }, {
    'sourceID': 'LiuDuShiJie',
    'attributes': {},
    'targetID': '7k_QYS',
    'size': 1
  }, { 'sourceID': 'JohnsonLPThong', 'attributes': {}, 'targetID': 'mytwnews', 'size': 1 }, {
    'sourceID': 'smokygreat',
    'attributes': {},
    'targetID': 'aigaogaoUSA',
    'size': 1
  }, { 'sourceID': 'a1256966686', 'attributes': {}, 'targetID': 'ouyanglishi2019', 'size': 1 }, {
    'sourceID': 'HkerInt',
    'attributes': {},
    'targetID': 'LUsagiii',
    'size': 1
  }, {
    'sourceID': 'gaoyu200812',
    'attributes': {},
    'targetID': 'putuliza',
    'size': 1
  }, {
    'sourceID': 'CriticalCezanne',
    'attributes': {},
    'targetID': '2020_victory',
    'size': 1
  }, { 'sourceID': 'TuCaoFakeNews', 'attributes': {}, 'targetID': 'meiyunfa', 'size': 1 }, {
    'sourceID': 'Da99012874',
    'attributes': {},
    'targetID': 'johnnytangwk',
    'size': 1
  }, {
    'sourceID': 'Williamyu7888',
    'attributes': {},
    'targetID': 'isoisokorokoro',
    'size': 1
  }, { 'sourceID': 'crystalfok', 'attributes': {}, 'targetID': 'SinoSeer', 'size': 1 }, {
    'sourceID': 'JeffShen19',
    'attributes': {},
    'targetID': 'RealWilliamMa00',
    'size': 1
  }, { 'sourceID': 'simonkwan8', 'attributes': {}, 'targetID': 'MaxTtll', 'size': 1 }, {
    'sourceID': 'JTPXLBKFcDzbRWX',
    'attributes': {},
    'targetID': 'lyubolin1',
    'size': 1
  }, { 'sourceID': 'MaxTtll', 'attributes': {}, 'targetID': 'TC11695313', 'size': 1 }, {
    'sourceID': 'YPyPJY37BBy2AHb',
    'attributes': {},
    'targetID': 'hongkongdaobao',
    'size': 1
  }, {
    'sourceID': 'HK_is_China_Gov',
    'attributes': {},
    'targetID': 'StandwithHK_JPN',
    'size': 1
  }, { 'sourceID': 'Vivian82977741', 'attributes': {}, 'targetID': 'Ben_s214', 'size': 1 }, {
    'sourceID': 'ryune84',
    'attributes': {},
    'targetID': 'SwedenMoli2017',
    'size': 1
  }, { 'sourceID': 'et236', 'attributes': {}, 'targetID': 'kuo822', 'size': 1 }, {
    'sourceID': 'love_umei',
    'attributes': {},
    'targetID': 'QJQ47489589',
    'size': 1
  }, { 'sourceID': 'Mahgi9', 'attributes': {}, 'targetID': 'WilsonW42347952', 'size': 1 }, {
    'sourceID': 'kids_kim',
    'attributes': {},
    'targetID': 'RealHongKonger2',
    'size': 1
  }, { 'sourceID': 'LUsagiii', 'attributes': {}, 'targetID': 'defendhk1', 'size': 1 }, {
    'sourceID': 'gm_shih',
    'attributes': {},
    'targetID': 'BeijingEye',
    'size': 1
  }, { 'sourceID': 'GaviWu', 'attributes': {}, 'targetID': 'summerhaho', 'size': 1 }, {
    'sourceID': 'GlobalTimes_CN',
    'attributes': {},
    'targetID': 'zhaozhenxiang',
    'size': 1
  }, {
    'sourceID': 'love_umei',
    'attributes': {},
    'targetID': 'baoxiaofeng',
    'size': 1
  }, {
    'sourceID': 'haixTlaphsjtmr',
    'attributes': {},
    'targetID': 'Bayi70917871',
    'size': 1
  }, { 'sourceID': 'jinroh_9001', 'attributes': {}, 'targetID': 'Skywalkerlu1', 'size': 1 }, {
    'sourceID': 'odiemmm324',
    'attributes': {},
    'targetID': 'JeffShen19',
    'size': 1
  }, {
    'sourceID': 'joezhu75910872',
    'attributes': {},
    'targetID': 'voacantonese',
    'size': 1
  }, {
    'sourceID': 'AlexGucinari',
    'attributes': {},
    'targetID': 'EnragedHongkon1',
    'size': 1
  }, { 'sourceID': 'weathernerdshk', 'attributes': {}, 'targetID': 'RockyWang66', 'size': 1 }, {
    'sourceID': 'kzzzzz_',
    'attributes': {},
    'targetID': 'NTDCanada',
    'size': 1
  }, { 'sourceID': 'EriksonHK', 'attributes': {}, 'targetID': 'TW_nextmedia', 'size': 1 }, {
    'sourceID': 'FocusNews99',
    'attributes': {},
    'targetID': 'DjangoHcang',
    'size': 1
  }, {
    'sourceID': 'RB99_com',
    'attributes': {},
    'targetID': 'YPyPJY37BBy2AHb',
    'size': 1
  }, { 'sourceID': 'LDMacauNews', 'attributes': {}, 'targetID': 'BeckyYu20', 'size': 1 }, {
    'sourceID': 'MXLRT',
    'attributes': {},
    'targetID': 'TGTLiberateHK',
    'size': 1
  }, { 'sourceID': 'czb5438', 'attributes': {}, 'targetID': 'HkerInt', 'size': 1 }, {
    'sourceID': 'hkopinion',
    'attributes': {},
    'targetID': 'frogcry8',
    'size': 1
  }, {
    'sourceID': 'Ren08486021',
    'attributes': {},
    'targetID': 'B_I_S_hospital',
    'size': 1
  }, {
    'sourceID': 'PhilipsShiu',
    'attributes': {},
    'targetID': 'HongKongPLG',
    'size': 1
  }, {
    'sourceID': 'HKDEMOCRACYNOW1',
    'attributes': {},
    'targetID': 'Louise_201969',
    'size': 1
  }, { 'sourceID': 'charlesmok', 'attributes': {}, 'targetID': 'weathernerdshk', 'size': 1 }, {
    'sourceID': 'Ben_s214',
    'attributes': {},
    'targetID': 'abbyabababab',
    'size': 1
  }, { 'sourceID': 'meowmimi6', 'attributes': {}, 'targetID': 'hkopinion', 'size': 1 }, {
    'sourceID': 'pdw0216',
    'attributes': {},
    'targetID': 'meiyunfa',
    'size': 1
  }, { 'sourceID': 'FionYeung5', 'attributes': {}, 'targetID': 'yvonneandcat', 'size': 1 }, {
    'sourceID': 'love_umei',
    'attributes': {},
    'targetID': 'Timothy77084926',
    'size': 1
  }, { 'sourceID': 'meilong15', 'attributes': {}, 'targetID': 'jianzhongwang4', 'size': 1 }, {
    'sourceID': 'chaplinwu',
    'attributes': {},
    'targetID': 'Standwi13696803',
    'size': 1
  }, { 'sourceID': 'JnD852', 'attributes': {}, 'targetID': 'PepeVan2', 'size': 1 }, {
    'sourceID': 'RfaCantonese',
    'attributes': {},
    'targetID': 'molihua_org',
    'size': 1
  }, { 'sourceID': 'johnnytangwk', 'attributes': {}, 'targetID': 'VOG2020', 'size': 1 }, {
    'sourceID': 'haruchann_jan',
    'attributes': {},
    'targetID': 'JamesHsiehTW',
    'size': 1
  }, {
    'sourceID': 'stephengoldseal',
    'attributes': {},
    'targetID': 'dcv3ymSFpwhBspC',
    'size': 1
  }, { 'sourceID': 'cavan_yau', 'attributes': {}, 'targetID': 'XinWenShiShiBao', 'size': 1 }, {
    'sourceID': 'lz_64',
    'attributes': {},
    'targetID': 'VersieWoof',
    'size': 1
  }, { 'sourceID': 'aky73246834', 'attributes': {}, 'targetID': 'JJSaveHK9', 'size': 1 }, {
    'sourceID': 'amsoft6',
    'attributes': {},
    'targetID': 'TonyChungHonLam',
    'size': 1
  }, { 'sourceID': 'ZhaoMingObserve', 'attributes': {}, 'targetID': 'putuliza', 'size': 1 }, {
    'sourceID': 'Kuitauyin',
    'attributes': {},
    'targetID': 'TYrUjqdlIaphtBw',
    'size': 1
  }, { 'sourceID': 'VvFoodie', 'attributes': {}, 'targetID': 'gangaotai', 'size': 1 }, {
    'sourceID': 'GUANGHUI77',
    'attributes': {},
    'targetID': 'LUsagiii',
    'size': 1
  }, { 'sourceID': 'GaviWu', 'attributes': {}, 'targetID': 'VOAHK', 'size': 1 }, {
    'sourceID': 'TatieChoukette',
    'attributes': {},
    'targetID': 'TruthMediaCHN',
    'size': 1
  }, {
    'sourceID': 'SwedenMoli2017',
    'attributes': {},
    'targetID': 'taiwanformosan',
    'size': 1
  }, { 'sourceID': 'CNAac010', 'attributes': {}, 'targetID': 'k_r_n_o', 'size': 1 }, {
    'sourceID': 'zhangchongxia',
    'attributes': {},
    'targetID': 'YihsiangShih',
    'size': 1
  }, {
    'sourceID': 'haixTlaphsjtmr',
    'attributes': {},
    'targetID': 'hkerLEDlol_',
    'size': 1
  }, { 'sourceID': 'TaoTaoyu2', 'attributes': {}, 'targetID': 'ChuLearn', 'size': 1 }, {
    'sourceID': 'HKers_HKers',
    'attributes': {},
    'targetID': 'MehAr24955478',
    'size': 1
  }, {
    'sourceID': 'heyheysonsonhey',
    'attributes': {},
    'targetID': 'voachina',
    'size': 1
  }, {
    'sourceID': 'Zhong_Weisen',
    'attributes': {},
    'targetID': 'Lam123123Terry',
    'size': 1
  }, { 'sourceID': 'PolicyApple', 'attributes': {}, 'targetID': 'jkhy16435548', 'size': 1 }, {
    'sourceID': 'zdyee1',
    'attributes': {},
    'targetID': 'ducnnet',
    'size': 1
  }, {
    'sourceID': 'JJSaveHK9',
    'attributes': {},
    'targetID': 'DJ_XIBANYA',
    'size': 1
  }, {
    'sourceID': 'RealWilliamMa00',
    'attributes': {},
    'targetID': 'geegeeo_o',
    'size': 1
  }, {
    'sourceID': 'iunFQtcuoPRpHDb',
    'attributes': {},
    'targetID': 'allan64625277',
    'size': 1
  }, { 'sourceID': 'JO7tENcURKEk8Im', 'attributes': {}, 'targetID': 'amsoft6', 'size': 1 }, {
    'sourceID': 'wenyan2',
    'attributes': {},
    'targetID': 'DawninDark',
    'size': 1
  }, {
    'sourceID': 'Jasmine86217293',
    'attributes': {},
    'targetID': 'HongKongPLG',
    'size': 1
  }, { 'sourceID': 'lishandeli', 'attributes': {}, 'targetID': 'gaoyu200812', 'size': 1 }, {
    'sourceID': 'hk_alexin',
    'attributes': {},
    'targetID': 'BobowaTw',
    'size': 1
  }, { 'sourceID': 'apr20273131', 'attributes': {}, 'targetID': 'slyc852', 'size': 1 }, {
    'sourceID': 'kelvin_wang',
    'attributes': {},
    'targetID': 'TuCaoFakeNews',
    'size': 1
  }, { 'sourceID': 'JAbbott45624607', 'attributes': {}, 'targetID': 'SandyHui5', 'size': 1 }, {
    'sourceID': 'ZAP_333',
    'attributes': {},
    'targetID': 'QueenieLiu11',
    'size': 1
  }, {
    'sourceID': 'YPyPJY37BBy2AHb',
    'attributes': {},
    'targetID': 'aboluowang',
    'size': 1
  }, {
    'sourceID': 'joshuawongcf',
    'attributes': {},
    'targetID': 'HongKongFP',
    'size': 1
  }, {
    'sourceID': 'cultural_garden',
    'attributes': {},
    'targetID': 'bradlee16246911',
    'size': 1
  }, { 'sourceID': 'Hkongersss', 'attributes': {}, 'targetID': 'shhcaa', 'size': 1 }, {
    'sourceID': 'Angel88052901',
    'attributes': {},
    'targetID': 'tastesmelllife',
    'size': 1
  }, {
    'sourceID': 'BeijingEye',
    'attributes': {},
    'targetID': 'Itz7IudN4BU9uVK',
    'size': 1
  }, { 'sourceID': 'Standwi87591738', 'attributes': {}, 'targetID': 'music5599', 'size': 1 }, {
    'sourceID': 'calci7er',
    'attributes': {},
    'targetID': 'freespiritnwill',
    'size': 1
  }, {
    'sourceID': 'odiemmm324',
    'attributes': {},
    'targetID': 'zhaozhenxiang',
    'size': 1
  }, {
    'sourceID': 'chantaimanblog',
    'attributes': {},
    'targetID': 'hjjohnson17',
    'size': 1
  }, {
    'sourceID': 'Lam123123Terry',
    'attributes': {},
    'targetID': 'Standwi87591738',
    'size': 1
  }, {
    'sourceID': 'KKeybf',
    'attributes': {},
    'targetID': 'dUWp4yX8rHp0HMY',
    'size': 1
  }, {
    'sourceID': 'Vivian82977741',
    'attributes': {},
    'targetID': 'lyubolin1',
    'size': 1
  }, {
    'sourceID': 'GreenPartyCN',
    'attributes': {},
    'targetID': 'alexandroslee',
    'size': 1
  }, {
    'sourceID': 'TYrUjqdlIaphtBw',
    'attributes': {},
    'targetID': 'ChanSamuel10',
    'size': 1
  }, {
    'sourceID': '2016RCFOnline2',
    'attributes': {},
    'targetID': 'nanyangpress',
    'size': 1
  }, { 'sourceID': 'LUsagiii', 'attributes': {}, 'targetID': 'TedDaddy2', 'size': 1 }, {
    'sourceID': 'cps_414',
    'attributes': {},
    'targetID': 'et236',
    'size': 1
  }, {
    'sourceID': 'HeungGongYan0',
    'attributes': {},
    'targetID': 'Szetochiyung1',
    'size': 1
  }, {
    'sourceID': 'xiaoxin11786630',
    'attributes': {},
    'targetID': 'kzzzzz_',
    'size': 1
  }, {
    'sourceID': 'GlobalHimalaya',
    'attributes': {},
    'targetID': 'JohnBaldwin64',
    'size': 1
  }, { 'sourceID': 'LaiFrederik', 'attributes': {}, 'targetID': 'LUsagiii', 'size': 1 }, {
    'sourceID': 'WONGKEENY',
    'attributes': {},
    'targetID': 'PeonyShum',
    'size': 1
  }, { 'sourceID': 'AllenZeng20', 'attributes': {}, 'targetID': 'jianzhongwang4', 'size': 1 }, {
    'sourceID': 'ChuLearn',
    'attributes': {},
    'targetID': 'dongnan2030',
    'size': 1
  }, { 'sourceID': 'TaoTaoyu2', 'attributes': {}, 'targetID': 'razgrizbw', 'size': 1 }, {
    'sourceID': 'bbcchinese',
    'attributes': {},
    'targetID': 'ClaudiaMCMo',
    'size': 1
  }, { 'sourceID': 'Haggi1114', 'attributes': {}, 'targetID': 'ATC_Mike', 'size': 1 }, {
    'sourceID': 'Jim97147570',
    'attributes': {},
    'targetID': 'Acccccc18968628',
    'size': 1
  }, {
    'sourceID': 'waicanzazhi',
    'attributes': {},
    'targetID': 'goooglefans',
    'size': 1
  }, {
    'sourceID': 'SoundOfHope_SOH',
    'attributes': {},
    'targetID': 'kzzzzz_',
    'size': 1
  }, { 'sourceID': 'Aloha88617098', 'attributes': {}, 'targetID': 'BeckyYu20', 'size': 1 }, {
    'sourceID': 'hk_alexin',
    'attributes': {},
    'targetID': 'shanzhai01',
    'size': 1
  }, {
    'sourceID': 'MaggieHo20',
    'attributes': {},
    'targetID': 'FjgKxrc5VBKmJxh',
    'size': 1
  }, { 'sourceID': 'YungKalis', 'attributes': {}, 'targetID': 'baoguangtv', 'size': 1 }, {
    'sourceID': 'PassionTimes',
    'attributes': {},
    'targetID': 'ROKUGATSUJUNE',
    'size': 1
  }, { 'sourceID': 'Leojunite', 'attributes': {}, 'targetID': 'czb5438', 'size': 1 }, {
    'sourceID': 'Hahahah23921079',
    'attributes': {},
    'targetID': 'gangaotai',
    'size': 1
  }, { 'sourceID': 'yezhiwei', 'attributes': {}, 'targetID': 'Freemax2020', 'size': 1 }, {
    'sourceID': 'lai_vvc',
    'attributes': {},
    'targetID': 'sese7820',
    'size': 1
  }, { 'sourceID': 'eggkingdom1', 'attributes': {}, 'targetID': 'BeckyYu20', 'size': 1 }, {
    'sourceID': 'TC11695313',
    'attributes': {},
    'targetID': 'JJSaveHK9',
    'size': 1
  }, { 'sourceID': 'kzzzzz_', 'attributes': {}, 'targetID': 'kamanchan17', 'size': 1 }, {
    'sourceID': 'CHOI_SE_WOO',
    'attributes': {},
    'targetID': 'OneLonelyLeaf',
    'size': 1
  }, { 'sourceID': 'dotdot1991', 'attributes': {}, 'targetID': 'ShawTim', 'size': 1 }, {
    'sourceID': 'anitalai19',
    'attributes': {},
    'targetID': 'Swkit5',
    'size': 1
  }, { 'sourceID': 'TGTLiberateHK', 'attributes': {}, 'targetID': 'KKeybf', 'size': 1 }, {
    'sourceID': 'haruchann_jan',
    'attributes': {},
    'targetID': 'goooglefans',
    'size': 1
  }, {
    'sourceID': 'JohnsonLPThong',
    'attributes': {},
    'targetID': 'peter13690',
    'size': 1
  }, {
    'sourceID': 'jinroh_9001',
    'attributes': {},
    'targetID': 'PhilipsY18',
    'size': 1
  }, {
    'sourceID': 'QuanqiuLianbo',
    'attributes': {},
    'targetID': 'MaryCha52747410',
    'size': 1
  }, { 'sourceID': 'a118390', 'attributes': {}, 'targetID': 'tanpenggiePDV', 'size': 1 }, {
    'sourceID': 'XinhuaChinese',
    'attributes': {},
    'targetID': 'standwithhk2',
    'size': 1
  }, {
    'sourceID': 'xiner01298818',
    'attributes': {},
    'targetID': 'djy_guojinews1',
    'size': 1
  }, {
    'sourceID': 'v_vcchan',
    'attributes': {},
    'targetID': 'mi_standwithHK',
    'size': 1
  }, {
    'sourceID': 'onclesuperieur',
    'attributes': {},
    'targetID': 'PaulLaw60654084',
    'size': 1
  }, {
    'sourceID': 'tanpenggiePDV',
    'attributes': {},
    'targetID': 'wai46223378',
    'size': 1
  }, { 'sourceID': 'ray_slowbeat', 'attributes': {}, 'targetID': 'WgsK2VLKdBimfao', 'size': 1 }, {
    'sourceID': 'yghysn',
    'attributes': {},
    'targetID': 'k1a1zzz',
    'size': 1
  }, { 'sourceID': 'ILoveGZ1', 'attributes': {}, 'targetID': 'TongMediaHK', 'size': 1 }, {
    'sourceID': 'HCYHK',
    'attributes': {},
    'targetID': 'yvonneandcat',
    'size': 1
  }, { 'sourceID': 'fuckpopo3', 'attributes': {}, 'targetID': 'baoxiaofeng', 'size': 1 }, {
    'sourceID': 'MingJingNews',
    'attributes': {},
    'targetID': 'GreenPartyCN',
    'size': 1
  }, {
    'sourceID': 'ouyanglishi2019',
    'attributes': {},
    'targetID': 'bbcchinese',
    'size': 1
  }, {
    'sourceID': 'Vanessa47639987',
    'attributes': {},
    'targetID': '1065533958',
    'size': 1
  }, {
    'sourceID': 'RealHongKonger2',
    'attributes': {},
    'targetID': 'LoFRetTIrDaQRHi',
    'size': 1
  }, {
    'sourceID': 'mi_standwithHK',
    'attributes': {},
    'targetID': 'TruthMediaCHN',
    'size': 1
  }, {
    'sourceID': 'dUWp4yX8rHp0HMY',
    'attributes': {},
    'targetID': 'EnragedHongkon1',
    'size': 1
  }, { 'sourceID': 'mileslam', 'attributes': {}, 'targetID': 'ttingxiao', 'size': 1 }, {
    'sourceID': 'gangaotai',
    'attributes': {},
    'targetID': 'FreedomHKG',
    'size': 1
  }, {
    'sourceID': 'zhanglifan',
    'attributes': {},
    'targetID': 'mikiki568513741',
    'size': 1
  }, { 'sourceID': 'RTIChinese', 'attributes': {}, 'targetID': 'withoutawell', 'size': 1 }, {
    'sourceID': 'KD3321',
    'attributes': {},
    'targetID': 'akachanmoon',
    'size': 1
  }, { 'sourceID': 'anacrose', 'attributes': {}, 'targetID': 'SoundOfHope_SOH', 'size': 1 }, {
    'sourceID': 'VOG2020',
    'attributes': {},
    'targetID': 'standwithHKerrr',
    'size': 1
  }, {
    'sourceID': 'TerryLi83915994',
    'attributes': {},
    'targetID': 'FHk178',
    'size': 1
  }, { 'sourceID': 'Vanvanlouie6002', 'attributes': {}, 'targetID': 'shhcaa', 'size': 1 }, {
    'sourceID': 'ztqsjzh',
    'attributes': {},
    'targetID': 'ChanSamuel10',
    'size': 1
  }, {
    'sourceID': 'hongkong_home',
    'attributes': {},
    'targetID': 'hkerLEDlol_',
    'size': 1
  }, {
    'sourceID': 'TamManLai1',
    'attributes': {},
    'targetID': 'Standwithhk15',
    'size': 1
  }, { 'sourceID': 'LaiFrederik', 'attributes': {}, 'targetID': 'DaniTang2', 'size': 1 }, {
    'sourceID': 'szeyan1220',
    'attributes': {},
    'targetID': 'TuCaoFakeNews',
    'size': 1
  }, {
    'sourceID': 'tqd2017nyc',
    'attributes': {},
    'targetID': 'EEFromHongKong',
    'size': 1
  }, { 'sourceID': 'vincentzkai', 'attributes': {}, 'targetID': 'ClaudiaMCMo', 'size': 1 }, {
    'sourceID': 'YvetteTang4',
    'attributes': {},
    'targetID': 'Ben_s214',
    'size': 1
  }, { 'sourceID': 'HongkongerMs', 'attributes': {}, 'targetID': 'SkyLJ2', 'size': 1 }, {
    'sourceID': 'aky73246834',
    'attributes': {},
    'targetID': 'GaviWu',
    'size': 1
  }, {
    'sourceID': 'Hahahah23921079',
    'attributes': {},
    'targetID': 'AinChinese',
    'size': 1
  }, { 'sourceID': 'jojolenelene1', 'attributes': {}, 'targetID': 'zhangheci', 'size': 1 }, {
    'sourceID': 'Ren08486021',
    'attributes': {},
    'targetID': 'FionYeung5',
    'size': 1
  }, {
    'sourceID': 'Fish65064857',
    'attributes': {},
    'targetID': 'Haggi1114',
    'size': 1
  }, {
    'sourceID': 'dUWp4yX8rHp0HMY',
    'attributes': {},
    'targetID': 'kathyyinn',
    'size': 1
  }, { 'sourceID': 'alexlaixin1', 'attributes': {}, 'targetID': 'simonkwan8', 'size': 1 }, {
    'sourceID': 'standwithhk_',
    'attributes': {},
    'targetID': 'hylevel900',
    'size': 1
  }, { 'sourceID': 'eggieofhk', 'attributes': {}, 'targetID': 'SelinaJin1', 'size': 1 }, {
    'sourceID': '2020_victory',
    'attributes': {},
    'targetID': 'lvv2com',
    'size': 1
  }, { 'sourceID': 'bornbredinhk', 'attributes': {}, 'targetID': 'kingip1', 'size': 1 }, {
    'sourceID': 'KKeybf',
    'attributes': {},
    'targetID': 'HongkongerMs',
    'size': 1
  }, {
    'sourceID': 'Leonard18762047',
    'attributes': {},
    'targetID': 'laalaa83345561',
    'size': 1
  }, {
    'sourceID': 'noobmaster1025',
    'attributes': {},
    'targetID': 'Uk5MLkKvrZ7E4tm',
    'size': 1
  }, { 'sourceID': 'XiaosongWangUSA', 'attributes': {}, 'targetID': 'HkPlz', 'size': 1 }, {
    'sourceID': 'ATC_Mike',
    'attributes': {},
    'targetID': 'kingip1',
    'size': 1
  }, { 'sourceID': 'cultural_garden', 'attributes': {}, 'targetID': 'demosisto', 'size': 1 }, {
    'sourceID': 'MJTVHoPin',
    'attributes': {},
    'targetID': 'Williamyu7888',
    'size': 1
  }, {
    'sourceID': 'joezhu75910872',
    'attributes': {},
    'targetID': 'ouyanglishi2019',
    'size': 1
  }, {
    'sourceID': 'freeedomhai',
    'attributes': {},
    'targetID': 'standwi59443180',
    'size': 1
  }, { 'sourceID': 'asuraof4', 'attributes': {}, 'targetID': 'kingip1', 'size': 1 }, {
    'sourceID': 'frederickysc',
    'attributes': {},
    'targetID': 'nobleits',
    'size': 1
  }, {
    'sourceID': 'SungChor',
    'attributes': {},
    'targetID': 'gongminyundong',
    'size': 1
  }, {
    'sourceID': 'Itz7IudN4BU9uVK',
    'attributes': {},
    'targetID': 'TongMediaHK',
    'size': 1
  }, {
    'sourceID': 'hongkongdaobao',
    'attributes': {},
    'targetID': 'icablenews',
    'size': 1
  }, {
    'sourceID': 'CLC60391352',
    'attributes': {},
    'targetID': 'EEFromHongKong',
    'size': 1
  }, {
    'sourceID': 'FzJa5oBdLdLR6KJ',
    'attributes': {},
    'targetID': 'lukedickcheng',
    'size': 1
  }, { 'sourceID': 'stitchbobo', 'attributes': {}, 'targetID': 'putuliza', 'size': 1 }, {
    'sourceID': 'NR62Vx7WWVJVsDb',
    'attributes': {},
    'targetID': 'ryune84',
    'size': 1
  }, {
    'sourceID': 'CX0J5dftYExob2E',
    'attributes': {},
    'targetID': 'OneLonelyLeaf',
    'size': 1
  }, { 'sourceID': 'razgrizbw', 'attributes': {}, 'targetID': 'mileslam', 'size': 1 }, {
    'sourceID': 'roadyouonebyone',
    'attributes': {},
    'targetID': 'RogerHPNg',
    'size': 1
  }, { 'sourceID': 'Sakura50837268', 'attributes': {}, 'targetID': 'jambusonic', 'size': 1 }, {
    'sourceID': 'ttingxiao',
    'attributes': {},
    'targetID': 'TGfree520',
    'size': 1
  }, {
    'sourceID': 'younghe87425190',
    'attributes': {},
    'targetID': 'fcnrhthatr',
    'size': 1
  }, {
    'sourceID': 'jkhy16435548',
    'attributes': {},
    'targetID': 'MingjingLive',
    'size': 1
  }, {
    'sourceID': 'GeckoloverW',
    'attributes': {},
    'targetID': 'EnragedHongkon1',
    'size': 1
  }, { 'sourceID': 'dotdot1991', 'attributes': {}, 'targetID': 'CarolChan312', 'size': 1 }, {
    'sourceID': '1065533958',
    'attributes': {},
    'targetID': 'AlexandroSpike',
    'size': 1
  }, {
    'sourceID': 'eggkingdom1',
    'attributes': {},
    'targetID': 'eggkingdom1',
    'size': 1
  }, { 'sourceID': 'withoutawell', 'attributes': {}, 'targetID': 'kuonyuu', 'size': 1 }, {
    'sourceID': 'haixTlaphsjtmr',
    'attributes': {},
    'targetID': 'Ben_s214',
    'size': 1
  }, { 'sourceID': 'ACSECAA', 'attributes': {}, 'targetID': 'palm18406422', 'size': 1 }, {
    'sourceID': 'GreenPartyCN',
    'attributes': {},
    'targetID': 'StandwithHK_JPN',
    'size': 1
  }, { 'sourceID': '7k_QYS', 'attributes': {}, 'targetID': 'Grog_Go', 'size': 1 }, {
    'sourceID': '912Guy',
    'attributes': {},
    'targetID': 'BobowaTw',
    'size': 1
  }, { 'sourceID': 'americatimes', 'attributes': {}, 'targetID': 'shhcaa', 'size': 1 }, {
    'sourceID': 'zhangchongxia',
    'attributes': {},
    'targetID': 'putuliza',
    'size': 1
  }, { 'sourceID': 'Mandy67359116', 'attributes': {}, 'targetID': 'LkjhgfdMxy3', 'size': 1 }, {
    'sourceID': 'ztqsjzh',
    'attributes': {},
    'targetID': 'LDMacauNews',
    'size': 1
  }, { 'sourceID': 'nobleits', 'attributes': {}, 'targetID': 'aq2men', 'size': 1 }, {
    'sourceID': 'TatieChoukette',
    'attributes': {},
    'targetID': 'rambo853_2000km',
    'size': 1
  }, {
    'sourceID': 'glory2hkfreedom',
    'attributes': {},
    'targetID': 'FreedomBear4',
    'size': 1
  }, { 'sourceID': 'MingjingTVAsia', 'attributes': {}, 'targetID': 'yghysn', 'size': 1 }, {
    'sourceID': 'JeffShen19',
    'attributes': {},
    'targetID': 'odiemmm324',
    'size': 1
  }, { 'sourceID': 'haruchann_jan', 'attributes': {}, 'targetID': 'anitalai19', 'size': 1 }, {
    'sourceID': 'zhangheci',
    'attributes': {},
    'targetID': 'serika_sino',
    'size': 1
  }, {
    'sourceID': 'aq2men',
    'attributes': {},
    'targetID': 'PnW9eGAtThxLWLe',
    'size': 1
  }, { 'sourceID': 'LDGermanyNews', 'attributes': {}, 'targetID': 'antielabhk', 'size': 1 }, {
    'sourceID': 'charlesmok',
    'attributes': {},
    'targetID': 'm7ThtCxcFJK9bzh',
    'size': 1
  }, { 'sourceID': 'kikuchih1', 'attributes': {}, 'targetID': 'weigao2000', 'size': 1 }, {
    'sourceID': 'gm_shih',
    'attributes': {},
    'targetID': 'SiuYuk777',
    'size': 1
  }, { 'sourceID': 'GUANGHUI77', 'attributes': {}, 'targetID': 'fduyuyture65', 'size': 1 }, {
    'sourceID': 'yangmaosen',
    'attributes': {},
    'targetID': 'Baron16259809',
    'size': 1
  }, { 'sourceID': 'anacrose', 'attributes': {}, 'targetID': 'ronronaldald', 'size': 1 }, {
    'sourceID': 'stitchbobo',
    'attributes': {},
    'targetID': 'OneLonelyLeaf',
    'size': 1
  }, {
    'sourceID': 'Lam123123Terry',
    'attributes': {},
    'targetID': 'Stacey05112',
    'size': 1
  }, {
    'sourceID': 'heyheysonsonhey',
    'attributes': {},
    'targetID': 'FredLeung10',
    'size': 1
  }, { 'sourceID': 'TheMuffStuff', 'attributes': {}, 'targetID': 'wai46223378', 'size': 1 }, {
    'sourceID': 'LawChiman',
    'attributes': {},
    'targetID': 'freespiritnwill',
    'size': 1
  }, {
    'sourceID': 'HongKongmyhome',
    'attributes': {},
    'targetID': 'admit2sin',
    'size': 1
  }, { 'sourceID': 'kiyoandthesea', 'attributes': {}, 'targetID': 'lotus_pak', 'size': 1 }, {
    'sourceID': 'MaxTtll',
    'attributes': {},
    'targetID': 'ClaudiaMCMo',
    'size': 1
  }, {
    'sourceID': 'hongkong_blog',
    'attributes': {},
    'targetID': 'mi_standwithHK',
    'size': 1
  }, { 'sourceID': 'ShawTim', 'attributes': {}, 'targetID': 'kelvin_wang', 'size': 1 }, {
    'sourceID': 'Skywalkerlu1',
    'attributes': {},
    'targetID': 'HongKongmyhome',
    'size': 1
  }, { 'sourceID': 'voacantonese', 'attributes': {}, 'targetID': 'hkgers2019', 'size': 1 }, {
    'sourceID': 'meowmimi6',
    'attributes': {},
    'targetID': 'wl2019831',
    'size': 1
  }, { 'sourceID': 'RadioFreeAsiajp', 'attributes': {}, 'targetID': 'zdyee1', 'size': 1 }, {
    'sourceID': 'Arrryin',
    'attributes': {},
    'targetID': 'RealHongKonger2',
    'size': 1
  }, { 'sourceID': 'baoguangtv', 'attributes': {}, 'targetID': 'yang_danhe', 'size': 1 }, {
    'sourceID': 'SiuYuk777',
    'attributes': {},
    'targetID': 'haiwainet',
    'size': 1
  }, {
    'sourceID': 'TYrUjqdlIaphtBw',
    'attributes': {},
    'targetID': 'dZnJUCdo4FlZqgd',
    'size': 1
  }, { 'sourceID': 'Evergreen2k', 'attributes': {}, 'targetID': 'G20FalunGong', 'size': 1 }, {
    'sourceID': 'kzzzzz_',
    'attributes': {},
    'targetID': 'n_sfreedomestic',
    'size': 1
  }, {
    'sourceID': 'kanzhongguo',
    'attributes': {},
    'targetID': 'LeafLhraxSnX5Gw',
    'size': 1
  }, { 'sourceID': 'NowNews99', 'attributes': {}, 'targetID': 'zhonghua70', 'size': 1 }, {
    'sourceID': 'CNS1952',
    'attributes': {},
    'targetID': 'QueenieLiu11',
    'size': 1
  }, { 'sourceID': 'TMAN2020', 'attributes': {}, 'targetID': 'LiuGuopingHC', 'size': 1 }, {
    'sourceID': 'TongMediaHK',
    'attributes': {},
    'targetID': 'Liu9oiu9b9c',
    'size': 1
  }, { 'sourceID': 'NTDCanada', 'attributes': {}, 'targetID': 'k1a1zzz', 'size': 1 }, {
    'sourceID': 'fromsophie000',
    'attributes': {},
    'targetID': 'Kuitauyin',
    'size': 1
  }, { 'sourceID': 'slidsuse', 'attributes': {}, 'targetID': 'SinoSeer', 'size': 1 }, {
    'sourceID': 'tomrummy2',
    'attributes': {},
    'targetID': 'MingjingTVAsia',
    'size': 1
  }, { 'sourceID': 'Halim20886893', 'attributes': {}, 'targetID': 'DawninDark', 'size': 1 }, {
    'sourceID': 'LandiCao',
    'attributes': {},
    'targetID': 'ATC_Mike',
    'size': 1
  }, {
    'sourceID': 'abeleung',
    'attributes': {},
    'targetID': 'dUWp4yX8rHp0HMY',
    'size': 1
  }, {
    'sourceID': '8uyhgw456yyh4',
    'attributes': {},
    'targetID': 'RealHongKonger2',
    'size': 1
  }, { 'sourceID': 'LDUSNews', 'attributes': {}, 'targetID': 'hingyuenchan', 'size': 1 }, {
    'sourceID': 'RTIChinese',
    'attributes': {},
    'targetID': 'RadioFreeAsiajp',
    'size': 1
  }, {
    'sourceID': 'gangaotai',
    'attributes': {},
    'targetID': 'MingJingNews',
    'size': 1
  }, {
    'sourceID': 'lukedickcheng',
    'attributes': {},
    'targetID': 'dcv3ymSFpwhBspC',
    'size': 1
  }, { 'sourceID': 'yghysn', 'attributes': {}, 'targetID': 'heyheysonsonhey', 'size': 1 }, {
    'sourceID': 'Jan58473367',
    'attributes': {},
    'targetID': 'pantongzhen',
    'size': 1
  }, {
    'sourceID': 'hjjohnson17',
    'attributes': {},
    'targetID': 'Ccw14348622',
    'size': 1
  }, {
    'sourceID': 'SinChewPress',
    'attributes': {},
    'targetID': 'Catherinecat826',
    'size': 1
  }, {
    'sourceID': 'allan64625277',
    'attributes': {},
    'targetID': 'zhangchongxia',
    'size': 1
  }, { 'sourceID': 'alexandroslee', 'attributes': {}, 'targetID': 'meiyunfa', 'size': 1 }, {
    'sourceID': 'charlesmok',
    'attributes': {},
    'targetID': 'Freedomchina6',
    'size': 1
  }, { 'sourceID': 'hk_alexin', 'attributes': {}, 'targetID': 'mytwnews', 'size': 1 }, {
    'sourceID': 'kitwaho',
    'attributes': {},
    'targetID': 'meowmimi6',
    'size': 1
  }, { 'sourceID': 'bsdscn', 'attributes': {}, 'targetID': 'americatimes', 'size': 1 }, {
    'sourceID': 'TAMKUOKWENG',
    'attributes': {},
    'targetID': 'MingjingToday',
    'size': 1
  }, { 'sourceID': 'Stand_with_HK', 'attributes': {}, 'targetID': 'Da99012874', 'size': 1 }, {
    'sourceID': 'aq2men',
    'attributes': {},
    'targetID': 'noobmaster1025',
    'size': 1
  }, { 'sourceID': 'WONGKEENY', 'attributes': {}, 'targetID': 'nanyangpress', 'size': 1 }, {
    'sourceID': 'RFI_TradCn',
    'attributes': {},
    'targetID': 'Mahgi9',
    'size': 1
  }, {
    'sourceID': 'hsu44012222',
    'attributes': {},
    'targetID': 'mileslam',
    'size': 1
  }, { 'sourceID': 'RealWilliamMa00', 'attributes': {}, 'targetID': 'ACSECAA', 'size': 1 }, {
    'sourceID': 'dajueli',
    'attributes': {},
    'targetID': 'CHOI_SE_WOO',
    'size': 1
  }, {
    'sourceID': 'TruthMediaCHN',
    'attributes': {},
    'targetID': 'dcv3ymSFpwhBspC',
    'size': 1
  }, {
    'sourceID': 'caijingchao',
    'attributes': {},
    'targetID': 'abbyabababab',
    'size': 1
  }, {
    'sourceID': 'yoshicasaya',
    'attributes': {},
    'targetID': 'Yuguotianhei',
    'size': 1
  }, { 'sourceID': 'LkjhgfdMxy3', 'attributes': {}, 'targetID': 'Mike16301002', 'size': 1 }, {
    'sourceID': 'ChouYou68',
    'attributes': {},
    'targetID': 'LDMacauNews',
    'size': 1
  }, {
    'sourceID': 'kingip1',
    'attributes': {},
    'targetID': 'MingjingToday',
    'size': 1
  }, {
    'sourceID': 'onclesuperieur',
    'attributes': {},
    'targetID': 'linglala1',
    'size': 1
  }, { 'sourceID': 'PhilipCheungCh1', 'attributes': {}, 'targetID': 'suntinhk', 'size': 1 }, {
    'sourceID': 'LawChiman',
    'attributes': {},
    'targetID': 'LDEuropeNews',
    'size': 1
  }, {
    'sourceID': 'ZhaoMingObserve',
    'attributes': {},
    'targetID': 'lewis_kikiki',
    'size': 1
  }, { 'sourceID': 'PhilipsShiu', 'attributes': {}, 'targetID': 'gm_shih', 'size': 1 }, {
    'sourceID': 'sufangfeng2019',
    'attributes': {},
    'targetID': 'demosisto',
    'size': 1
  }, { 'sourceID': 'realGuancha', 'attributes': {}, 'targetID': 'Sophy5', 'size': 1 }, {
    'sourceID': 'joezhu75910872',
    'attributes': {},
    'targetID': 'XieTianqi2015',
    'size': 1
  }, {
    'sourceID': 'jeff_bahangsan',
    'attributes': {},
    'targetID': 'jun19977',
    'size': 1
  }, {
    'sourceID': 'Sakura50837268',
    'attributes': {},
    'targetID': 'QueenieLiu11',
    'size': 1
  }, { 'sourceID': 'kanzhongguo', 'attributes': {}, 'targetID': 'anacrose', 'size': 1 }, {
    'sourceID': 'hongkiu1118',
    'attributes': {},
    'targetID': '3HGcAoD6gkchsk6',
    'size': 1
  }, { 'sourceID': 'MingJingNews', 'attributes': {}, 'targetID': 'SZMG_zbgat', 'size': 1 }, {
    'sourceID': 'ducnnet',
    'attributes': {},
    'targetID': 'wikikik88840662',
    'size': 1
  }, { 'sourceID': 'Tong_Shuo', 'attributes': {}, 'targetID': 'zdyee1', 'size': 1 }, {
    'sourceID': 'Pat04097729',
    'attributes': {},
    'targetID': 'hjjohnson17',
    'size': 1
  }, {
    'sourceID': 'hkindigenous',
    'attributes': {},
    'targetID': 'weathernerdshk',
    'size': 1
  }, { 'sourceID': 'SandyHui5', 'attributes': {}, 'targetID': 'arlinghaha', 'size': 1 }, {
    'sourceID': 'Szetochiyung1',
    'attributes': {},
    'targetID': 'gujiangjiang',
    'size': 1
  }, { 'sourceID': 'TTTChan2', 'attributes': {}, 'targetID': 'meilong15', 'size': 1 }, {
    'sourceID': 'gangaotai',
    'attributes': {},
    'targetID': 'suntinhk',
    'size': 1
  }, { 'sourceID': 'billowypie', 'attributes': {}, 'targetID': 'MehAr24955478', 'size': 1 }, {
    'sourceID': 'KxMmyg',
    'attributes': {},
    'targetID': 'LDGermanyNews',
    'size': 1
  }, {
    'sourceID': 'standwi59443180',
    'attributes': {},
    'targetID': 'haixTlaphsjtmr',
    'size': 1
  }, { 'sourceID': 'Niuphd', 'attributes': {}, 'targetID': 'johnnytangwk', 'size': 1 }, {
    'sourceID': 'linglala1',
    'attributes': {},
    'targetID': 'GlobalTimes_CN',
    'size': 1
  }, {
    'sourceID': 'Pat04097729',
    'attributes': {},
    'targetID': 'M20835058',
    'size': 1
  }, {
    'sourceID': 'liuzhiqiang1954',
    'attributes': {},
    'targetID': 'ClaudiaMCMo',
    'size': 1
  }, { 'sourceID': 'somsomsom2012', 'attributes': {}, 'targetID': 'DC027442', 'size': 1 }, {
    'sourceID': 'kalue213',
    'attributes': {},
    'targetID': 'cookies_venus',
    'size': 1
  }, {
    'sourceID': 'TongMediaHK',
    'attributes': {},
    'targetID': '87ba24d433114f1',
    'size': 1
  }, { 'sourceID': 'shanzhai01', 'attributes': {}, 'targetID': 'aq2men', 'size': 1 }, {
    'sourceID': 'LiuDuXinWen',
    'attributes': {},
    'targetID': 'BoxunN',
    'size': 1
  }, { 'sourceID': 'cultural_garden', 'attributes': {}, 'targetID': 'Feix09441184', 'size': 1 }, {
    'sourceID': 'aq2men',
    'attributes': {},
    'targetID': 'nextdodo',
    'size': 1
  }, { 'sourceID': 'Da99012874', 'attributes': {}, 'targetID': '3dddyHuigui', 'size': 1 }, {
    'sourceID': 'anitalai19',
    'attributes': {},
    'targetID': 'jkhy16435548',
    'size': 1
  }, { 'sourceID': 'Lee93184179', 'attributes': {}, 'targetID': 'china5000_us', 'size': 1 }, {
    'sourceID': 'Em55667416',
    'attributes': {},
    'targetID': 'bsdscn',
    'size': 1
  }, { 'sourceID': 'Zahk2019', 'attributes': {}, 'targetID': 'Leetasizan', 'size': 1 }, {
    'sourceID': 'NTDCanada',
    'attributes': {},
    'targetID': 'geegeeo_o',
    'size': 1
  }, { 'sourceID': 'a118390', 'attributes': {}, 'targetID': 'EriksonHK', 'size': 1 }, {
    'sourceID': 'kalue213',
    'attributes': {},
    'targetID': 'PDChinese',
    'size': 1
  }, {
    'sourceID': 'chng70733062',
    'attributes': {},
    'targetID': 'Riko_Fx_Day7',
    'size': 1
  }, {
    'sourceID': 'jianzhongwang4',
    'attributes': {},
    'targetID': 'MingJingNews',
    'size': 1
  }, { 'sourceID': 'LiuGuopingHC', 'attributes': {}, 'targetID': 'eggieofhk', 'size': 1 }, {
    'sourceID': 'hkgers2019',
    'attributes': {},
    'targetID': 'M20835058',
    'size': 1
  }, {
    'sourceID': 'derekli84134905',
    'attributes': {},
    'targetID': 'XiaosongWangUSA',
    'size': 1
  }, { 'sourceID': 'SerenaSin', 'attributes': {}, 'targetID': 'tangfeng2014', 'size': 1 }, {
    'sourceID': 'YvetteTang4',
    'attributes': {},
    'targetID': 'OMGWTF8964',
    'size': 1
  }, {
    'sourceID': 'Sakura50837268',
    'attributes': {},
    'targetID': 'KxMmyg',
    'size': 1
  }, {
    'sourceID': 'Itz7IudN4BU9uVK',
    'attributes': {},
    'targetID': 'Freedomchina6',
    'size': 1
  }, {
    'sourceID': 'isoisokorokoro',
    'attributes': {},
    'targetID': 'heyheysonsonhey',
    'size': 1
  }, { 'sourceID': 'PDChinese', 'attributes': {}, 'targetID': 'lishandeli', 'size': 1 }, {
    'sourceID': 'kamanchan17',
    'attributes': {},
    'targetID': 'TonyChungHonLam',
    'size': 1
  }, { 'sourceID': 'XunLongJi2018', 'attributes': {}, 'targetID': 'SvetaisSweet', 'size': 1 }, {
    'sourceID': 'ChuLearn',
    'attributes': {},
    'targetID': 'apr20273131',
    'size': 1
  }, { 'sourceID': 'SDeutschlands', 'attributes': {}, 'targetID': 'PepeVan2', 'size': 1 }]
  let timeOutId
  let currentJson = '2019-06-01.json'

  function setSeriesGraph(nodeData) {
    console.log(nodeData)

    $.getJSON(`data/per-day/${nodeData}`, function (json) {
      // seriesGraph.hideLoading();

      const option = {
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'none',
            // progressiveThreshold: 700,
            data: json.map(function (node) {
              return {
                x: node.x,
                y: node.y,
                id: node.id,
                name: node.label,
                symbolSize: node.size,
                itemStyle: {
                  normal: {
                    color: node.color
                  }
                }
              };
            }),
            edges: constEdges.map(function (edge) {
              return {
                source: edge.sourceID,
                target: edge.targetID
              };
            }),
            label: {
              emphasis: {
                position: 'right',
                show: true
              }
            },
            roam: false,
            focusNodeAdjacency: true,
            lineStyle: {
              normal: {
                width: 0.5,
                curveness: 0.3,
                opacity: 0.7
              }
            }
          }
        ]
      }

      seriesGraph.setOption(option);
    });
  }

  function startLoop() {
    timeOutId = setInterval(() => {
      const nowDate = currentJson.replace('.json', '').split('-')
      let month = Number(nowDate[1])
      let day = Number(nowDate[2]) + 1
      let nextJson = ''
      if (month === 9 && day === 26) {
        nextJson = '2019-06-01.json'
      } else if (day > 30) {
        month += 1
        day = 1
        nextJson = `2019-0${month}-${day < 10 ? `0${day}` : day}.json`
      } else {
        nextJson = `2019-0${month}-${day < 10 ? `0${day}` : day}.json`
      }
      currentJson = nextJson
      setSeriesGraph(currentJson)
    }, 2 * 1000)
  }

  setSeriesGraph(currentJson)
  startLoop()

  $('#seriesGraph').on('click', () => {
    clearInterval(timeOutId)
    startLoop()
  })

  /*************** 重点人群 **************/
  const seriesGraphKeyPeople1 = echarts.init(document.getElementById("seriesGraph-keyPeople1"));
  // seriesGraph.showLoading();
  $.ajax('data/origin.gexf').done(function (xml) {
    // seriesGraph.hideLoading();

    const graph = echarts.dataTool.gexf.parse(xml);

    const categories = [];
    for (let i = 0; i < 8; i++) {
      categories[i] = {
        name: '类目' + i
      };
    }

    graph.nodes.forEach(function (node) {
      node.itemStyle = null;
      node.value = node.symbolSize;
      node.symbolSize /= 1.5;
      node.label = {
        normal: {
          show: node.symbolSize > 30
        }
      };
      node.category = node.attributes.modularity_class;
    });

    const option = {
      tooltip: {},
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: 'graph',
          layout: 'none',
          data: graph.nodes,
          links: graph.links,
          categories,
          roam: false,
          focusNodeAdjacency: true,
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 1,
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
          },
          label: {
            position: 'right',
            formatter: '{b}'
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3
          },
          emphasis: {
            lineStyle: {
              width: 10
            }
          }
        }
      ]
    };
    seriesGraphKeyPeople1.setOption(option);
  });

  const seriesGraphKeyPeople2 = echarts.init(document.getElementById("seriesGraph-keyPeople2"));
  // seriesGraph.showLoading();
  $.ajax('data/1st.gexf').done(function (xml) {
    // seriesGraph.hideLoading();

    const graph = echarts.dataTool.gexf.parse(xml);

    const categories = [];
    for (let i = 0; i < 8; i++) {
      categories[i] = {
        name: '类目' + i
      };
    }

    graph.nodes.forEach(function (node) {
      node.itemStyle = null;
      node.value = node.symbolSize;
      node.symbolSize /= 1.5;
      node.label = {
        normal: {
          show: node.symbolSize > 30
        }
      };
      node.category = node.attributes.modularity_class;
    });

    const option = {
      tooltip: {},
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: 'graph',
          layout: 'none',
          data: graph.nodes,
          links: graph.links,
          categories,
          roam: false,
          focusNodeAdjacency: true,
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 1,
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
          },
          label: {
            position: 'right',
            formatter: '{b}'
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3
          },
          emphasis: {
            lineStyle: {
              width: 10
            }
          }
        }
      ]
    };
    seriesGraphKeyPeople2.setOption(option);
  });

  const seriesGraphKeyPeople3 = echarts.init(document.getElementById("seriesGraph-keyPeople3"));
  // seriesGraph.showLoading();
  $.ajax('data/2nd.gexf').done(function (xml) {
    // seriesGraph.hideLoading();

    const graph = echarts.dataTool.gexf.parse(xml);

    const categories = [];
    for (let i = 0; i < 8; i++) {
      categories[i] = {
        name: '类目' + i
      };
    }

    graph.nodes.forEach(function (node) {
      node.itemStyle = null;
      node.value = node.symbolSize;
      node.symbolSize /= 1.5;
      node.label = {
        normal: {
          show: node.symbolSize > 30
        }
      };
      node.category = node.attributes.modularity_class;
    });

    const option = {
      tooltip: {},
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: 'graph',
          layout: 'none',
          data: graph.nodes,
          links: graph.links,
          categories,
          roam: false,
          focusNodeAdjacency: true,
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 1,
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
          },
          label: {
            position: 'right',
            formatter: '{b}'
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3
          },
          emphasis: {
            lineStyle: {
              width: 10
            }
          }
        }
      ]
    };
    seriesGraphKeyPeople3.setOption(option);
  });

  const seriesGraphKeyPeople4 = echarts.init(document.getElementById("seriesGraph-keyPeople4"));
  // seriesGraph.showLoading();
  $.ajax('data/2nd.gexf').done(function (xml) {
    // seriesGraph.hideLoading();

    const graph = echarts.dataTool.gexf.parse(xml);

    const categories = [];
    for (let i = 0; i < 8; i++) {
      categories[i] = {
        name: '类目' + i
      };
    }

    graph.nodes.forEach(function (node) {
      node.itemStyle = null;
      node.value = node.symbolSize;
      node.symbolSize /= 1.5;
      node.label = {
        normal: {
          show: node.symbolSize > 30
        }
      };
      node.category = node.attributes.modularity_class;
    });

    const option = {
      tooltip: {},
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: 'graph',
          layout: 'none',
          data: graph.nodes,
          links: graph.links,
          categories,
          roam: false,
          focusNodeAdjacency: true,
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 1,
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
          },
          label: {
            position: 'right',
            formatter: '{b}'
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3
          },
          emphasis: {
            lineStyle: {
              width: 10
            }
          }
        }
      ]
    };
    seriesGraphKeyPeople4.setOption(option);
  });

  /*************** 事件发展趋势图 **************/
  const lineChart = echarts.init(document.getElementById("lineChart"));
  (function () {
    const option = {
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        top: '10%',
      },
      xAxis: {
        type: 'category',
        data: ["2019/6/1", "2019/6/2", "2019/6/3", "2019/6/4", "2019/6/5", "2019/6/6", "2019/6/7", "2019/6/8", "2019/6/9", "2019/6/10", "2019/6/11", "2019/6/12", "2019/6/13", "2019/6/14", "2019/6/15", "2019/6/16", "2019/6/17", "2019/6/18", "2019/6/19", "2019/6/20", "2019/6/21", "2019/6/22", "2019/6/23", "2019/6/24", "2019/6/25", "2019/6/26", "2019/6/27", "2019/6/28", "2019/6/29", "2019/6/30", "2019/7/1", "2019/7/2", "2019/7/3", "2019/7/4", "2019/7/5", "2019/7/6", "2019/7/7", "2019/7/8", "2019/7/9", "2019/7/10", "2019/7/11", "2019/7/12", "2019/7/13", "2019/7/14", "2019/7/15", "2019/7/16", "2019/7/17", "2019/7/18", "2019/7/19", "2019/7/20", "2019/7/21", "2019/7/22", "2019/7/23", "2019/7/24", "2019/7/25", "2019/7/26", "2019/7/27", "2019/7/28", "2019/7/29", "2019/7/30", "2019/7/31", "2019/8/1", "2019/8/2", "2019/8/3", "2019/8/4", "2019/8/5", "2019/8/6", "2019/8/7", "2019/8/8", "2019/8/9", "2019/8/10", "2019/8/11", "2019/8/12", "2019/8/13", "2019/8/14", "2019/8/15", "2019/8/16", "2019/8/17", "2019/8/18", "2019/8/19", "2019/8/20", "2019/8/21", "2019/8/22", "2019/8/23", "2019/8/24", "2019/8/25", "2019/8/26", "2019/8/27", "2019/8/28", "2019/8/29", "2019/8/30", "2019/8/31", "2019/9/1", "2019/9/2", "2019/9/3", "2019/9/4", "2019/9/5", "2019/9/6", "2019/9/7", "2019/9/8", "2019/9/9", "2019/9/10", "2019/9/11", "2019/9/12", "2019/9/13", "2019/9/14", "2019/9/15", "2019/9/16", "2019/9/17", "2019/9/18", "2019/9/19", "2019/9/20", "2019/9/21", "2019/9/22", "2019/9/23", "2019/9/24", "2019/9/25"],
        axisLine: {
          lineStyle: {
            color: '#fff',
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#fff',
          }
        }
      },
      series: [{
        name: 'mean',
        data: ["76", "76", "76.31235567", "76.6423353", "76.42829834", "76.49973689", "79.32520244", "77.66995501", "79.0291423", "78.30641257", "83.18859711", "89.93082143", "88.6835076", "89.45460755", "92.46596811", "88.65790972", "88.18866961", "83.25066978", "79.84822084", "83.28560409", "81.99432015", "78.50970067", "80.93286945", "83.20645764", "83.60039522", "83.95916556", "83.6860656", "82.79556172", "83.71015139", "81.49290963", "86.45", "88.45", "83", "85.9", "85.88", "88.45", "76.26664742", "77.03470419", "77.35268186", "79.62281543", "78.8602437", "79.13517001", "78.7991671", "78.98484566", "78.60964103", "77.2632798", "78.70210214", "76.0988847", "74.52628215", "74.64333078", "74.12529526", "76.58627257", "77.82440786", "77.94314229", "79.88685806", "79.84578769", "79.20956626", "79.20861497", "77.11760673", "78.75850349", "79.4175431", "79.84500386", "80.83187691", "80.53074017", "80.00979901", "91", "87", "88", "88.123", "90.1234", "87.6", "88.6", "89.78", "90.9", "80.87", "82.87", "80.12", "79.33", "80.01", "77.82", "76.77", "73.62854443", "77.71279785", "76.30288521", "78.20896277", "78.52523597", "79.15603007", "76.69252321", "75.94849301", "74.61119178", "74.61774692", "77.54482567", "74.42697484", "74.02170539", "74.25907752", "73.02929086", "73.19107586", "71.177441", "69.46116593", "67.51108905", "78.3658869", "77.63220313", "76.00529984", "70.84706293", "70.42496629", "74.71505868", "72.3151384", "75.79295224", "78.6245", "79.56367752", "81.09398757", "76.96115027", "72.38284696", "73.97866279", "70.816927", "73.08796505", "70.89424028"],
        type: 'line',
        smooth: true
      }, {
        name: 'pred',
        data: ["76", "76", "76", "76", "76", "76", "76", "79", "79", "79", "78", "83", "92", "94", "92", "92", "90", "87", "81", "77", "79", "82", "79", "78", "82", "85", "85", "84", "82", "83", "81", "85", "89", "86", "84", "84", "89", "77", "72", "71", "80", "80", "79", "78", "78", "78", "77", "77", "76", "73", "72", "73", "76", "78", "79", "80", "80", "80", "78", "76", "77", "79", "80", "81", "81", "80", "90", "92", "91", "86", "90", "88", "88", "89", "91", "82", "78", "76", "78", "78", "77", "76", "72", "75", "76", "79", "78", "80", "77", "75", "73", "73", "76", "75", "73", "72", "72", "72", "70", "68", "65", "76", "82", "81", "69", "67", "71", "74", "76", "79", "82", "82", "78", "71", "69", "69", "72"],
        type: 'line',
        smooth: true
      }]
    };
    lineChart.setOption(option, true);
    lineChart.on('click', (point) => {
      clearInterval(timeOutId)
      const currentDate = point.name.split('/')
      const newDate = `${currentDate[0]}-0${currentDate[1]}-${currentDate[2] < 10 ? `0${currentDate[2]}` : currentDate[2]}`
      currentJson = `${newDate}.json`
      setSeriesGraph(currentJson)
    })
  })();

  /*************** 词云 **************/
  const wordCloud = echarts.init(document.getElementById('wordCloud'));

  (function () {
    const option = {
      tooltip: {
        show: false
      },
      series: [{
        type: 'wordCloud',
        gridSize: 8,
        sizeRange: [12, 45],
        rotationRange: [-45, 45],
        shape: 'pentagon',
        drawOutOfBound: false,
        autoSize: true,
        textStyle: {
          normal: {
            color: function () {
              return 'rgb(' + [
                Math.round(Math.random() * 180),
                Math.round(Math.random() * 180),
                Math.round(Math.random() * 180)
              ].join(',') + ')';
            }
          },
        },
        data: [{ "name": "香港", "value": 1293, }, { "name": "蒙面", "value": 869 },
          { "name": "警察", "value": 284 }, { "name": "示威者", "value": 312 },
          { "name": "記者", "value": 453 }, {
            "name": "遊行", "value": 118
          }, { "name": "催淚彈", "value": 124 }, { "name": "運動", "value": 217 }, {
            "name": "五大诉求",
            "value": 564
          }, { "name": "拘捕", "value": 125 }, { "name": "罷課", "value": 361 }, {
            "name": "政府",
            "value": 226
          }, { "name": "集會", "value": 911 }, { "name": "罷工", "value": 879 }, {
            "name": "反送中",
            "value": 791
          }, { "name": "衝突", "value": 220 }, { "name": "中共", "value": 405 }, {
            "name": "惡法",
            "value": 693
          }, { "name": "下台", "value": 178 }, { "name": "革命", "value": 210 }, {
            "name": "社會",
            "value": 196
          }, { "name": "被捕", "value": 158 }, { "name": "條例", "value": 154 }, {
            "name": "問題",
            "value": 148
          }, { "name": "中國", "value": 145 }, { "name": "武器", "value": 134 }, {
            "name": "沒有",
            "value": 122
          }, { "name": "暴力", "value": 119 }, { "name": "調查", "value": 119 }]
      }],
    };
    wordCloud.setOption(option);
  })();

  /*************** 环形图 **************/
  $("#doughnutChart").css({
    width: $("#wordCloud").width(),
    height: $("#wordCloud").height()
  })

  const doughnutChart = echarts.init(document.getElementById('doughnutChart'));

  (function () {
    const option = {
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['60%', '80%'],
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 335, name: '活跃重点人' },
            { value: 310, name: '不活跃重点人' },
          ]
        }
      ],
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['活跃重点人', '不活跃重点人'],
        textStyle: {
          color: '#fff'
        }
      },
    };
    doughnutChart.setOption(option);
  })();

  /*************** 直方图 **************/
  $("#histogram").css({
    width: $("#wordCloud").width(),
    height: $("#wordCloud").height()
  })

  const histogram = echarts.init(document.getElementById('histogram'));

  (function () {
    const option = {
      grid: {
        top: '10%',
        left: '12%',
        right: '12%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['维权', '涉恐', '网约车', '涉赌', '涉军', '上访', '涉黄', '反动'],
        axisLine: {
          lineStyle: {
            color: '#fff',
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#fff',
          }
        }
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110, 130, 100],
        type: 'bar'
      }]
    };
    histogram.setOption(option)
  })();

  /**
   * loading
   */
  $('#datav-layout').css('visibility', 'visible');
  $('#datav-loading').fadeOut();

  $(".txtMarquee-top").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "topMarquee",
    vis: 10,
    interTime: 50,
  });

  $("#slideBox").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "fold",
    interTime: 5 * 1000,
  });

  /**
   * 打分
   */
  const star = (rate) => `${'★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate)} ${rate}星`;

  $("#slideBox-politics").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "leftLoop",
    interTime: 3 * 1000,
    startFun: () => {
      /*************** 情感分析结果 **************/
      $(".star-point").text(star(Math.round(Math.random() * 4) + 1))
    },
  });

  $("#slideBox-keyPeople").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "fade",
    interTime: 2 * 1000,
  });
});
