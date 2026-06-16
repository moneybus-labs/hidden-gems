// data.js

const linksData = [
    {
        url: 'https://fillbook.ludicflow.com',
        title: '📓 매매일지 어플 FillBook',
        isNew: true,
        contributor: null
    },
    {
        url: 'https://drive.google.com/drive/folders/1PGNQhqmSTNszv28tAIEchzOZlLlZisUP?usp=sharing',
        title: '📁 공유문서함',
        isNew: false,
        contributor: {
            githubId: null,
            name: '간식먹는 두더지 388338'
        }
    },
    {
        url: 'https://bird-heart.pages.dev',
        title: '🚌 머니버스 포트폴리오 가이드',
        isNew: false,
        contributor: null
    },
    {
        url: 'https://buly.kr/GvokGOa',
        title: '📈 액티브 ETF 구성 변화 시각화 앱',
        isNew: false,
        contributor: {
            githubId: 'joonhochoi',
            name: '우드워커'
        }
    },
    {
        url: 'https://activetfs.github.io/reports',
        title: '📊 액티브 ETF 리포트',
        isNew: false,
        contributor: {
            githubId: 'activetfs',
            name: '게임하는 판다 192331'
        }
    },
    {
        url: 'https://meringue5.github.io/chaextractor',
        title: '💬 카톡방 대화 정리 뷰어 (벽타기용)',
        isNew: false,
        contributor: {
            githubId: 'meringue5',
            name: '무스타파'
        }
    },
    {
        url: 'https://github.com/moneybus-labs/books',
        title: '📚 채상욱의 머니버스 구독자를 위한 추천 도서 안내',
        isNew: false,
        contributor: null
    }
];

const etfData = [
    {
        category: '미국',
        items: [
            { nickname: '타슨피', brand: 'TIME', fullName: 'TIME S&P 500 액티브', url: 'https://timeetf.co.kr/m11_view.php?idx=5' },
            { nickname: '타나백', brand: 'TIME', fullName: 'TIME 미국 나스닥 100 액티브', url: 'https://timeetf.co.kr/m11_view.php?idx=2' },
            { nickname: '코나성', brand: 'KoAct', fullName: 'KoAct 미국 나스닥 성장기업 액티브', url: 'https://www.samsungactive.co.kr/etf/view.do?id=2ETFQ1' },
            { nickname: '타글에', brand: 'TIME', fullName: 'TIME 글로벌 AI 인공지능 액티브', isBest: true, url: 'https://timeetf.co.kr/m11_view.php?idx=6' },
        ]
    },
    {
        category: '국내',
        items: [
            { nickname: '라코전', brand: 'RISE', fullName: 'RISE 코리아 전략산업 액티브', isBest: true, url: 'https://www.riseetf.co.kr/prod/finderDetail/44K0' },
            { nickname: '타코밸', brand: 'TIME', fullName: 'TIME 코리아 밸류업 액티브', isBest: true, url: 'https://timeetf.co.kr/m11_view.php?idx=15' },
            { nickname: '코코밸', brand: 'KoAct', fullName: 'KoAct 코리아 밸류업 액티브', isBest: true, url: 'https://www.samsungactive.co.kr/etf/view.do?id=2ETFP3' },
            { nickname: '타스피', brand: 'TIME', fullName: 'TIME 코스피 액티브', url: 'https://timeetf.co.kr/m11_view.php?idx=11' },
            { nickname: '타플배', brand: 'TIME', fullName: 'TIME 코리아 플러스 배당 액티브', url: 'https://timeetf.co.kr/m11_view.php?idx=12' },
            { nickname: '코배성', brand: 'KoAct', fullName: 'KoAct 배당 성장 액티브', url: 'https://www.samsungactive.co.kr/etf/view.do?id=2ETFM2' },
            { nickname: '코수출', brand: 'KoAct', fullName: 'KoAct K수출 핵심기업 Top30 액티브', isBest: true, url: 'https://www.samsungactive.co.kr/etf/view.do?id=2ETFR6' },
            { nickname: '타코닥', brand: 'TIME', fullName: 'TIME 코스닥 액티브', url: 'https://timeetf.co.kr/m11_view.php?idx=24' },
            { nickname: '코코닥', brand: 'KoAct', fullName: 'KoAct 코스닥 액티브', url: 'https://www.samsungactive.co.kr/etf/view.do?id=2ETFU6' },
        ]
    },
    {
        category: '고배당',
        items: [
            { nickname: 'AGNC', brand: null, fullName: 'AGNC 인베스트먼트', url: 'https://investors.agnc.com/' },
        ]
    },
    {
        category: '중국',
        items: [
            { nickname: null, brand: 'KODEX', fullName: 'KODEX 차이나 AI 테크 액티브', url: 'https://www.samsungfund.com/etf/product/view.do?id=2ETFG7' },
            { nickname: null, brand: 'TIME', fullName: 'TIME 차이나 AI 테크 액티브', url: 'https://timeetf.co.kr/m11_view.php?idx=19' },
            { nickname: null, brand: 'TIGER', fullName: 'TIGER 차이나 항셍테크', url: 'https://investments.miraeasset.com/tigeretf/ko/product/search/detail/index.do?ksdFund=KR7371160003' },
            { nickname: null, brand: 'TIGER', fullName: 'TIGER 차이나 항셍30', url: 'https://investments.miraeasset.com/tigeretf/ko/product/search/detail/index.do?ksdFund=KR7117690008' },
        ]
    },
];

