/// <reference path="../../../../sugarhill.officesquare.web/scripts/index.tsx" />
/// <reference path="../../components/index.tsx" />

interface IWebAgentJoinInformationProps {
}

interface IWebAgentJoinInformationState {
}

class WebAgentJoinInformation extends React.Component<IWebAgentJoinInformationProps, IWebAgentJoinInformationState> {
    constructor(props: IWebAgentJoinInformationProps) {
        super(props);
    }

    private adSwiper: any;

    componentDidMount(): void {
        const adTitleListLi = document.querySelectorAll(".menu_product li");
        this.adSwiper = new Swiper("#ad-photo-swiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        });
        this.adSwiper.slideTo(0);

        this.adSwiper.on("slideChange", () => {
            _.map(adTitleListLi, (e) => {
                if (e.getAttribute("data-index") == this.adSwiper.realIndex) {
                    e.className = "on";
                } else {
                    e.className = "";
                }             
            });
        });
    }

    handleClickMenu(index: number, e: Event): void {
        if (this.adSwiper) {
            this.adSwiper.slideTo(index);
        }
    }

    getAdTitle(index): string {
        const titleListString = ["기본 상품", "포커스 상품", "프리미엄 상품", "지역추천 중개업소", "프리미엄 중개업소"];

        return titleListString[index];
    }

    render(): JSX.Element {
        return (
            <div className="information">
                <div className="top_content">
                    <div className="inner">
                        <h2 className="h2_title">네모를 통해 <br />상업용 부동산의 <br />가치를 올리세요</h2>
                        <p className="h2_dsc">2백만 사용자들의 모든 창업순간,<br />당신의 부동산을 더 가치있게 전달하세요.</p>
                        <a href="/ArticleItem" className="btn_red">네모 광고상품 보기</a>
                        <div className="infor_area">
                            <a href="tel:1599-4385" className="link_tel">1599-4385*</a>
                            <p className="time">월~금 9:30~18:00</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="content1">
                        <h3 className="h3_title"><span className="point">상업용 부동산 1등,</span> 네모<br />이렇게 많은 분들이 이용하고 있습니다</h3>
                        <p className="h3_dsc">네모의 영향력을 활용하세요.</p>
                        <div className="content_area">
                            <div className="thumb_area">
                                <div className="thumb">

                                </div>
                                <p className="thumb_text">2019년 11월 기준</p>
                            </div>
                            <div className="dsc_area">
                                <ul className="infor_downod">
                                    <li>
                                        <span className="title">앱 다운로드 수</span>
                                        <em className="text"><span className="number">200만</span> 건+</em>
                                    </li>
                                    <li>
                                        <span className="title">월간 매물 조회수</span>
                                        <em className="text"><span className="number">340만</span> 건+</em>
                                    </li>
                                    <li>
                                        <span className="title">월간 순방문자 수</span>
                                        <em className="text"><span className="number">200만</span> 명+</em>
                                    </li>
                                    <li>
                                        <span className="title">네모 누적 매물수</span>
                                        <em className="text"><span className="number">24만</span> 건+</em>
                                    </li>
                                </ul>
                                <ul className="infor_crown">
                                    <li>2019<br /> 구글 플레이스토어<br /> 올해의 앱</li>
                                    <li>2019<br /> 구글 플레이스토어<br /> 올해의 앱</li>
                                    <li>2019<br /> 구글 플레이스토어<br /> 올해의 앱</li>
                                    <li>2019<br /> 구글 플레이스토어<br /> 올해의 앱</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                        <div className="content2">
                            <h3 className="h3_title"><span className="point">내 매물에 맞는 광고</span>를 선택해보세요</h3>
                            <ul className="menu_product">
                                {_.map([1, 2, 3, 4, 5], (value, index) => {
                                    return <li key={index} data-index={index} className={(0 === index ? " on" : "")} onClick={this.handleClickMenu.bind(this, index)}>{this.getAdTitle(index)}</li>;
                                })}
                            </ul>
                            <div className="product_content">
                                <div id="ad-photo-swiper" className="swiper-container">
                                    <div className="swiper-wrapper">
                                        {_.map([1, 2, 3, 4, 5], (value, index) => {
                                            return <CommonSwiperSlide key={index}>
                                                <div className="img"></div>
                                            </CommonSwiperSlide>;
                                        })}
                                    </div>
                                    <div className="swiper-button-next"></div>
                                    <div className="swiper-button-prev"></div>
                                </div>
                            </div>
                        <div className="btn_center">
                            <a href="/ArticleItem" className="btn_red_border">네모 광고상품 보기</a>
                        </div>
                    </div>

                    <div className="content3">
                        <h3 className="h3_title">네모의 <span className="point">중개사님 지원</span></h3>
                        <p className="h3_dsc">네모의 다양한 혜택을 확인하세요.</p>
                        <ul className="benefit_list">
                            <li>
                                <div className="img"></div>
                                <strong className="title">웰컴킷 증정</strong>
                                <p className="dsc">결제 금액에 따라 중개사님의 업소명을 넣은 X배너와 포스터,계약서 보관 파일, 현판 등 다양한 사은품을 지원합니다.</p>
                            </li>
                            <li>
                                <div className="img"></div>
                                <strong className="title">정기결제 할인</strong>
                                <p className="dsc">결제 금액에 따라 중개사님의 업소명을 넣은 X배너와 포스터,계약서 보관 파일, 현판 등 다양한 사은품을 지원합니다.</p>
                            </li>
                            <li>
                                <div className="img"></div>
                                <strong className="title">실시간 채팅</strong>
                                <p className="dsc">결제 금액에 따라 중개사님의 업소명을 넣은 X배너와 포스터,계약서 보관 파일, 현판 등 다양한 사은품을 지원합니다.</p>
                            </li>
                            <li>
                                <div className="img"></div>
                                <strong className="title">전문 상담원</strong>
                                <p className="dsc">결제 금액에 따라 중개사님의 업소명을 넣은 X배너와 포스터,계약서 보관 파일, 현판 등 다양한 사은품을 지원합니다.</p>
                            </li>
                            <li>
                                <div className="img"></div>
                                <strong className="title">App & PC 동시노출</strong>
                                <p className="dsc">결제 금액에 따라 중개사님의 업소명을 넣은 X배너와 포스터,계약서 보관 파일, 현판 등 다양한 사은품을 지원합니다.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="content4">
                        <h3 className="h3_title">여러분 곁에 언제나 <span className="point">네모가 함께합니다</span></h3>
                        <p className="h3_dsc">TV∙대중교통∙인터넷 등 다양한 채널을 통해 네모를 만날 수 있습니다.</p>
                        <div className="tvcf_img_area">
                            <div className="tvcf_img1"><span className="text">지하철 광고</span></div>
                            <div className="tvcf_img2"><span className="text">택시 랩핑 광고</span></div>
                            <div className="tvcf_img3"><span className="text">버스 랩핑 광고</span></div>
                            <div className="tvcf_img4"><span className="text">TV 광고</span></div>
                        </div>
                        <div className="btn_center">
                            <a href="http://blog.naver.com/nemo_app/221342591401?proxyReferer=" target="_blank" className="btn_red_border btn_link">네모 TV 광고 보기</a>
                        </div>
                    </div>
                    <div className="content5">
                        <h3 className="h3_title"><span className="point">새로운 소식</span></h3>
                        <div className="notice_content">
                            <WebSupportNotice webAgentJoinRenderType={WebAgentJoinRenderType.Information} /> 
                        </div>
                        <div className="btn_center">
                            <a href="/Support/Notice" className="btn_red_border">전체보기</a>
                        </div>
                    </div>
                    <div className="content6">
                        <h3 className="h3_title">중개사님이 <span className="point">자주 묻는 질문</span></h3>
                        <WebSupportFaq webAgentJoinRenderType={WebAgentJoinRenderType.Information} />
                        <div className="btn_center">
                            <a href="/Support/Notice" className="btn_red_border">전체보기</a>
                        </div>
                    </div>
                    <div className="content7">
                        <h3 className="h3_title">네모는 <span className="point">최고의 패밀리</span>들과 함께 합니다</h3>
                        <p className="h3_dsc">부동산 서비스의 새로운 세상을 만나보세요.</p>
                        <ul className="family_link">
                            <li className="zigbang"><a href="https://www.zigbang.com/" target="_blank"><span className="blind">직방</span></a></li>
                            <li className="hogang"><a href="https://hogangnono.com/" target="_blank"><span className="blind">호갱노노</span></a></li>
                            <li className="nemo"><a href="https://www.nemoapp.kr/" target="_blank"><span className="blind">네모</span></a></li>
                            <li className="woozoo"><a href="https://www.woozoo.kr/" target="_blank"><span className="blind">WOOZOO</span></a></li>
                            <li className="daum"><a href="https://realty.daum.net/home/store/map" target="_blank"><span className="blind">Daum</span></a></li>
                        </ul>
                    </div>
                </div>
        </div>);
    }
}