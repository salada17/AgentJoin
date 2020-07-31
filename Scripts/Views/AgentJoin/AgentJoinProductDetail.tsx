/// <reference path="../../../../sugarhill.officesquare.web/scripts/index.tsx" />
/// <reference path="../../components/index.tsx" />

interface IWebAgentJoinProductDetailProps {
    requestPath: string;
    currentHash: string;
}

interface IWebAgentJoinProductDetailState {
    currentHash: string;
    isSubMenuOPen: boolean;
    isShowPriceSearch: boolean;
}

class WebAgentJoinProductDetail extends React.Component<IWebAgentJoinProductDetailProps, IWebAgentJoinProductDetailState> {
    constructor(props: IWebAgentJoinProductDetailProps) {
        super(props);
        this.state = {
            currentHash: this.props.currentHash,
            isSubMenuOPen: false,
            isShowPriceSearch: false
        };
    }

    getSubTitle(hash: string): string {
        let title: string = "";
        switch (hash) {
            case "#tab1__agentSign":
                title = "기본 상품";
                break;
            case "#tab2__agentSign":
                title = "포커스상품";
                break;
            case "#tab3__agentSign":
                title = "프리미엄 상품";
                break;
            case "#tab4__agentSign":
                title = "지역추천 중개업소";
                break;
            case "#tab5__agentSign":
                title = "프리미엄 중개업소";
                break;
            default:
                title = "기본 상품";
                break;
        }
        return title;
    }

    componentWillReceiveProps(nextProps: IWebAgentJoinProductDetailProps): void {
        let updateState = false;
        if (nextProps.currentHash !== this.props.currentHash) {
            this.state.currentHash = nextProps.currentHash;
            updateState = true;
        }

        if (updateState) {
            this.setState(this.state);
        }
    }

    handleGnb(hash: string, e: Event): void {
        this.state.currentHash = hash;
        this.state.isSubMenuOPen = false;
        this.setState(this.state);
    }

    toggleSubMenu(): void {
        this.state.isSubMenuOPen = !this.state.isSubMenuOPen;
        this.setState(this.state);
    }
    
    renderToggleMenu(): JSX.Element {
        const isProductMain = this.props.requestPath.indexOf("/ArticleItem") != -1;
        const isProductDetail1 = isProductMain && this.state.currentHash === "#tab1__agentSign";
        const isProductDetail2 = isProductMain && this.state.currentHash === "#tab2__agentSign";
        const isProductDetail3 = isProductMain && this.state.currentHash === "#tab3__agentSign";
        const isProductDetail4 = isProductMain && this.state.currentHash === "#tab4__agentSign";
        const isProductDetail5 = isProductMain && this.state.currentHash === "#tab5__agentSign";

        return <div className={`product_top_menu ${this.state.isSubMenuOPen ? "on" : ""}`}>
            <h3 className="h3_title" onClick={this.toggleSubMenu.bind(this)}>{this.getSubTitle(this.state.currentHash)}</h3>
            <div className="ly_menu">
                <ul>
                    <li className={isProductDetail1 && "on"}><a href="/ArticleItem/Detail#tab1__agentSign" onClick={this.handleGnb.bind(this, "#tab1__agentSign")}>기본상품</a></li>
                    <li className={isProductDetail2 && "on"}><a href="/ArticleItem/Detail#tab2__agentSign" onClick={this.handleGnb.bind(this, "#tab2__agentSign")}>포커스 상품</a></li>
                    <li className={isProductDetail3 && "on"}><a href="/ArticleItem/Detail#tab3__agentSign" onClick={this.handleGnb.bind(this, "#tab3__agentSign")}>프리미엄 상품</a></li>
                    <li className={isProductDetail4 && "on"}><a href="/ArticleItem/Detail#tab4__agentSign" onClick={this.handleGnb.bind(this, "#tab4__agentSign")}>지역추천 중개업소</a></li>
                    <li className={isProductDetail5 && "on"}><a href="/ArticleItem/Detail#tab5__agentSign" onClick={this.handleGnb.bind(this, "#tab5__agentSign")}>프리미엄 중개업소</a></li>
                </ul>
            </div>
        </div>;
    }

    renderCustomerPopup(): JSX.Element {
        return (
            <div className="popup_wrap customer">
                <div className="popup_container">
                    <div className="popup">
                        <div className="content">
                            <em className="title">네모 안심 고객센터</em>
                            <strong className="dsc">1599-4385</strong>
                            <p className="dsc">(월~금 9:30~18:00)</p>
                            <p className="info_text">무엇을 도와드릴까요? <br />전문 상담사가 대기중입니다.</p>
                        </div>
                        <button type="button" className="btn_close"><span className="blind">팝업창 닫기</span></button>
                    </div>
                </div>
            </div>
        );
    }