const bentoData = [
    {
        id: 1,
        icon: '🪙',
        title: '코인 하지마라',
        cardTitle: '코인 하지마라',
        logic: '생산성 부재 & 잡종 자산',
        detail: '코인은 기업처럼 가치를 창출하는 것이 아니라, 단순히 \'돈을 찍어내는\' 행위에 가깝습니다. 펀더멘탈이 불분명한 자산에 시간을 낭비하지 말고, 차라리 안전자산인 \'금\'을 사거나 확실한 성장 자산(주식)에 집중하십시오.',
        bgClass: '',
        gridClass: ''
    },
    {
        id: 2,
        icon: '📉',
        title: '커버드콜 하지마라',
        cardTitle: '커버드콜 하지마라',
        logic: '상방이 닫힌 구조 (Limited Upside)',
        detail: '상승장에서 수익을 온전히 누려야 계좌가 레벨업 됩니다. 커버드콜은 프리미엄(이자) 조금 받으려다 큰 시세 차익을 포기하게 만드는, 상승장에서 매우 비효율적이고 \'박한\' 투자 방식입니다.',
        bgClass: 'bg-yellow',
        gridClass: 'row-2'
    },
    {
        id: 3,
        icon: '🏠',
        title: '투자용 부동산 하지마라',
        cardTitle: '투자용 부동산 하지마라',
        logic: '세금 이슈 & 유동성 함정',
        detail: '현재 세금 제도(취득세, 보유세, 양도세) 하에서 다주택/갭투자는 효율이 극히 떨어집니다. 또한 자산이 부동산에 묶이면 위기 대응이 불가능합니다. "단독(아일랜드 도시) 말고 아파트가 부동산 상품"이라는 말처럼, 확실한 실거주 한 채가 아니라면 무리하지 마십시오.',
        bgClass: '',
        gridClass: ''
    },
    {
        id: 4,
        icon: '🎭',
        title: '일희일비 하지마라 (feat. 성수동 힙카페)',
        cardTitle: '일희일비 하지마라 (feat. 성수동 힙카페)',
        logic: '노이즈 필터링 & 멘탈 관리',
        detail: '매일의 주가 등락에 감정을 소모하면 장기 레이스를 완주할 수 없습니다. 자신이 세운 투자 논거(Thesis)가 훼손되지 않았다면, 시장의 단기 소음(Noise)은 무시하고 평정심을 유지해야 합니다.',
        bgClass: 'bg-purple',
        gridClass: 'col-2 row-2',
        badge: { class: 'badge-warn', text: '유의' }
    },
    {
        id: 5,
        icon: '📜',
        title: '채권 하지마라',
        cardTitle: '채권 하지마라',
        logic: '수익률 한계 & 시대착오적 자산배분',
        detail: '"주식 6 : 채권 4" 같은 자산 배분은 고금리 시절이나 통하던 \'80년대 감성\'입니다. 성장이 희소한 시대에 채권 이자 몇 푼 받으려다 인플레이션 헷지도 못하고, 주식 시장의 초과 수익 기회비용만 날리게 됩니다.',
        bgClass: '',
        gridClass: ''
    },
    {
        id: 6,
        icon: '😈',
        title: 'TQQQ(레버리지) 하지마라 정말 하지마라 (사탄이다)',
        cardTitle: 'TQQQ(레버리지) 하지마라 정말 하지마라 (사탄이다)',
        logic: '음의 복리(Decay) & 계좌 붕괴',
        detail: '레버리지 투자는 "시내 도로에서 180km로 달리는 것"과 같습니다. 횡보장에서도 음의 복리 효과로 계좌가 녹아내리며, 한 번의 폭락으로 재기 불능 상태가 될 수 있습니다. (채 리더 공인 \'사탄\' 등급)',
        bgClass: 'bg-red-strong',
        gridClass: 'col-2',
        badge: { class: 'badge-warn', text: '유의' }
    },
    {
        id: 7,
        icon: '🤐',
        title: '무지성 "뭐사요? 지금사요?" 묻지마라',
        cardTitle: '무지성 "뭐사요? 지금사요?" 묻지마라',
        logic: '투자 주권 확립',
        detail: '남이 떠먹여 주는 종목은 확신이 없기 때문에 주가가 조금만 흔들려도 공포에 질려 손절하게 됩니다. 스스로 공부하고 분석하여 본인만의 논리를 가져야 끝까지 버틸 수 있습니다.',
        bgClass: 'bg-blue',
        gridClass: 'col-2',
        badge: { class: 'badge-warn', text: '유의' }
    },
    {
        id: 8,
        icon: '💰',
        title: '빚투 하지마라',
        cardTitle: '빚투 하지마라',
        logic: '심리적 쫓김 & 강제 청산 위험',
        detail: '빚을 내는 순간 투자의 시계(Time Horizon)가 짧아집니다. 일시적인 하락장에서 반대매매(강제 청산)를 당할 위험이 크며, 이자 부담으로 인해 조급한 판단을 내리기 쉽습니다.',
        bgClass: '',
        gridClass: ''
    },
    {
        id: 9,
        icon: '🧾',
        title: '돈통 키워야지 세금 걱정마라',
        cardTitle: '돈통 키워야지 세금 걱정마라',
        logic: '본질 집중 (수익 > 세금)',
        detail: '시드머니가 작을 때는 절세 전략보다 \'수익률 극대화\'를 통해 원금(돈통) 자체를 키우는 것이 우선입니다. 세금 걱정은 돈을 아주 많이 번 뒤에 해도 늦지 않습니다. 해외주식 양도세, 금융종합소득세 등 과세 한도에 지나치게 집착하여 투자 원금이나 유동성을 묶어버리면, 정작 중요한 시기에 확실한 성장 기회를 놓칠 수 있습니다. 세금을 조금 더 내더라도 본질적인 수익률과 성장에 집중하는 것이 먼저입니다.',
        bgClass: '',
        gridClass: ''
    },
    {
        id: 10,
        icon: '💭',
        title: '망상하지마라 (성장 & 역성장의 숫자를 봐라)',
        cardTitle: '망상하지마라 (성장 & 역성장의 숫자를 봐라)',
        logic: '데이터 기반 투자 (Fact Check)',
        detail: '"이 산업이 뜰 거야"라는 막연한 기대감(망상)만으로 투자하지 마십시오. 반드시 매출 성장률, 이익률 등 \'성장과 역성장의 숫자\'를 눈으로 확인하고, 데이터가 증명하는 곳에 배팅하십시오.',
        bgClass: 'bg-orange',
        gridClass: 'col-2 row-2',
        badge: { class: 'badge-warn', text: '유의' }
    },
    {
        id: 11,
        icon: '🕘',
        title: '9시 30분 이전 촉수금지 (개장 30분 변동성 높음)',
        cardTitle: '9시 30분 이전 촉수금지 (개장 30분 변동성 높음)',
        logic: '초반 변동성 회피',
        detail: '장 개시 직후 30분은 시장 참여자들의 심리가 뒤섞여 호가가 널뛰는 시간입니다. 방향성을 예측하기 어려우므로, 시장이 진정되고 추세가 잡힌 것을 확인한 후(9시 30분 이후) 진입해도 늦지 않습니다.',
        bgClass: 'bg-purple',
        gridClass: 'col-2'
    },
    {
        id: 12,
        icon: '🤏',
        title: '무지성 개별주 하지마라 (박복하다)',
        cardTitle: '무지성 개별주 하지마라 (박복하다)',
        logic: '개별 리스크 회피 & ETF 권장',
        detail: '개별 기업은 횡령, 배임, 유상증자 등 예측 불가능한 악재(Idiosyncratic Risk)가 너무 많습니다. 기업을 깊이 분석할 능력이 없다면 내러티브에 속지 말고 산업 전반에 투자하는 ETF를 활용하십시오.',
        bgClass: 'bg-green',
        gridClass: 'row-2'
    },
    {
        id: 13,
        icon: '🎫',
        title: '우선주 사지마라',
        cardTitle: '우선주 사지마라',
        logic: '어중간한 포지션 (의결권 X, 배당 애매)',
        detail: '개인 투자자가 의결권도 없고 유동성도 적은 우선주를 사는 것은 비효율적입니다. 성장을 보고 싶으면 \'보통주\'를 사고, 배당을 원하면 확실한 \'고배당주\'를 사십시오. "삼성전자는 배당주가 아닙니다."',
        bgClass: '',
        gridClass: ''
    },
    {
        id: 14,
        icon: '🚫',
        title: '랩(Wrap) 하지마라 (삼성홈플러스는 삼성이 아니다)',
        cardTitle: '랩(Wrap) 하지마라 (삼성홈플러스는 삼성이 아니다.)',
        logic: '고비용 & 책임 소재 불분명',
        detail: '증권사 랩 상품은 수수료가 비싸고 운용 성과가 시장 수익률을 따라가기 벅찬 경우가 많습니다. 남에게 맡기지 말고 직접 ETF로 투자하거나, 실력이 검증된 운용역(의사)을 보고 투자하십시오.',
        bgClass: '',
        gridClass: 'col-2'
    },
    {
        id: 16,
        icon: '🍖',
        title: '평가이익으로 고기 사 먹지 마라 (치킨도 안됨)',
        cardTitle: '평가이익으로 고기 사 먹지 마라 (치킨도 안됨)',
        logic: '사이버 머니의 함정 (현금흐름 중시)',
        detail: '계좌에 찍힌 빨간불(평가익)은 매도하기 전까지 내 돈이 아닙니다. 기분에 취해 소비를 늘리면, 나중에 주가가 빠졌을 때 원금 손실과 과소비의 이중고를 겪습니다. 소비는 반드시 \'실현 손익\'이나 배당 같은 \'현금 흐름\' 내에서 통제하십시오.',
        bgClass: '',
        gridClass: ''
    },
    {
        id: 17,
        icon: '🪖',
        title: '포트에 의미없는 비중 사지마라 (정찰병 금지)',
        cardTitle: '포트에 의미없는 비중 사지마라 (정찰병 금지)',
        logic: '확신 없는 소액 매수는 무쓸모',
        detail: '‘일단 조금만 사보자’는 정찰병식 매수는 포트폴리오 관리에 아무 의미가 없습니다. 확신이 없는 투자는 하지 말고, 충분히 고민한 뒤 집 계약금처럼 책임질 수 있는 비중으로 들어가야 합니다. 작은 손으로 찔러보는 습관은 결단력 없는 투자로 이어집니다.',
        bgClass: 'bg-orange',
        gridClass: 'col-2'
    },
    {
        id: 18,
        icon: '🤫',
        title: '주식으로는 돈 벌었다고 가족외에는 절대 알리지 말라 (똥파리들이 꼬인다. 반대로 채반꿀을 외치자)',
        cardTitle: '주식으로 돈 번 것 가족 외엔 알리지 마라 (똥파리들이 꼬인다.)',
        logic: '인간관계 리스크 차단 (보안 유지)',
        detail: '주식으로 큰 돈을 벌었다고 주변에 알리는 순간 시기, 질투, 혹은 무리한 부탁 등 불필요한 인간관계(똥파리)가 꼬이게 됩니다. 수익은 철저히 가족과만 공유하고, 밖에서는 오히려 잃은 척("채반꿀")을 외치며 평정심을 유지하십시오.',
        bgClass: ''
    },
    {
        id: 19,
        icon: '🤐',
        title: '쏠게 아니면 수익자랑 말라 (돈자랑을 하려거든 밥을 사든가, 아니면 조용히 일지에 적어라)',
        cardTitle: '쏠게 아니라면 수익자랑 하지 마라',
        logic: '커뮤니티 배려 및 평정심 유지 (멘탈 관리)',
        detail: '시장이 전반적으로 하락하거나 다른 투자자들이 어려움을 겪고 있을 때, 무분별하게 수익을 자랑하는 행동은 대화방 분위기를 저해할 수 있습니다. 진심으로 방원들에게 턱을 쏠("밥이나 커피를 살") 것이 아니라면, 수익의 기쁨은 개인 투자 일지에 기록하며 스스로 평정심을 유지하고 동료 투자자들을 배려해야 합니다.',
        bgClass: ''
    },
    {
        id: 20,
        icon: '📱',
        title: '잔고체크하지마라 (돈이 마음을 뒤흔든다)',
        cardTitle: '잔고체크하지마라 (돈이 마음을 뒤흔든다)',

        logic: '심리 및 욕심 통제',
        detail: '잔고를 직접 확인하며 매일 수백, 수천만 원이 오르내리는 것을 눈으로 보면 심리가 쉽게 흔들리게 됩니다. 주가체크보다 더 나쁜 습관이 잔고 체크이며, 돈이 마음을 뒤흔들지 않도록 계좌를 함부로 열어보지 않는 절제가 필요합니다.',
        bgClass: ''
    },
    {
        id: 15,
        icon: '🛡️',
        title: '평생 한 번 승부처가 아니면 계명을 어기지마라',
        cardTitle: '평생 한 번 승부처가 아니면 계명을 어기지마라<br>(즉, 승부를 걸때는 계명을 어겨라)',
        logic: '원칙의 역설 & 결정적 기회 포착',
        detail: '이 모든 계명은 평상시 자산을 지키기 위한 안전장치입니다. 하지만 인생을 바꿀만한 확실하고 거대한 기회(승부처)가 왔다고 확신할 때는, 이 계명들을 과감히 깨고 승부를 걸 줄도 알아야 합니다. (역설적으로 평소엔 철저히 지키라는 뜻)',
        bgClass: '',
        gridClass: 'col-4',
        isJoker: true,
        badge: { class: 'badge-joker', text: 'JOKER' }
    }
];

