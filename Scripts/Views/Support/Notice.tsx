/// <reference path="../../../../sugarhill.officesquare.web/scripts/index.tsx" />
/// <reference path="../../components/index.tsx" />

enum noticeCategory {
    All = 1,
    Notice,
    News,
    PublicRelations,
    ArticelInfo,
    Service,
    Information 
}

enum noticeTagName {
    All = "전체",
    Notice = "공지사항",
    News = "언론보도",
    PublicRelations = "홍보안내",
    ArticelInfo = "매물정보",
    Service = "정책변경",
}

interface IWebSupportNoticeProps {
    webAgentJoinRenderType: WebAgentJoinRenderType;
}

interface IWebSupportNoticeState {
    notice: noticeCategory;
    noticeListMore: boolean;
}

interface IWebSupportNoticeContent {
    noticeTag: noticeCategory;
    title: noticeTagName;
    infomationIndex: number;
    content: string;
    link: string;
}

class WebSupportNotice extends React.Component <IWebSupportNoticeProps, IWebSupportNoticeState> {
    constructor(props: IWebSupportNoticeProps) {
        super(props);
        this.state = {
            notice: this.getnoticeCategory(),
            noticeListMore: false
        }
    }

    getNoticeContents(): Array<IWebSupportNoticeContent> {
        const options: Array<IWebSupportNoticeContent> = [
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: 1,
                content: "새로운 네모 2.0 데이터랩 기능 오픈!(App)",
                link: "http://blog.naver.com/nemo_app/221856569393"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "새로운 네모 2.0 데이터랩 기능 오픈!(PC)",
                link: "http://blog.naver.com/nemo_app/221856539903"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "역시 상가, 사무실, 창업할 때 '네모'입니다.",
                link: "http://blog.naver.com/nemo_app/221650598392"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "네모 대표이사 이용일“빅데이터로 합리적인 상권 정보 제공할 것”",
                link: "http://blog.naver.com/nemo_app/221637552908"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "네모, 직방과 함께 빅데이터로 부동산 시장의 판을 변화시킬 것",
                link: "http://blog.naver.com/nemo_app/221637537082"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "일과 일상을 네모에서 찾다. 네모 통합 APP 출시",
                link: "http://blog.naver.com/nemo_app/221514962184"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "직거래 매물 일반 광고 상품 소개",
                link: "http://blog.naver.com/nemo_app/221503742355"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "네모, 주거용 부동산 정보 서비스 '네모H' 출시",
                link: "http://blog.naver.com/nemo_app/221422678944"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "추석 고객센터 휴무 안내",
                link: "http://blog.naver.com/nemo_app/221362245714"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "네모 2차 TV CF 현장 스케치 영상 공개",
                link: "http://blog.naver.com/nemo_app/221344427941"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "사무실·상가 구할 때 네모, 신규 TV CF 공개",
                link: "http://blog.naver.com/nemo_app/221344427941"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "네모X헬로비너스 2차 TV CF 현장 공개",
                link: "http://blog.naver.com/nemo_app/221335638237"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "(주)슈가힐, 대한민국 창업대상-서울경제 사장상 수상",
                link: "http://blog.naver.com/nemo_app/221334203086"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "새로워진 네모를 소개합니다. 지역별 공인중개사 매칭 서비스 오픈!",
                link: "http://blog.naver.com/nemo_app/221334201264"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "네모 신규 기능 '프랜차이즈'를 소개합니다!",
                link: "http://blog.naver.com/nemo_app/221334199294"
            },
            {
                infomationIndex: -1,
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                content: "네모 신규 사업설명회(17.12.18)",
                link: "http://blog.naver.com/nemo_app/221334197741"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "네모 '클린' 캠페인 안내",
                link: "http://blog.naver.com/nemo_app/221334197150"
            },
            {
                infomationIndex: -1,
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                content: "네모 빅데이터 상권 분석 기능 론칭",
                link: "http://blog.naver.com/nemo_app/221334196155"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "네모가 신촌 If 2017에 참가합니다!",
                link: "http://blog.naver.com/nemo_app/221334195178"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "네모X헬로비너스 TV CF 전격 공개!",
                link: "http://blog.naver.com/nemo_app/221334194489"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "네모X헬로비너스 CF 메이킹 필름 공개!",
                link: "http://blog.naver.com/nemo_app/221334194489"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "'네모X헬로비너스' 네모의 모델을 소개합니다.",
                link: "http://blog.naver.com/nemo_app/221334194112"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "사무실·상가 최고 부동산 앱 네모 소개",
                link: "http://blog.naver.com/nemo_app/221334194112"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "사무실 · 상가 광고 서비스 '네모' 앱 출시!",
                link: "http://blog.naver.com/nemo_app/221334108949"
            },







            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "네모·한국감정원, 부동산 빅데이터 구축 MOU",
                link: "https://news.mt.co.kr/mtview.php?no=2019060517002134950"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "KISO 부동산매물클린관리센터 가입",
                link: "http://blog.naver.com/nemo_app/221483409109"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "상업용 O2O 플랫폼 '네모' 운영 슈가힐, 교보리얼코와 MOU 체결",
                link: "http://blog.naver.com/nemo_app/221483398460"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "[올해의 앱] 슈가힐 '네모'",
                link: "http://blog.naver.com/nemo_app/221421544696"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "슈가힐 네모, 황학동온라인과 ‘요식업 창업 원스톱 서비스’ MOU",
                link: "http://blog.naver.com/nemo_app/221416170772"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "상업용 부동산 O2O '네모', 안드로이드 누적 다운로드 100만 돌파",
                link: "http://blog.naver.com/nemo_app/221416155801"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "상업용 부동산 앱 '네모' 47억 투자 유치",
                link: "http://blog.naver.com/nemo_app/221413795512"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "[중소벤처기업부 장관상] 서울지역 선·후배 스타트업이 만나 창업으로 소통하다",
                link: "http://blog.naver.com/nemo_app/221408577639"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "네모·한국감정원, 부동산 빅데이터 구축 MOU",
                link: "http://blog.naver.com/nemo_app/221408560376"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "청년, 유망 스타트업을 만나다..채용면접 열기 후끈",
                link: "https://news.mt.co.kr/mtview.php?no=2019060517002134950"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "네모-이사모아 “부동산+이사 통합 서비스”",
                link: "http://blog.naver.com/nemo_app/221408559484"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "상업용부동산 중개 플랫폼 '네모', 가구·사무용품 판매하는 네모샵 서비스 선보여",
                link: "http://blog.naver.com/nemo_app/221349820087"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "레드오션 창업의 모범답안 '슈가힐'… “철저한 창업준비가 큰 원동력”",
                link: "http://blog.naver.com/nemo_app/221335619278"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "[대한민국 창업대상-서울경제 사장상] 슈가힐 상가 매물 플랫폼 '네모'···빅데이터 상권 분석도",
                link: "http://blog.naver.com/nemo_app/221334203015"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "다방 창업자가 만든 상업용 부동산 플랫폼 '네모'",
                link: "http://blog.naver.com/nemo_app/221334201581"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "부동산 정보 제공 플랫폼 앱 '네모', 안드로이드 50만 다운로드 돌파",
                link: "http://blog.naver.com/nemo_app/221334199915"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "“살아나는 도심 상권…종로3가 카페, 신사동보다 많아”",
                link: "http://blog.naver.com/nemo_app/221334199412"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "[신SW상품대상]슈가힐 '네모'",
                link: "http://blog.naver.com/nemo_app/221334198734"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "슈가힐 ‘네모’, 숭실대학교 창업아이템사업화 사업 지원 통해 30억 투자 이끌어",
                link: "http://blog.naver.com/nemo_app/221334197609"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "경기도, 빅데이터 스타트업 투자유치 지원 '빅스타 데모데이'",
                link: "http://blog.naver.com/nemo_app/221334197527"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "네모(슈가힐) – TWC(더 화이트 커뮤니케이션) MOU 체결",
                link: "http://blog.naver.com/nemo_app/221334197248"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "상업용 부동산 플랫폼 슈가힐, 30억원 추가 투자 유치",
                link: "http://blog.naver.com/nemo_app/221334196889"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "부동산앱 네모, 빅데이터 ‘상권분석’ 론칭",
                link: "http://blog.naver.com/nemo_app/221334196385"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "상업용 부동산 O2O 업체 '네모'…출시 5개월만에 30만 앱 다운로드 돌파",
                link: "http://blog.naver.com/nemo_app/221334195899"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "상업용 부동산 O2O 앱 ‘네모’, 헬로비너스 모델 발탁",
                link: "http://blog.naver.com/nemo_app/221334194887"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "상가·오피스·인테리어 '그들만의 리그'에 뛰어든 부동산 O2O 업체",
                link: "http://blog.naver.com/nemo_app/221334194781"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "육군 정훈장교 복무 경력 스타트업 창업에 큰 역할",
                link: "http://blog.naver.com/nemo_app/221334194691"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "네모, 닥터하우즈와 사무실·상가 이전 ‘원스톱 케어 서비스’ MOU",
                link: "http://blog.naver.com/nemo_app/221334193875"
            },
            {
                noticeTag: noticeCategory.News,
                title: noticeTagName.News,
                infomationIndex: -1,
                content: "이용일 슈가힐 대표 “왜 상가 권리금은 투명하게 공개하지 않죠?”",
                link: "http://blog.naver.com/nemo_app/221334193762"
            },


            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "2019년 3월, 네모 캠페인 안내",
                link: "http://blog.naver.com/nemo_app/221479881154"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "직거래 매물 일반 광고 상품 소개",
                link: "http://blog.naver.com/nemo_app/221477133229"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "슈가힐 본사, 강남 사옥으로 확장 이전",
                link: "http://blog.naver.com/nemo_app/221455611551"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "2019년 1월, 네모 캠페인 안내",
                link: "http://blog.naver.com/nemo_app/221429331150"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 12월 신규 캠페인 소식",
                link: "http://blog.naver.com/nemo_app/221403956447"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 11월 신규 캠페인 소식",
                link: "http://blog.naver.com/nemo_app/221382744141"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모의 TV CF를 KEB하나은행에서 만나보세요",
                link: "http://blog.naver.com/nemo_app/221366316721"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 10월 신규 캠페인 소식",
                link: "http://blog.naver.com/nemo_app/221362175141"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모의 TV CF를 CGV에서 만나보세요",
                link: "http://blog.naver.com/nemo_app/221349966203"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 9월 신규 캠페인 소식",
                link: "http://blog.naver.com/nemo_app/221343255567"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 8월 신규 캠페인 소식",
                link: "http://blog.naver.com/nemo_app/221335618976"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 7월 신규 캠페인 소식",
                link: "http://blog.naver.com/nemo_app/221335618077"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 직거래 매물 등록 방법",
                link: "http://blog.naver.com/nemo_app/221334202717"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 6월 신규 캠페인 소식",
                link: "http://blog.naver.com/nemo_app/221334202606"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 5월 신규 캠페인 소식",
                link: "http://blog.naver.com/nemo_app/221334201712"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 신규 광고 활동으로, 프로야구 중계까지 나아갑니다.",
                link: "http://blog.naver.com/nemo_app/221334201132"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "[안내] 네모 X KEB하나은행 업무 제휴 캠페인",
                link: "http://blog.naver.com/nemo_app/221334200255"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 4월 신규 캠페인 소식",
                link: "http://blog.naver.com/nemo_app/221334200152"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 3월 신규 캠페인 소식",
                link: "http://blog.naver.com/nemo_app/221334199742"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 2월 신규 캠페인 소식",
                link: "http://blog.naver.com/nemo_app/221334199058"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 부산택시 차량 광고진행 안내",
                link: "http://blog.naver.com/nemo_app/221334198958"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 5678서울도시철도 스크린도어 광고 소식",
                link: "http://blog.naver.com/nemo_app/221334197979"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 1월 신규 캠페인 소식",
                link: "http://blog.naver.com/nemo_app/221334197884"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 지하철 차내광고 안내",
                link: "http://blog.naver.com/nemo_app/221334197415"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 12월 신규 캠페인 소식",
                link: "http://blog.naver.com/nemo_app/221334197002"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 11월 신규 캠페인 소식",
                link: "http://blog.naver.com/nemo_app/221334196754"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 가을야구 시즌 캠페인 소식 2탄",
                link: "http://blog.naver.com/nemo_app/221334196504"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 가을야구 시즌 캠페인 소식",
                link: "http://blog.naver.com/nemo_app/221334196281"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 10월 신규 캠페인 소식",
                link: "http://blog.naver.com/nemo_app/221334196036"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "네모 공인중개사 홍보물패키지 안내",
                link: "http://blog.naver.com/nemo_app/221334194188"
            },
            {
                noticeTag: noticeCategory.PublicRelations,
                title: noticeTagName.PublicRelations,
                infomationIndex: -1,
                content: "'네모' 마케팅 활동 소개",
                link: "http://blog.naver.com/nemo_app/221334193999"
            },





            {
                noticeTag: noticeCategory.ArticelInfo,
                title: noticeTagName.ArticelInfo,
                infomationIndex: 5,
                content: "대형 아파트 단지 내 위치! 금호역 상가",
                link: "http://blog.naver.com/nemo_app/221742608591"
            },
            {
                noticeTag: noticeCategory.ArticelInfo,
                title: noticeTagName.ArticelInfo,
                infomationIndex: -1,
                content: "1인 꽃집 창업 점포, 신사동 점포",
                link: "http://blog.naver.com/nemo_app/221742366724"
            },
            {
                noticeTag: noticeCategory.ArticelInfo,
                title: noticeTagName.ArticelInfo,
                infomationIndex: -1,
                content: "남부터미널 오피스 상권 이자카야 점포",
                link: "http://blog.naver.com/nemo_app/221738952900"
            },
            {
                noticeTag: noticeCategory.ArticelInfo,
                title: noticeTagName.ArticelInfo,
                infomationIndex: -1,
                content: "신사동 1층, 인테리어 카페 창업",
                link: "http://blog.naver.com/nemo_app/221735968783"
            },
            {
                noticeTag: noticeCategory.ArticelInfo,
                title: noticeTagName.ArticelInfo,
                infomationIndex: -1,
                content: "방이역 바로 앞, 프랜차이즈 카페 창업",
                link: "http://blog.naver.com/nemo_app/221735941907"
            },
            {
                noticeTag: noticeCategory.ArticelInfo,
                title: noticeTagName.ArticelInfo,
                infomationIndex: -1,
                content: "노량진 최대 규모, 노량진 체력 학원",
                link: "http://blog.naver.com/nemo_app/221728787142"
            },
            {
                noticeTag: noticeCategory.ArticelInfo,
                title: noticeTagName.ArticelInfo,
                infomationIndex: -1,
                content: "깔끔 1인 미용실 창업, 신논현역 점포",
                link: "http://blog.naver.com/nemo_app/221728737520"
            },
            {
                noticeTag: noticeCategory.ArticelInfo,
                title: noticeTagName.ArticelInfo,
                infomationIndex: -1,
                content: "주거 밀집 지역 네일샵 창업, 논현동 점포",
                link: "http://blog.naver.com/nemo_app/221728713396"
            },
            {
                noticeTag: noticeCategory.ArticelInfo,
                title: noticeTagName.ArticelInfo,
                infomationIndex: -1,
                content: "프랜차이즈 분식점 창업, 한남역 점포!",
                link: "http://blog.naver.com/nemo_app/221726799285"
            },
            {
                noticeTag: noticeCategory.ArticelInfo,
                title: noticeTagName.ArticelInfo,
                infomationIndex: -1,
                content: "각종 모임 파티룸 창업, 신논현역 점포에서!",
                link: "http://blog.naver.com/nemo_app/221726763053"
            },
            {
                noticeTag: noticeCategory.ArticelInfo,
                title: noticeTagName.ArticelInfo,
                infomationIndex: -1,
                content: "깔끔 주점 창업, 노량진 점포에서!",
                link: "http://blog.naver.com/nemo_app/221726744336"
            },
            {
                noticeTag: noticeCategory.ArticelInfo,
                title: noticeTagName.ArticelInfo,
                infomationIndex: -1,
                content: "남성역 반찬가게 창업, 여기가 딱이네~",
                link: "http://blog.naver.com/nemo_app/221726641535"
            }, //2019.12.04까지 입력됨


            {
                noticeTag: noticeCategory.Service,
                title: noticeTagName.Service,
                infomationIndex: 4,
                content: "네모 개인정보처리방침 및 이용약관(2020.02.14) 개정 안내",
                link: "http://blog.naver.com/nemo_app/221808579728"
            },
            {
                noticeTag: noticeCategory.Service,
                title: noticeTagName.Service,
                infomationIndex: -1,
                content: "네모 개인정보처리방침 및 이용약관(2019.06.12) 개정 안내",
                link: "http://blog.naver.com/nemo_app/221554175840"
            },
            {
                noticeTag: noticeCategory.Service,
                title: noticeTagName.Service,
                infomationIndex: -1,
                content: "네모 이용약관(2019.03.18) 개정 안내",
                link: "http://blog.naver.com/nemo_app/221483115036"
            },
            {
                noticeTag: noticeCategory.Service,
                title: noticeTagName.Service,
                infomationIndex: -1,
                content: "네모 개인정보처리방침(2019.03.18) 개정 안내",
                link: "http://blog.naver.com/nemo_app/221483114537"
            },
            {
                noticeTag: noticeCategory.Service,
                title: noticeTagName.Service,
                infomationIndex: -1,
                content: "네모 매물관리 규정(2019.01.21) 변경 안내",
                link: "http://blog.naver.com/nemo_app/221441805758"
            },
            {
                noticeTag: noticeCategory.Service,
                title: noticeTagName.Service,
                infomationIndex: -1,
                content: "네모 이용약관(2018.12.13) 변경 안내",
                link: "http://blog.naver.com/nemo_app/221411530998"
            },
            {
                noticeTag: noticeCategory.Service,
                title: noticeTagName.Service,
                infomationIndex: -1,
                content: "네모 매물관리 규정(2018.09.20) 변경 안내",
                link: "http://blog.naver.com/nemo_app/221361208694"
            },
            {
                noticeTag: noticeCategory.Service,
                title: noticeTagName.Service,
                infomationIndex: -1,
                content: "네모 이용약관(2018.09.20) 개정 안내",
                link: "http://blog.naver.com/nemo_app/221361208623"
            },
            {
                noticeTag: noticeCategory.Service,
                title: noticeTagName.Service,
                infomationIndex: -1,
                content: "네모 개인정보처리방침(2018.09.20) 개정 안내",
                link: "http://blog.naver.com/nemo_app/221361208546"
            },
            {
                noticeTag: noticeCategory.Service,
                title: noticeTagName.Service,
                infomationIndex: -1,
                content: "네모 개인정보취급방침(2018.01.23) 개정 사전안내",
                link: "http://blog.naver.com/nemo_app/221334198598"
            },
            {
                noticeTag: noticeCategory.Service,
                title: noticeTagName.Service,
                infomationIndex: -1,
                content: "네모 개인정보처리방침, 서비스 이용약관(2017.10.30) 개정 사전안내",
                link: "http://blog.naver.com/nemo_app/221334196587"
            },







            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: 2,
                content: "[네모x직방x다음 부동산] 매물 연동 서비스 안내",
                link: "http://ceo.nemoapp.kr/221757108553"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "보다 편하게 점포 매물 등록하는 방법",
                link: "http://ceo.nemoapp.kr/221705443390"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: 3,
                content: "신규 서비스 ‘점포거래’를 소개합니다",
                link: "http://ceo.nemoapp.kr/221694967910"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "역시 상가, 사무실, 창업할 때 '네모'입니다",
                link: "http://ceo.nemoapp.kr/221652083600"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: 6,
                content: "네모 대표이사 이용일“빅데이터로 합리적인 상권 정보 제공할 것”",
                link: "http://ceo.nemoapp.kr/221652083467"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "일과 일상을 네모에서 찾다. 네모 통합 APP 출시",
                link: "http://ceo.nemoapp.kr/221554187386"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "2019년 3월, 네모 캠페인 안내",
                link: "http://ceo.nemoapp.kr/221483414811"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "슈가힐 본사, 강남 사옥으로 확장 이전",
                link: "http://ceo.nemoapp.kr/221483414384"
            },
            {
                noticeTag: noticeCategory.Notice,
                title: noticeTagName.Notice,
                infomationIndex: -1,
                content: "2019년 1월, 네모 캠페인 안내",
                link: "http://ceo.nemoapp.kr/221483412543"
            },
        ];

        return options;
    }

    getnoticeCategory(): noticeCategory {
        let tag: noticeCategory = 0;

        switch (this.props.webAgentJoinRenderType) {
            case WebAgentJoinRenderType.Information:
                tag = noticeCategory.Information;
                break;
            case WebAgentJoinRenderType.Notice:
                tag = noticeCategory.All;
                break;
            default:
                tag = noticeCategory.All;
        };
        return tag;
    }

    handleNoticeTag(notice: noticeCategory): void {
        this.state.noticeListMore = false;
        this.state.notice = notice;
        this.setState(this.state);
    }

    handleListMore(e: Event): void {
        this.state.noticeListMore = true;
        this.setState(this.state);
    }

    renderNoticeList(): JSX.Element {
        let options: Array<IWebSupportNoticeContent> = [];
        if (this.state.notice === noticeCategory.Information) {
            //Information
            options = _.sortBy(_.filter(this.getNoticeContents(), (o) => {
                return o.infomationIndex > 0;
            }), "infomationIndex");
        } else if (this.state.notice > noticeCategory.All) {
            //faqTagType
            options = _.filter(this.getNoticeContents(), (c) => {
                return c.noticeTag === this.state.notice;
            });
        } else {
            //all
            options = this.getNoticeContents();
        }

        return (
            <ul className="list_news">
                {_.map(options, (o, i: number) => {
                    return (
                        <li key={i}>
                            <a href={o.link} target="_blank">
                                <em className="title">{o.title}</em>
                                <strong className="content">{o.content}</strong>
                                <span className="btn_more">자세히 보기</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        );
    }

    renderAllNoticeList(): JSX.Element {
        return (
            <div className="customer inner">
                <div className="h2_area">
                    <h2 className="h2_title">공지사항</h2>
                </div>
                <div className="support_menu">
                    <ul className="support_menu_list">
                        <li data-tag={noticeCategory.All} className={`tag_name ${this.state.notice === noticeCategory.All ? "on" : ""}`} onClick={this.handleNoticeTag.bind(this, noticeCategory.All)}>
                            <span>{noticeTagName.All}</span>
                        </li>
                        <li data-tag={noticeCategory.Notice} className={`tag_name ${this.state.notice === noticeCategory.Notice ? "on" : ""}`} onClick={this.handleNoticeTag.bind(this, noticeCategory.Notice)}>
                            <span>{noticeTagName.Notice}</span>
                        </li>
                        <li data-tag={noticeCategory.News} className={`tag_name ${this.state.notice === noticeCategory.News ? "on" : ""}`} onClick={this.handleNoticeTag.bind(this, noticeCategory.News)}>
                            <span>{noticeTagName.News}</span>
                        </li>
                        <li data-tag={noticeCategory.PublicRelations} className={`tag_name ${this.state.notice === noticeCategory.PublicRelations ? "on" : ""}`} onClick={this.handleNoticeTag.bind(this, noticeCategory.PublicRelations)}>
                            <span>{noticeTagName.PublicRelations}</span>
                        </li>
                        <li data-tag={noticeCategory.ArticelInfo} className={`tag_name ${this.state.notice === noticeCategory.ArticelInfo ? "on" : ""}`} onClick={this.handleNoticeTag.bind(this, noticeCategory.ArticelInfo)}>
                            <span>{noticeTagName.ArticelInfo}</span>
                        </li>
                        <li data-tag={noticeCategory.Service} className={`tag_name ${this.state.notice === noticeCategory.Service ? "on" : ""}`} onClick={this.handleNoticeTag.bind(this, noticeCategory.Service)}>
                            <span>{noticeTagName.Service}</span>
                        </li>
                    </ul>
                </div>
                <div className={`notice_content ${this.state.noticeListMore? "on" : ""}`}>
                    {this.renderNoticeList()}
                    <div className="btn_center">
                        <button type="button" className="btn_red_border" onClick={this.handleListMore.bind(this)}>더보기</button>
                    </div>
                </div>
            </div>
        );
    }

    render(): JSX.Element {
        return <div>
            {this.props.webAgentJoinRenderType === WebAgentJoinRenderType.Information && this.renderNoticeList()}
            {this.props.webAgentJoinRenderType === WebAgentJoinRenderType.Notice && this.renderAllNoticeList()}
        </div>;
    }
}