    renderContentBasic(): JSX.Element {
        return <div className="content basic">
            <div className="content1">
                <div className="inner">
                    <div className="img"></div>
                    <div className="text_box">
                        {this.renderToggleMenu()}
                        <p className="h3_dsc">수 백만 사용자들의 첫 게이트웨이, <br />임팩트 있는 브랜딩 효과를 가져다 줍니다.</p>
                        <a href="/ArticleItem/Search" className="btn_red">가격보기</a>
                        <p className="price"><span className="color_fe2c54">최저 ₩99,000 / 월 부터</span> &middot; 부가세 포함</p>
                        <p className="s_dsc">반복 결제 &middot; 언제든지 취소 가능</p>
                    </div>
                </div>
            </div>
            <div className="content2">
                <div className="inner">
                    <h3 className="h3_title"><span className="point">합리적인 비용</span>으로 많은 고객을 만나보세요</h3>
                    <p className="h3_dsc">기본상품만의 다양한 광고 혜택을 만나보세요.</p>
                    <ul className="benefit_list">
                        <li>
                            <div className="img"></div>
                            <strong className="title">광고를 상시 노출 시키세요</strong>
                            <p className="dsc">네모에서 광고할 수 있는 기본 상품으로 <br />매물을 등록해 고객에게 상시 노출합니다.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">언제든지 매물 변경을 변경하세요</strong>
                            <p className="dsc">쿠폰제가 아닌 슬롯제로 원하는 매물로<br />교체가 가능합니다.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">PC · WEB 동시노출 하세요 </strong>
                            <p className="dsc">더 많은 고객들을 만나고 싶다면 <br />안심, 프리미엄 상품을 활용해 광고효과를 높이세요.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">누적 복리 효과를 누리세요</strong>
                            <p className="dsc">네모에서 광고할 수 있는 기본 상품으로<br />매물을 등록해 고객에게 상시 노출합니다.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">매니저와 실시간 채팅 하세요</strong>
                            <p className="dsc">네모에서 광고할 수 있는 기본 상품으로<br />매물을 등록해 고객에게 상시 노출합니다.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">상품을 업그레이드 하세요</strong>
                            <p className="dsc">네모에서 광고할 수 있는 기본 상품으로 <br />매물을 등록해 고객에게 상시 노출합니다.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content3">
                <div className="inner">
                    <h3 className="h3_title">
                        <div className="img_logos">네모 x 직방 x 다음부동산</div>
                        <span className="point">동시노출 추가 혜택</span> 실시!
                    </h3>
                    <p className="h3_dsc">네모가 요청한 정보로 매물을 등록하시면 네모, 직방, 다음부동산에 무료로 함께 동시 노출됩니다.</p>
                    <ul className="sametime_list">
                        <li className="photo">
                            <strong className="title">사진을 5장 이상 올려주세요</strong>
                            <p className="dsc">많은 매물을 광고할수록 노출량이 증가해 <br />더 큰 광고 혜택을 누릴 수 있습니다.</p>
                        </li>
                        <li className="position">
                            <strong className="title">위치 정보를 공개해 주세요</strong>
                            <p className="dsc">많은 매물을 광고할수록 노출량이 증가해<br />더 큰 광고 혜택을 누릴 수 있습니다.</p>
                        </li>
                        <li className="information">
                            <strong className="title">권리금 정보를 올려주세요</strong>
                            <p className="dsc">많은 매물을 광고할수록 노출량이 증가해<br /> 더 큰 광고 혜택을 누릴 수 있습니다.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content4">
                <div className="inner">
                    <div className="img_list nemo">
                        <div className="list_img"></div>
                        <div className="text_box">
                            <em className="logo"></em>
                            <strong className="title">네모 광고</strong>
                            <p className="dsc">매물을 10개 단위로 등록할 수 있는 <br />네모의 기본 광고상품입니다. </p>
                        </div>
                        <div className="map_img"></div>
                    </div>
                    <div className="img_list zigbang">
                        <div className="list_img"></div>
                        <div className="text_box">
                            <em className="logo"></em>
                            <strong className="title">직방 광고</strong>
                            <p className="dsc">네모가 요청한 조건의 매물 정보로<br />등록하시면 직방 모바일앱 <br />상단에 함께 노출됩니다.</p>
                        </div>
                        <div className="map_img"></div>
                    </div>
                    <div className="img_list daum">
                        <div className="list_img"></div>
                        <div className="text_box">
                            <em className="logo"></em>
                            <strong className="title">다음 부동산 광고</strong>
                            <p className="dsc">네모가 요청한 조건의 매물 정보로<br />등록하시면 다음 부동산 앱 <br />상단에 함께 노출됩니다.</p>
                        </div>
                        <div className="map_img"></div>
                    </div>
                </div>
            </div>
            <div className="content5">
                <div className="inner">
                    <h3 className="h3_title"><span className="point">네모 플랜</span> 가격표</h3>
                    <p className="h3_dsc">고객님이 원하는 지역의 광고 예상 가격을 확인해 보세요.</p>
                    <ul className="price_list">
                        <li className="office">
                            <div className="top">
                                <em className="name">사무실 플랜</em>
                                <strong className="price">&#8361; 99,000원 ~</strong>
                                <p className="description">/ 월, 부가세 포함</p>
                            </div>
                            <div className="bottom">
                                <p className="product">기본상품 10건</p>
                                <p className="product">안심 2건</p>
                                <a href="/ArticleItem/Search" className="btn_price">가격보기</a>
                            </div>
                        </li>
                        <li className="store">
                            <div className="top">
                                <em className="name">상가 플랜</em>
                                <strong className="price">&#8361; 99,000원 ~</strong>
                                <p className="description">/ 월, 부가세 포함</p>
                            </div>
                            <div className="bottom">
                                <p className="product">기본상품 10건</p>
                                <p className="product">안심 2건</p>
                                <a href="/ArticleItem/Search" className="btn_price">가격보기</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content6">
                <div className="inner">
                    <h3 className="h3_title"><span className="point">정기결제</span> 혜택</h3>
                    <p className="h3_dsc">TV∙대중교통∙인터넷 등 다양한 채널을 통해 네모를 만날 수 있습니다</p>
                    <ul className="routine_list">
                        <li>
                            <div className="sale"><span className="text">30%</span></div>
                            <p className="dsc">신규 구매 시</p>
                        </li>
                        <li>
                            <div className="sale"><span className="text">20%</span></div>
                            <p className="dsc">1개월 내 연장 시</p>
                        </li>
                        <li>
                            <div className="sale"><span className="text">5%</span></div>
                            <p className="dsc">3개월 구매 시</p>
                        </li>
                        <li>
                            <div className="sale"><span className="text">10%</span></div>
                            <p className="dsc">6개월 구매 시</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content7">
                <div className="inner">
                    <h3 className="h3_title">중개사님이 <span className="point">자주 묻는 질문</span></h3>
                    <div className="faq_content">
                        <WebSupportFaq webAgentJoinRenderType={WebAgentJoinRenderType.ProductDetailBasic} />
                        <div className="btn_center">
                            <button type="button" className="btn_red_border">더보기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }

    renderContentFocus(): JSX.Element {
        return <div className="content focus">
            <div className="content1">
                <div className="inner">
                    <div className="img"></div>
                    <div className="text_box">
                        {this.renderToggleMenu()}
                        <p className="h3_dsc">수 백만 사용자들의 첫 게이트웨이, <br />임팩트 있는 브랜딩 효과를 가져다 줍니다.</p>
                        <a href="/ArticleItem/Search" className="btn_red">가격보기</a>
                        <p className="price"><span className="color_fe2c54">최저 ₩99,000 / 월 부터</span> &middot; 부가세 포함</p>
                        <p className="s_dsc">반복 결제 &middot; 언제든지 취소 가능</p>
                    </div>
                </div>
            </div>
            <div className="content2">
                <div className="inner">
                    <h3 className="h3_title"><span className="point">합리적인 비용</span>으로 많은 고객을 만나보세요</h3>
                    <p className="h3_dsc">기본상품만의 다양한 광고 혜택을 만나보세요.</p>
                    <ul className="benefit_list">
                        <li>
                            <div className="img"></div>
                            <strong className="title">광고를 상시 노출 시키세요</strong>
                            <p className="dsc">네모에서 광고할 수 있는 기본 상품으로 <br />매물을 등록해 고객에게 상시 노출합니다.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">언제든지 매물 변경을 변경하세요</strong>
                            <p className="dsc">쿠폰제가 아닌 슬롯제로 원하는 매물로<br />교체가 가능합니다.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">PC · WEB 동시노출 하세요 </strong>
                            <p className="dsc">더 많은 고객들을 만나고 싶다면 <br />안심, 프리미엄 상품을 활용해 광고효과를 높이세요.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">누적 복리 효과를 누리세요</strong>
                            <p className="dsc">네모에서 광고할 수 있는 기본 상품으로<br />매물을 등록해 고객에게 상시 노출합니다.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">매니저와 실시간 채팅 하세요</strong>
                            <p className="dsc">네모에서 광고할 수 있는 기본 상품으로<br />매물을 등록해 고객에게 상시 노출합니다.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">상품을 업그레이드 하세요</strong>
                            <p className="dsc">네모에서 광고할 수 있는 기본 상품으로 <br />매물을 등록해 고객에게 상시 노출합니다.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content3">
                <div className="inner">
                    <h3 className="h3_title">
                        <div className="img_logos">네모 x 직방 x 다음부동산</div>
                        <span className="point">동시노출 추가 혜택</span> 실시!
                    </h3>
                    <p className="h3_dsc">네모가 요청한 정보로 매물을 등록하시면 네모, 직방, 다음부동산에 무료로 함께 동시 노출됩니다.</p>
                    <ul className="sametime_list">
                        <li className="photo">
                            <strong className="title">사진을 5장 이상 올려주세요</strong>
                            <p className="dsc">많은 매물을 광고할수록 노출량이 증가해 <br />더 큰 광고 혜택을 누릴 수 있습니다.</p>
                        </li>
                        <li className="position">
                            <strong className="title">위치 정보를 공개해 주세요</strong>
                            <p className="dsc">많은 매물을 광고할수록 노출량이 증가해<br />더 큰 광고 혜택을 누릴 수 있습니다.</p>
                        </li>
                        <li className="information">
                            <strong className="title">권리금 정보를 올려주세요</strong>
                            <p className="dsc">많은 매물을 광고할수록 노출량이 증가해<br /> 더 큰 광고 혜택을 누릴 수 있습니다.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content4">
                <div className="inner">
                    <div className="img_list nemo">
                        <div className="list_img"></div>
                        <div className="text_box">
                            <em className="logo"></em>
                            <strong className="title">네모 광고</strong>
                            <p className="dsc">매물을 10개 단위로 등록할 수 있는 <br />네모의 기본 광고상품입니다. </p>
                        </div>
                        <div className="map_img"></div>
                    </div>
                    <div className="img_list zigbang">
                        <div className="list_img"></div>
                        <div className="text_box">
                            <em className="logo"></em>
                            <strong className="title">직방 광고</strong>
                            <p className="dsc">네모가 요청한 조건의 매물 정보로<br />등록하시면 직방 모바일앱 <br />상단에 함께 노출됩니다.</p>
                        </div>
                        <div className="map_img"></div>
                    </div>
                    <div className="img_list daum">
                        <div className="list_img"></div>
                        <div className="text_box">
                            <em className="logo"></em>
                            <strong className="title">다음 부동산 광고</strong>
                            <p className="dsc">네모가 요청한 조건의 매물 정보로<br />등록하시면 다음 부동산 앱 <br />상단에 함께 노출됩니다.</p>
                        </div>
                        <div className="map_img"></div>
                    </div>
                </div>
            </div>
            <div className="content5">
                <div className="inner">
                    <h3 className="h3_title"><span className="point">네모 플랜</span> 가격표</h3>
                    <p className="h3_dsc">고객님이 원하는 지역의 광고 예상 가격을 확인해 보세요.</p>
                    <ul className="price_list">
                        <li className="office">
                            <div className="top">
                                <em className="name">사무실 플랜</em>
                                <strong className="price">&#8361; 99,000원 ~</strong>
                                <p className="description">/ 월, 부가세 포함</p>
                            </div>
                            <div className="bottom">
                                <p className="product">기본상품 10건</p>
                                <p className="product">안심 2건</p>
                                <a href="/ArticleItem/Search" className="btn_price">가격보기</a>
                            </div>
                        </li>
                        <li className="store">
                            <div className="top">
                                <em className="name">상가 플랜</em>
                                <strong className="price">&#8361; 99,000원 ~</strong>
                                <p className="description">/ 월, 부가세 포함</p>
                            </div>
                            <div className="bottom">
                                <p className="product">기본상품 10건</p>
                                <p className="product">안심 2건</p>
                                <a href="/ArticleItem/Search" className="btn_price">가격보기</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content6">
                <div className="inner">
                    <h3 className="h3_title"><span className="point">정기결제</span> 혜택</h3>
                    <p className="h3_dsc">TV∙대중교통∙인터넷 등 다양한 채널을 통해 네모를 만날 수 있습니다</p>
                    <ul className="routine_list">
                        <li>
                            <div className="sale"><span className="text">30%</span></div>
                            <p className="dsc">신규 구매 시</p>
                        </li>
                        <li>
                            <div className="sale"><span className="text">20%</span></div>
                            <p className="dsc">1개월 내 연장 시</p>
                        </li>
                        <li>
                            <div className="sale"><span className="text">5%</span></div>
                            <p className="dsc">3개월 구매 시</p>
                        </li>
                        <li>
                            <div className="sale"><span className="text">10%</span></div>
                            <p className="dsc">6개월 구매 시</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content7">
                <div className="inner">
                    <h3 className="h3_title">중개사님이 <span className="point">자주 묻는 질문</span></h3>
                    <div className="faq_content">
                        <WebSupportFaq webAgentJoinRenderType={WebAgentJoinRenderType.ProductDetailFocus} />
                        <div className="btn_center">
                            <button type="button" className="btn_red_border">더보기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }

    renderContentPremium(): JSX.Element {
        return <div className="content premium">
            <div className="content1">
                <div className="inner">
                    <div className="img"></div>
                    <div className="text_box">
                        {this.renderToggleMenu()}
                        <p className="h3_dsc">수 백만 사용자들의 첫 게이트웨이, <br />임팩트 있는 브랜딩 효과를 가져다 줍니다.</p>
                        <a href="/ArticleItem/Search" className="btn_red">가격보기</a>
                        <p className="price"><span className="color_fe2c54">최저 ₩99,000 / 월 부터</span> &middot; 부가세 포함</p>
                        <p className="s_dsc">반복 결제 &middot; 언제든지 취소 가능</p>
                    </div>
                </div>
            </div>
            <div className="content2">
                <div className="inner">
                    <h3 className="h3_title"><span className="point">합리적인 비용</span>으로 많은 고객을 만나보세요</h3>
                    <p className="h3_dsc">기본상품만의 다양한 광고 혜택을 만나보세요.</p>
                    <ul className="benefit_list">
                        <li>
                            <div className="img"></div>
                            <strong className="title">광고를 상시 노출 시키세요</strong>
                            <p className="dsc">네모에서 광고할 수 있는 기본 상품으로 <br />매물을 등록해 고객에게 상시 노출합니다.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">언제든지 매물 변경을 변경하세요</strong>
                            <p className="dsc">쿠폰제가 아닌 슬롯제로 원하는 매물로<br />교체가 가능합니다.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">PC · WEB 동시노출 하세요 </strong>
                            <p className="dsc">더 많은 고객들을 만나고 싶다면 <br />안심, 프리미엄 상품을 활용해 광고효과를 높이세요.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">누적 복리 효과를 누리세요</strong>
                            <p className="dsc">네모에서 광고할 수 있는 기본 상품으로<br />매물을 등록해 고객에게 상시 노출합니다.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">매니저와 실시간 채팅 하세요</strong>
                            <p className="dsc">네모에서 광고할 수 있는 기본 상품으로<br />매물을 등록해 고객에게 상시 노출합니다.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">상품을 업그레이드 하세요</strong>
                            <p className="dsc">네모에서 광고할 수 있는 기본 상품으로 <br />매물을 등록해 고객에게 상시 노출합니다.</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="content3">
                <div className="inner">
                    <h3 className="h3_title">
                        <div className="img_logos">네모 x 직방 x 다음부동산</div>
                        <span className="point">동시노출 추가 혜택</span> 실시!
                    </h3>
                    <p className="h3_dsc">네모가 요청한 정보로 매물을 등록하시면 네모, 직방, 다음부동산에 무료로 함께 동시 노출됩니다.</p>
                    <ul className="sametime_list">
                        <li className="photo">
                            <strong className="title">사진을 5장 이상 올려주세요</strong>
                            <p className="dsc">많은 매물을 광고할수록 노출량이 증가해 <br />더 큰 광고 혜택을 누릴 수 있습니다.</p>
                        </li>
                        <li className="position">
                            <strong className="title">위치 정보를 공개해 주세요</strong>
                            <p className="dsc">많은 매물을 광고할수록 노출량이 증가해<br />더 큰 광고 혜택을 누릴 수 있습니다.</p>
                        </li>
                        <li className="information">
                            <strong className="title">권리금 정보를 올려주세요</strong>
                            <p className="dsc">많은 매물을 광고할수록 노출량이 증가해<br /> 더 큰 광고 혜택을 누릴 수 있습니다.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content4">
                <div className="inner">
                    <div className="img_list nemo">
                        <div className="list_img"></div>
                        <div className="text_box">
                            <em className="logo"></em>
                            <strong className="title">네모 광고</strong>
                            <p className="dsc">매물을 10개 단위로 등록할 수 있는 <br />네모의 기본 광고상품입니다. </p>
                        </div>
                        <div className="map_img"></div>
                    </div>
                    <div className="img_list zigbang">
                        <div className="list_img"></div>
                        <div className="text_box">
                            <em className="logo"></em>
                            <strong className="title">직방 광고</strong>
                            <p className="dsc">네모가 요청한 조건의 매물 정보로<br />등록하시면 직방 모바일앱 <br />상단에 함께 노출됩니다.</p>
                        </div>
                        <div className="map_img"></div>
                    </div>
                    <div className="img_list daum">
                        <div className="list_img"></div>
                        <div className="text_box">
                            <em className="logo"></em>
                            <strong className="title">다음 부동산 광고</strong>
                            <p className="dsc">네모가 요청한 조건의 매물 정보로<br />등록하시면 다음 부동산 앱 <br />상단에 함께 노출됩니다.</p>
                        </div>
                        <div className="map_img"></div>
                    </div>
                </div>
            </div>
            <div className="content5">
                <div className="inner">
                    <h3 className="h3_title"><span className="point">네모 플랜</span> 가격표</h3>
                    <p className="h3_dsc">고객님이 원하는 지역의 광고 예상 가격을 확인해 보세요.</p>
                    <ul className="price_list">
                        <li className="office">
                            <div className="top">
                                <em className="name">사무실 플랜</em>
                                <strong className="price">&#8361; 99,000원 ~</strong>
                                <p className="description">/ 월, 부가세 포함</p>
                            </div>
                            <div className="bottom">
                                <p className="product">기본상품 10건</p>
                                <p className="product">안심 2건</p>
                                <a href="/ArticleItem/Search" className="btn_price">가격보기</a>
                            </div>
                        </li>
                        <li className="store">
                            <div className="top">
                                <em className="name">상가 플랜</em>
                                <strong className="price">&#8361; 99,000원 ~</strong>
                                <p className="description">/ 월, 부가세 포함</p>
                            </div>
                            <div className="bottom">
                                <p className="product">기본상품 10건</p>
                                <p className="product">안심 2건</p>
                                <a href="/ArticleItem/Search" className="btn_price">가격보기</a>
                            </div>
                        </li>
                    </ul>
                    
                    <div className="exposure_area">
                        <h3 className="h3_title"><span className="point">매물 등록</span> 정책</h3>
                        <p className="h3_dsc">TV∙대중교통∙인터넷 등 다양한 채널을 통해 네모를 만날 수 있습니다.</p>
                        <ul className="list_exposure">
                            <li>
                                <strong className="title">최대 8개</strong>
                                <p className="dsc">1개 중개업소 입점 시</p>
                            </li>
                            <li>
                                <strong className="title">최대 4개</strong>
                                <p className="dsc">2개 중개업소 입점 시</p>
                            </li>
                            <li>
                                <strong className="title">최대 3개</strong>
                                <p className="dsc">3개 중개업소 입점 시</p>
                            </li>
                            <li>
                                <strong className="title">최대 2개</strong>
                                <p className="dsc">4개 중개업소 입점 시</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="content6">
                <div className="inner">
                    <h3 className="h3_title"><span className="point">정기결제</span> 혜택</h3>
                    <p className="h3_dsc">TV∙대중교통∙인터넷 등 다양한 채널을 통해 네모를 만날 수 있습니다</p>
                    <ul className="routine_list">
                        <li>
                            <div className="sale"><span className="text">30%</span></div>
                            <p className="dsc">신규 구매 시</p>
                        </li>
                        <li>
                            <div className="sale"><span className="text">20%</span></div>
                            <p className="dsc">1개월 내 연장 시</p>
                        </li>
                        <li>
                            <div className="sale"><span className="text">5%</span></div>
                            <p className="dsc">3개월 구매 시</p>
                        </li>
                        <li>
                            <div className="sale"><span className="text">10%</span></div>
                            <p className="dsc">6개월 구매 시</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content7">
                <div className="inner">
                    <h3 className="h3_title">중개사님이 <span className="point">자주 묻는 질문</span></h3>
                    <div className="faq_content">
                        <WebSupportFaq webAgentJoinRenderType={WebAgentJoinRenderType.ProductDetailPremium} />
                        <div className="btn_center">
                            <button type="button" className="btn_red_border">더보기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }

    renderContentRedFeatured(): JSX.Element {
        return <div className="content red-featured">
            <div className="content1">
                <div className="inner">
                    <div className="img"></div>
                    <div className="text_box">
                        {this.renderToggleMenu()}
                        <p className="h3_dsc">수 백만 사용자들의 첫 게이트웨이, <br />임팩트 있는 브랜딩 효과를 가져다 줍니다.</p>
                        <a href="/ArticleItem/Search" className="btn_red">가격보기</a>
                        <p className="price"><span className="color_fe2c54">최저 ₩99,000 / 월 부터</span> &middot; 부가세 포함</p>
                        <p className="s_dsc">반복 결제 &middot; 언제든지 취소 가능</p>
                    </div>
                </div>
            </div>
            <div className="content2">
                <div className="inner">
                    <h3 className="h3_title"><span className="point">합리적인 비용</span>으로 많은 고객을 만나보세요</h3>
                    <p className="h3_dsc">기본상품만의 다양한 광고 혜택을 만나보세요.</p>
                    <ul className="benefit_list">
                        <li>
                            <div className="img"></div>
                            <strong className="title">광고를 상시 노출 시키세요</strong>
                            <p className="dsc">네모에서 광고할 수 있는 기본 상품으로 <br />매물을 등록해 고객에게 상시 노출합니다.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">언제든지 매물 변경을 변경하세요</strong>
                            <p className="dsc">쿠폰제가 아닌 슬롯제로 원하는 매물로<br />교체가 가능합니다.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">PC · WEB 동시노출 하세요 </strong>
                            <p className="dsc">더 많은 고객들을 만나고 싶다면 <br />안심, 프리미엄 상품을 활용해 광고효과를 높이세요.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">누적 복리 효과를 누리세요</strong>
                            <p className="dsc">네모에서 광고할 수 있는 기본 상품으로<br />매물을 등록해 고객에게 상시 노출합니다.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">매니저와 실시간 채팅 하세요</strong>
                            <p className="dsc">네모에서 광고할 수 있는 기본 상품으로<br />매물을 등록해 고객에게 상시 노출합니다.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">상품을 업그레이드 하세요</strong>
                            <p className="dsc">네모에서 광고할 수 있는 기본 상품으로 <br />매물을 등록해 고객에게 상시 노출합니다.</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="content3">
                <div className="inner">
                    <h3 className="h3_title">
                        <div className="img_logos">네모 x 직방 x 다음부동산</div>
                        <span className="point">동시노출 추가 혜택</span> 실시!
                    </h3>
                    <p className="h3_dsc">네모가 요청한 정보로 매물을 등록하시면 네모, 직방, 다음부동산에 무료로 함께 동시 노출됩니다.</p>
                    <ul className="sametime_list">
                        <li className="photo">
                            <strong className="title">사진을 5장 이상 올려주세요</strong>
                            <p className="dsc">많은 매물을 광고할수록 노출량이 증가해 <br />더 큰 광고 혜택을 누릴 수 있습니다.</p>
                        </li>
                        <li className="position">
                            <strong className="title">위치 정보를 공개해 주세요</strong>
                            <p className="dsc">많은 매물을 광고할수록 노출량이 증가해<br />더 큰 광고 혜택을 누릴 수 있습니다.</p>
                        </li>
                        <li className="information">
                            <strong className="title">권리금 정보를 올려주세요</strong>
                            <p className="dsc">많은 매물을 광고할수록 노출량이 증가해<br /> 더 큰 광고 혜택을 누릴 수 있습니다.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content4">
                <div className="inner">
                    <div className="img_list nemo">
                        <div className="list_img"></div>
                        <div className="text_box">
                            <em className="logo"></em>
                            <strong className="title">네모 광고</strong>
                            <p className="dsc">매물을 10개 단위로 등록할 수 있는 <br />네모의 기본 광고상품입니다. </p>
                        </div>
                        <div className="map_img"></div>
                    </div>
                    <div className="img_list zigbang">
                        <div className="list_img"></div>
                        <div className="text_box">
                            <em className="logo"></em>
                            <strong className="title">직방 광고</strong>
                            <p className="dsc">네모가 요청한 조건의 매물 정보로<br />등록하시면 직방 모바일앱 <br />상단에 함께 노출됩니다.</p>
                        </div>
                        <div className="map_img"></div>
                    </div>
                    <div className="img_list daum">
                        <div className="list_img"></div>
                        <div className="text_box">
                            <em className="logo"></em>
                            <strong className="title">다음 부동산 광고</strong>
                            <p className="dsc">네모가 요청한 조건의 매물 정보로<br />등록하시면 다음 부동산 앱 <br />상단에 함께 노출됩니다.</p>
                        </div>
                        <div className="map_img"></div>
                    </div>
                </div>
            </div>
            <div className="content5">
                <div className="inner">
                    <h3 className="h3_title"><span className="point">네모 플랜</span> 가격표</h3>
                    <p className="h3_dsc">고객님이 원하는 지역의 광고 예상 가격을 확인해 보세요.</p>
                    <ul className="price_list red_offer">
                        <li className="office">
                            <div className="top">
                                <em className="name">사무실 플랜</em>
                                <strong className="price">&#8361; 99,000원 ~</strong>
                                <p className="description">/ 월, 부가세 포함</p>
                            </div>
                            <div className="bottom">
                                <p className="product">기본상품 10건</p>
                                <p className="product">안심 2건</p>
                                <a href="/ArticleItem/Search" className="btn_price">가격보기</a>
                            </div>
                        </li>
                        <li className="store">
                            <div className="top">
                                <em className="name">상가 플랜</em>
                                <strong className="price">&#8361; 99,000원 ~</strong>
                                <p className="description">/ 월, 부가세 포함</p>
                            </div>
                            <div className="bottom">
                                <p className="product">기본상품 10건</p>
                                <p className="product">안심 2건</p>
                                <a href="/ArticleItem/Search" className="btn_price">가격보기</a>
                            </div>
                        </li>
                        <li className="both">
                            <div className="border_gradient"></div>
                            <div className="top">
                                <svg height="35" width="290" className="name">
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" />
                                        <stop offset="100%" />
                                    </linearGradient>
                                    <text x="0" y="28" fill="url(#grad1)">사무실 + 상가 플랜</text>
                                </svg>
                                <strong className="price">&#8361; 99,000원 ~</strong>
                                <p className="description">/ 월, 부가세 포함</p>
                            </div>
                            <div className="bottom">
                                <p className="product">기본상품 10건</p>
                                <p className="product">안심 2건</p>
                                <a href="/ArticleItem/Search" className="btn_price"><span className="text">가격보기</span></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content6">
                <div className="inner">
                    <h3 className="h3_title"><span className="point">정기결제</span> 혜택</h3>
                    <p className="h3_dsc">TV∙대중교통∙인터넷 등 다양한 채널을 통해 네모를 만날 수 있습니다</p>
                    <ul className="routine_list">
                        <li>
                            <div className="sale"><span className="text">30%</span></div>
                            <p className="dsc">신규 구매 시</p>
                        </li>
                        <li>
                            <div className="sale"><span className="text">20%</span></div>
                            <p className="dsc">1개월 내 연장 시</p>
                        </li>
                        <li>
                            <div className="sale"><span className="text">5%</span></div>
                            <p className="dsc">3개월 구매 시</p>
                        </li>
                        <li>
                            <div className="sale"><span className="text">10%</span></div>
                            <p className="dsc">6개월 구매 시</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content7">
                <div className="inner">
                    <h3 className="h3_title">중개사님이 <span className="point">자주 묻는 질문</span></h3>
                    <div className="faq_content">
                        <WebSupportFaq webAgentJoinRenderType={WebAgentJoinRenderType.ProductDetailRedFeatured} />
                        <div className="btn_center">
                            <button type="button" className="btn_red_border">더보기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }

    renderContentRedPremium(): JSX.Element {
        return <div className="content red-premium">
            <div className="content1">
                <div className="inner">
                    <div className="img"></div>
                    <div className="text_box">
                        {this.renderToggleMenu()}
                        <p className="h3_dsc">수 백만 사용자들의 첫 게이트웨이, <br />임팩트 있는 브랜딩 효과를 가져다 줍니다.</p>
                        <a href="/ArticleItem/Search" className="btn_red">가격보기</a>
                        <p className="price"><span className="color_fe2c54">최저 ₩99,000 / 월 부터</span> &middot; 부가세 포함</p>
                        <p className="s_dsc">반복 결제 &middot; 언제든지 취소 가능</p>
                    </div>
                </div>
            </div>
            <div className="content2">
                <div className="inner">
                    <h3 className="h3_title"><span className="point">합리적인 비용</span>으로 많은 고객을 만나보세요</h3>
                    <p className="h3_dsc">기본상품만의 다양한 광고 혜택을 만나보세요.</p>
                    <ul className="benefit_list">
                        <li>
                            <div className="img"></div>
                            <strong className="title">광고를 상시 노출 시키세요</strong>
                            <p className="dsc">네모에서 광고할 수 있는 기본 상품으로 <br />매물을 등록해 고객에게 상시 노출합니다.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">언제든지 매물 변경을 변경하세요</strong>
                            <p className="dsc">쿠폰제가 아닌 슬롯제로 원하는 매물로<br />교체가 가능합니다.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">PC · WEB 동시노출 하세요 </strong>
                            <p className="dsc">더 많은 고객들을 만나고 싶다면 <br />안심, 프리미엄 상품을 활용해 광고효과를 높이세요.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">누적 복리 효과를 누리세요</strong>
                            <p className="dsc">네모에서 광고할 수 있는 기본 상품으로<br />매물을 등록해 고객에게 상시 노출합니다.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">매니저와 실시간 채팅 하세요</strong>
                            <p className="dsc">네모에서 광고할 수 있는 기본 상품으로<br />매물을 등록해 고객에게 상시 노출합니다.</p>
                        </li>
                        <li>
                            <div className="img"></div>
                            <strong className="title">상품을 업그레이드 하세요</strong>
                            <p className="dsc">네모에서 광고할 수 있는 기본 상품으로 <br />매물을 등록해 고객에게 상시 노출합니다.</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="content3">
                <div className="inner">
                    <h3 className="h3_title">
                        <div className="img_logos">네모 x 직방 x 다음부동산</div>
                        <span className="point">동시노출 추가 혜택</span> 실시!
                    </h3>
                    <p className="h3_dsc">네모가 요청한 정보로 매물을 등록하시면 네모, 직방, 다음부동산에 무료로 함께 동시 노출됩니다.</p>
                    <ul className="sametime_list">
                        <li className="photo">
                            <strong className="title">사진을 5장 이상 올려주세요</strong>
                            <p className="dsc">많은 매물을 광고할수록 노출량이 증가해 <br />더 큰 광고 혜택을 누릴 수 있습니다.</p>
                        </li>
                        <li className="position">
                            <strong className="title">위치 정보를 공개해 주세요</strong>
                            <p className="dsc">많은 매물을 광고할수록 노출량이 증가해<br />더 큰 광고 혜택을 누릴 수 있습니다.</p>
                        </li>
                        <li className="information">
                            <strong className="title">권리금 정보를 올려주세요</strong>
                            <p className="dsc">많은 매물을 광고할수록 노출량이 증가해<br /> 더 큰 광고 혜택을 누릴 수 있습니다.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content4">
                <div className="inner">
                    <div className="img_list nemo">
                        <div className="list_img"></div>
                        <div className="text_box">
                            <em className="logo"></em>
                            <strong className="title">네모 광고</strong>
                            <p className="dsc">매물을 10개 단위로 등록할 수 있는 <br />네모의 기본 광고상품입니다. </p>
                        </div>
                        <div className="map_img"></div>
                    </div>
                    <div className="img_list zigbang">
                        <div className="list_img"></div>
                        <div className="text_box">
                            <em className="logo"></em>
                            <strong className="title">직방 광고</strong>
                            <p className="dsc">네모가 요청한 조건의 매물 정보로<br />등록하시면 직방 모바일앱 <br />상단에 함께 노출됩니다.</p>
                        </div>
                        <div className="map_img"></div>
                    </div>
                    <div className="img_list daum">
                        <div className="list_img"></div>
                        <div className="text_box">
                            <em className="logo"></em>
                            <strong className="title">다음 부동산 광고</strong>
                            <p className="dsc">네모가 요청한 조건의 매물 정보로<br />등록하시면 다음 부동산 앱 <br />상단에 함께 노출됩니다.</p>
                        </div>
                        <div className="map_img"></div>
                    </div>
                </div>
            </div>
            <div className="content5">
                <div className="inner">
                    <h3 className="h3_title"><span className="point">네모 플랜</span> 가격표</h3>
                    <p className="h3_dsc">고객님이 원하는 지역의 광고 예상 가격을 확인해 보세요.</p>
                    <ul className="price_list red_offer">
                        <li className="office">
                            <div className="top">
                                <em className="name">사무실 플랜</em>
                                <strong className="price">&#8361; 99,000원 ~</strong>
                                <p className="description">/ 월, 부가세 포함</p>
                            </div>
                            <div className="bottom">
                                <p className="product">기본상품 10건</p>
                                <p className="product">안심 2건</p>
                                <a href="/ArticleItem/Search" className="btn_price">가격보기</a>
                            </div>
                        </li>
                        <li className="store">
                            <div className="top">
                                <em className="name">상가 플랜</em>
                                <strong className="price">&#8361; 99,000원 ~</strong>
                                <p className="description">/ 월, 부가세 포함</p>
                            </div>
                            <div className="bottom">
                                <p className="product">기본상품 10건</p>
                                <p className="product">안심 2건</p>
                                <a href="/ArticleItem/Search" className="btn_price">가격보기</a>
                            </div>
                        </li>
                        <li className="both">
                            <div className="border_gradient"></div>
                            <div className="top">
                                <svg height="35" width="500" className="name">
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" />
                                        <stop offset="100%" />
                                    </linearGradient>
                                    <text x="0" y="28" fill="url(#grad1)">사무실 + 상가 플랜</text>
                                </svg>
                                <strong className="price">&#8361; 99,000원 ~</strong>
                                <p className="description">/ 월, 부가세 포함</p>
                            </div>
                            <div className="bottom">
                                <p className="product">기본상품 10건</p>
                                <p className="product">안심 2건</p>
                                <a href="/ArticleItem/Search" className="btn_price"><span className="text">가격보기</span></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content6">
                <div className="inner">
                    <h3 className="h3_title"><span className="point">정기결제</span> 혜택</h3>
                    <p className="h3_dsc">TV∙대중교통∙인터넷 등 다양한 채널을 통해 네모를 만날 수 있습니다</p>
                    <ul className="routine_list">
                        <li>
                            <div className="sale"><span className="text">30%</span></div>
                            <p className="dsc">신규 구매 시</p>
                        </li>
                        <li>
                            <div className="sale"><span className="text">20%</span></div>
                            <p className="dsc">1개월 내 연장 시</p>
                        </li>
                        <li>
                            <div className="sale"><span className="text">5%</span></div>
                            <p className="dsc">3개월 구매 시</p>
                        </li>
                        <li>
                            <div className="sale"><span className="text">10%</span></div>
                            <p className="dsc">6개월 구매 시</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content7">
                <div className="inner">
                    <h3 className="h3_title">중개사님이 <span className="point">자주 묻는 질문</span></h3>
                    <div className="faq_content">
                        <WebSupportFaq webAgentJoinRenderType={WebAgentJoinRenderType.ProductDetailRedPremium} />
                        <div className="btn_center">
                            <button type="button" className="btn_red_border">더보기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }

    render(): JSX.Element {        
        const isProductMain = this.props.requestPath;
        const isProductDetail1 = isProductMain && this.state.currentHash === "#tab1__agentSign";
        const isProductDetail2 = isProductMain && this.state.currentHash === "#tab2__agentSign";
        const isProductDetail3 = isProductMain && this.state.currentHash === "#tab3__agentSign";
        const isProductDetail4 = isProductMain && this.state.currentHash === "#tab4__agentSign";
        const isProductDetail5 = isProductMain && this.state.currentHash === "#tab5__agentSign";

        return <div className="product_detail">
            {isProductDetail1 && this.renderContentBasic()}
            {isProductDetail2 && this.renderContentFocus()}
            {isProductDetail3 && this.renderContentPremium()}
            {isProductDetail4 && this.renderContentRedFeatured()}
            {isProductDetail5 && this.renderContentRedPremium()}
        </div>;
    }
}