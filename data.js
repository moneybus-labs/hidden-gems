// data.js

const linksData = [
    {
        url: 'https://activetfs.github.io/reports',
        title: '📊 액티브 ETF 리포트',
        isNew: true,
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
        url: 'https://drive.google.com/file/d/1NIq8BKHki7ccSFCqTDEGDAxgL2iYOXDX/view',
        title: '📈 액티브 ETF 구성 변화 시각화 앱',
        isNew: false,
        contributor: {
            githubId: null,
            name: '🪵 우드워커'
        }
    },
    {
        url: 'https://github.com/moneybus-labs/books',
        title: '📚 채상욱의 머니버스 구독자를 위한 추천 도서 안내',
        isNew: false,
        contributor: null
    }        
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
        id: 4, 
        icon: '🎭', 
        title: '일희일비 하지마라 (feat. 성수동 힙카페)', 
        cardTitle: '일희일비 하지마라<br><span style="font-size: 0.75em; opacity: 0.8;">(feat. 성수동 힙카페)</span>', 
        logic: '노이즈 필터링 & 멘탈 관리', 
        detail: '매일의 주가 등락에 감정을 소모하면 장기 레이스를 완주할 수 없습니다. 자신이 세운 투자 논거(Thesis)가 훼손되지 않았다면, 시장의 단기 소음(Noise)은 무시하고 평정심을 유지해야 합니다.', 
        bgClass: 'bg-purple', 
        gridClass: 'col-2 row-2', 
        badge: { class: 'badge-warn', text: '유의' } 
    },
    { 
        id: 3, 
        icon: '🏠', 
        title: '투자용 부동산 하지마라', 
        cardTitle: '투자용 부동산<br>하지마라', 
        logic: '세금 이슈 & 유동성 함정', 
        detail: '현재 세금 제도(취득세, 보유세, 양도세) 하에서 다주택/갭투자는 효율이 극히 떨어집니다. 또한 자산이 부동산에 묶이면 위기 대응이 불가능합니다. "단독(아일랜드 도시) 말고 아파트가 부동산 상품"이라는 말처럼, 확실한 실거주 한 채가 아니라면 무리하지 마십시오.', 
        bgClass: '', 
        gridClass: '' 
    },
    { 
        id: 6, 
        icon: '😈', 
        title: 'TQQQ(레버리지) 하지마라 (사탄이다)', 
        cardTitle: 'TQQQ(레버리지) 하지마라<br><span style="font-size: 0.75em; opacity: 0.8;">(사탄이다)</span>', 
        logic: '음의 복리(Decay) & 계좌 붕괴', 
        detail: '레버리지 투자는 "시내 도로에서 180km로 달리는 것"과 같습니다. 횡보장에서도 음의 복리 효과로 계좌가 녹아내리며, 한 번의 폭락으로 재기 불능 상태가 될 수 있습니다. (채 리더 공인 \'사탄\' 등급)', 
        bgClass: 'bg-red-strong', 
        gridClass: 'col-2', 
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
        detail: '시드머니가 작을 때는 절세 전략보다 \'수익률 극대화\'를 통해 원금(돈통) 자체를 키우는 것이 우선입니다. 세금 걱정은 돈을 아주 많이 번 뒤에 해도 늦지 않습니다.', 
        bgClass: 'bg-purple', 
        gridClass: 'col-2' 
    },
    { 
        id: 7, 
        icon: '🤐', 
        title: '무지성 "뭐사요? 지금사요?" 묻지마라', 
        cardTitle: '무지성 "뭐사요? 지금사요?"<br>묻지마라', 
        logic: '투자 주권 확립', 
        detail: '남이 떠먹여 주는 종목은 확신이 없기 때문에 주가가 조금만 흔들려도 공포에 질려 손절하게 됩니다. 스스로 공부하고 분석하여 본인만의 논리를 가져야 끝까지 버틸 수 있습니다.', 
        bgClass: 'bg-blue', 
        gridClass: 'col-2', 
        badge: { class: 'badge-warn', text: '유의' } 
    },
    { 
        id: 10, 
        icon: '💭', 
        title: '망상하지마라 (성장 & 역성장의 숫자를 봐라)', 
        cardTitle: '망상하지마라<br><span style="font-size: 0.75em; font-weight: 500;">(성장 & 역성장의 숫자를 봐라)</span>', 
        logic: '데이터 기반 투자 (Fact Check)', 
        detail: '"이 산업이 뜰 거야"라는 막연한 기대감(망상)만으로 투자하지 마십시오. 반드시 매출 성장률, 이익률 등 \'성장과 역성장의 숫자\'를 눈으로 확인하고, 데이터가 증명하는 곳에 배팅하십시오.', 
        bgClass: 'bg-orange', 
        gridClass: 'col-2 row-2', 
        badge: { class: 'badge-warn', text: '유의' } 
    },
    { 
        id: 11, 
        icon: '🕘', 
        title: '9시 30분 이전 촉수금지 (변동성 높음)', 
        cardTitle: '9시 30분 이전 촉수금지<br><span style="font-size: 0.75em; opacity: 0.8;">(변동성 높음)</span>', 
        logic: '초반 변동성 회피', 
        detail: '장 개시 직후 30분은 시장 참여자들의 심리가 뒤섞여 호가가 널뛰는 시간입니다. 방향성을 예측하기 어려우므로, 시장이 진정되고 추세가 잡힌 것을 확인한 후(9시 30분 이후) 진입해도 늦지 않습니다.', 
        bgClass: 'bg-blue', 
        gridClass: 'col-2' 
    },
    { 
        id: 12, 
        icon: '🤏', 
        title: '무지성 개별주 하지마라 (박복하다)', 
        cardTitle: '무지성 개별주 하지마라<br><span style="font-size: 0.75em; opacity: 0.8;">(박복하다)</span>', 
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
        title: '랩(Wrap) 하지마라', 
        cardTitle: '랩(Wrap) 하지마라', 
        logic: '고비용 & 책임 소재 불분명', 
        detail: '"삼성홈플러스는 삼성이 아니다." 증권사 랩 상품은 수수료가 비싸고 운용 성과가 시장 수익률을 따라가기 벅찬 경우가 많습니다. 남에게 맡기지 말고 직접 ETF로 투자하거나, 실력이 검증된 운용역(의사)을 보고 투자하십시오.', 
        bgClass: '', 
        gridClass: '' 
    },
    { 
        id: 16, 
        icon: '🍖', 
        title: '평가이익으로 고기 사 먹지 마라', 
        cardTitle: '평가이익으로<br>고기 사 먹지 마라', 
        logic: '사이버 머니의 함정 (현금흐름 중시)', 
        detail: '계좌에 찍힌 빨간불(평가익)은 매도하기 전까지 내 돈이 아닙니다. 기분에 취해 소비를 늘리면, 나중에 주가가 빠졌을 때 원금 손실과 과소비의 이중고를 겪습니다. 소비는 반드시 \'실현 손익\'이나 배당 같은 \'현금 흐름\' 내에서 통제하십시오.', 
        bgClass: '', 
        gridClass: '' 
    },
    { 
        id: 17, 
        icon: '🪖', 
        title: '포트에 의미없는 비중 사지마라 (정찰병 금지)', 
        cardTitle: '포트에 의미없는<br>비중 사지마라<br><span style="font-size: 0.75em; font-weight: 500;">(정찰병 금지)</span>', 
        logic: '확신 없는 소액 매수는 무쓸모', 
        detail: '‘일단 조금만 사보자’는 정찰병식 매수는 포트폴리오 관리에 아무 의미가 없습니다. 확신이 없는 투자는 하지 말고, 충분히 고민한 뒤 집 계약금처럼 책임질 수 있는 비중으로 들어가야 합니다. 작은 손으로 찔러보는 습관은 결단력 없는 투자로 이어집니다.', 
        bgClass: '', 
        gridClass: '', 
        badge: { class: 'badge-new', text: 'NEW' } 
    },
    { 
        id: 15, 
        icon: '🛡️', 
        title: '평생 한 번 승부처가 아니면 계명을 어기지마라', 
        cardTitle: '평생 한 번 승부처가 아니면 계명을 어기지마라<br><span style="font-size: 0.75em; opacity: 0.9;">(즉, 승부를 걸때는 계명을 어겨라)</span>', 
        logic: '원칙의 역설 & 결정적 기회 포착', 
        detail: '이 모든 계명은 평상시 자산을 지키기 위한 안전장치입니다. 하지만 인생을 바꿀만한 확실하고 거대한 기회(승부처)가 왔다고 확신할 때는, 이 계명들을 과감히 깨고 승부를 걸 줄도 알아야 합니다. (역설적으로 평소엔 철저히 지키라는 뜻)', 
        bgClass: '', 
        gridClass: 'col-4', 
        isJoker: true, 
        badge: { class: 'badge-joker', text: 'JOKER' } 
    }
];