const faqData = [
    {
        category: "🚀 Part 1. 신규 가입자 온보딩 & 필수 가이드",
        items: [
            {
                qNum: "Q1.",
                question: "방금 가입한 주린이/초보입니다. 뭐부터 시작해야 할지 벅찹니다.",
                answer: `<p><strong>A.</strong> 머니버스에 처음 탑승하신 분들 환영합니다! 당장 주식이나 ETF를 매수하려 하지 마시고, <strong>아래 순서대로 필수 콘텐츠를 먼저 확인</strong>하며 방의 프레임에 익숙해지는 것을 권장합니다. 특히 마지막 링크인 지난 톡방 아카이브 내용을 꼼꼼히 읽고 나면 대화의 흐름을 따라잡게 되실 겁니다.</p><ul><li><a href="https://fanding.kr/@chae_moneybus/post/142622/" target="_blank">0. 팬딩 머니버스 멤버십 접속 안내</a></li><li><a href="https://fanding.kr/@chae_moneybus/post/156215/" target="_blank">1. 콘텐츠 루틴안내 (일정안내)</a></li><li><a href="https://fanding.kr/@chae_moneybus/post/156820/" target="_blank">2. 신규회원 필독 가이드</a></li><li><a href="https://fanding.kr/@chae_moneybus/post/156669/" target="_blank">3. 질문하기 전 필수 체크 FAQ</a></li><li><a href="https://fanding.kr/@chae_moneybus/series" target="_blank">4. 모든 콘텐츠 모아보기 &lt;시리즈&gt;</a></li><li><a href="https://fanding.kr/@chae_moneybus/posts" target="_blank">5. 모든 포스트 모아보기 &lt;포스트&gt;</a></li><li><a href="https://fanding.kr/@chae_moneybus/series/2322/" target="_blank">👉 지난 톡방 아카이브 내용 확인하기</a></li></ul>`
            },
            {
                qNum: "Q2.",
                question: "단톡방 닉네임은 어떻게 설정해야 하는가요? (팬딩 닉네임 통일)",
                answer: `<p><strong>A.</strong> 단톡방 무임승차를 방지하기 위해 <strong>본인의 '팬딩 닉네임'과 '단톡방 닉네임'을 정확하게 통일</strong>해 주셔야 합니다. 닉네임이 다를 경우 예외 없이 강제퇴장 처리됩니다.</p><ul><li><strong>팬딩 닉네임 확인:</strong> 앱 우하단 &lt;마이&gt; 클릭 후 상단 확인 (또는 <a href="https://fanding.kr/account-info" target="_blank">계정 정보 링크</a> 접속 후 우상단 '앱열기' 또는 '로그인' 시 확인)</li><li><strong>카톡방 닉네임 변경:</strong> 우상단 줄 3개 ➔ 본인 프로필 ➔ 프로필 바꾸기 ➔ <strong>'카카오 프렌즈' 선택 (오픈프로필 X)</strong> ➔ 닉네임 변경 (<a href="https://fanding.me/nickname" target="_blank">자세한 변경 가이드</a>)</li></ul>`
            },
            {
                qNum: "Q3.",
                question: "멤버십 가입, 결제 오류, 강의 관련 등 시스템 문의는 어디로 하나요?",
                answer: `<p><strong>A.</strong> 본 채팅방은 공지 및 투자 관련 소통을 위한 공간입니다. 프로그램, 결제 등 시스템 관련 문의나 피드백을 톡방에 올리시면 <strong>답변 없이 삭제</strong>될 수 있습니다. 해당 문의는 단톡방이 아닌 <strong><a href="http://pf.kakao.com/_uLxjhG/chat" target="_blank">팬딩 고객센터</a></strong> 로 부탁드립니다.</p>`
            },
            {
                qNum: "Q4.",
                question: "'머니버스 소통방'과 '주식부자 아지트' 방은 어떤 차이가 있나요?",
                answer: `<p><strong>A.</strong> 두 채널은 목적이 다릅니다.</p><ul><li><strong>머니버스 소통방:</strong> 시장 흐름, 거시 경제, 정량적 분석 프레임을 양방향으로 자유롭게 소통하는 공간입니다. 다양한 투자 아이디어와 전략을 나눕니다.</li><li><strong>주식부자 아지트 방:</strong> 밸류에이션 트레이딩과 구체적인 개별 종목(알주식) 분석을 깊게 다루는 단방향 심화 채널입니다.</li></ul>`
            }
        ]
    },
    {
        category: "🚨 Part 2. 소통방 운영 규칙",
        items: [
            {
                qNum: "Q5.",
                isImportant: true,
                question: "<strong>[매우 중요]</strong> 소통방 내에서 지켜야 할 기본 매너나 운영 시간이 있나요?",
                answer: `<p><strong>A.</strong> 모두가 함께 공부하고 존중하는 커뮤니티를 위해 다음 방침이 엄격하게 적용됩니다. <strong>위반 시 사전 경고 없이 즉시 퇴장 및 재입장 불가 처리</strong>됩니다.</p><ul><li><strong>존댓말 사용 필수:</strong> 반말 시 즉시 퇴장</li><li><strong>금지 행위:</strong> 타인 비난, 분쟁 유발, 부정적 태도 절대 금지</li><li><strong>운영 시간:</strong> 오전 7시 ~ 오후 11시 (그 외 시간은 소등 유지)</li></ul>`
            },
            {
                qNum: "Q6.",
                isImportant: true,
                question: "<strong>[매우 중요]</strong> 제 개별 종목(알주식)에 대해 질문하거나 매도/매수 타이밍을 물어봐도 되나요?",
                answer: `<p><strong>A.</strong> <strong style="color: #ff5252;">절대 불가합니다.</strong> 머니버스 소통방은 유사투자자문법 등 법적인 가이드라인을 엄격히 준수합니다. 따라서 "이 종목 사도 되나요?", "언제 팔까요?"와 같은 <strong>개별 종목 투자 판단 문의나 리딩 요청에는 답변해 드릴 수 없습니다.</strong></p>`
            }
        ]
    },
    {
        category: "📈 Part 3. 핵심 투자 전략 & 자산 배분",
        items: [
            {
                qNum: "Q7.",
                question: "AGNC 비중은 왜 가져가나요? 배당은 주지만 원금이 줄어드는 게 걱정됩니다.",
                answer: `<p><strong>A.</strong> AGNC 투자의 목적은 주가 차익(성장)이 아닌, <strong>약 연 14% 수준의 확실한 현금흐름 확보</strong>에 있습니다. 금리가 올라가면 원금 손실이 있을 수 있으나 월 배당 형식의 지속적인 현금 흐름은 변동성이 높은 주식 시장에서 버틸 수 있는 든든한 방어막 역할을 해줍니다.</p>`
            },
            {
                qNum: "Q8.",
                question: "코인(가상자산) 투자는 변동성이 커서 안 좋나요? 왜 추천을 안 하시나요?",
                answer: `<p><strong>A.</strong> 코인은 주식(기업)과 달리 <strong>'스스로 부가가치를 창출하는 실질 기반'이 없는 단순 매수매도 도박판</strong>에 가깝기 때문입니다. 투자는 부가가치를 창출하는 기업에 해야 하므로, 경제학적 투자 관점에서 코인은 권장하지 않습니다.</p>`
            }
        ]
    },
    {
        category: "🏦 Part 4. 연금/절세 계좌 & 부동산",
        items: [
            {
                qNum: "Q9.",
                question: "IRP, 연금저축, 퇴직연금(DC형) 계좌를 세팅하려는데 어느 증권사가 좋나요?",
                answer: `<p><strong>A. 은행 계좌라면 증권사로 옮기시기 바랍니다.</strong> 매매가능한 ETF 수가 월등히 많습니다. 본인이 직접 굴려야 하므로 <strong>우리가 원하는 '액티브 ETF'를 제한 없이 매매할 수 있는 증권사</strong>라면 주거래 증권사 등 어디든 편하게 이용하시면 됩니다. 일반 계좌는 성장성 위주로, 절세 계좌는 밸류업 지수나 배당 자산으로 이원화하는 방식을 많이 활용합니다.</p>`
            },
            {
                qNum: "Q10.",
                question: "주식 상승장이라 주변 집값이 오르는 걸 보면 부동산 실거주 한 채라도 갈아타야 할까 고민됩니다.",
                answer: `<p><strong>A.</strong> 부동산 가격이 오르는 시기에는 내 집 마련이나 갈아타기를 하지 못한 분들에게 강한 포모(FOMO)가 올 수 있습니다. 물론 <strong>안정적인 주거 환경(실거주 한 채)은 심리적 안정감을 주어 장기적인 주식 투자에도 큰 도움</strong>이 됩니다. 따라서 실거주를 위한 매수는 본인의 선택이자 자연스러운 본성이지만, 자산의 대부분이 묶이는 부동산 '몰빵'보다는 <strong>유동성 있는 주식 자산 및 현금흐름과의 밸런스를 맞추는 것</strong>을 최우선으로 고려하시길 권장합니다.</p>`
            }
        ]
    }
];