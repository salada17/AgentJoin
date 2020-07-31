/// <reference path="../../../../../typings/index.d.ts" />
/// <reference path="../../../../sugarhill.officesquare.web/scripts/index.tsx" />
/// <reference path="../../components/index.tsx" />

enum WebAgentJoinRenderType {
    Information = 1,
    Notice,
    Faq,
    ProductMain,
    ProductDetailBasic,
    ProductDetailFocus,
    ProductDetailPremium,
    ProductDetailRedFeatured,
    ProductDetailRedPremium,
    Search
}

interface IWebAgentJoinLayoutProps {
    isAuthenticated: boolean;
    currentUserFullName: string;
    requestPath: string;
    currentController: string;
    currentAction: string;
    renderType: WebAgentJoinRenderType;
    ArticleType: ServiceClients.ArticleType;
}

interface IWebAgentJoinLayoutState {
    currentHash: string;
    showCustomerPopup: boolean;
}

class WebAgentJoinContainer extends React.Component<IWebAgentJoinLayoutProps , IWebAgentJoinLayoutState> {
    constructor(props: IWebAgentJoinLayoutProps) {
        super(props);
        this.state = {
            showCustomerPopup: false,
            currentHash: location.hash
        }
    }

    componentDidMount(): void {
        document.addEventListener("scroll", this.handleScroll.bind(this));
    }

    handleScroll(): void {
        const activeClassName = "on";
        const header: HTMLElement = ReactDOM.findDOMNode<HTMLElement>(this.refs["Header"]);
        const currentTop = window.pageYOffset;
        if (currentTop >= (header.clientHeight)) {
            if (!header.classList.contains(activeClassName)) {
                header.classList.add(activeClassName);
            }
        } else if (header.classList.contains(activeClassName)) {
            header.classList.remove(activeClassName);
        }
    }

    handleGnb(hash: string, e: Event): void {
        this.state.currentHash = hash;
        this.setState(this.state);
    }

    handleCustomer(e: Event): void {
        e.preventDefault();

        this.state.showCustomerPopup = true;
        this.setState(this.state);
    }

    handleCloseCustomerPopup(): void {
        this.state.showCustomerPopup = false;
        this.setState(this.state);
    }

    renderGetContent(): JSX.Element {
        switch (this.props.renderType) {
            case WebAgentJoinRenderType.Information:
                return <WebAgentJoinInformation />;
            case WebAgentJoinRenderType.ProductMain:
                return <WebAgentJoinProductMain />;
            case WebAgentJoinRenderType.ProductDetailBasic:
                return <WebAgentJoinProductDetail requestPath={location.pathname} currentHash={this.state.currentHash} />;
            case WebAgentJoinRenderType.Notice:
                return <WebSupportNotice webAgentJoinRenderType={WebAgentJoinRenderType.Notice} />;
            case WebAgentJoinRenderType.Faq:
                return <WebSupportFaq webAgentJoinRenderType={WebAgentJoinRenderType.Faq} />;
            case WebAgentJoinRenderType.Search:
                return <WebAgentJoinSearch articleType={this.props.ArticleType} />
        }
    }

    renderHeader(): JSX.Element {
        const isInformation = this.props.requestPath.indexOf("/Sign") != -1;
        const isProductMain = (this.props.requestPath.indexOf("/ArticleItem") != -1);
        const isNotice = this.props.requestPath.indexOf("/Support/Notice") != -1;
        const isFaq = this.props.requestPath.indexOf("/Support/Faq") != -1;
        const isSearch = this.props.requestPath.indexOf("/Search") != -1;
        const isProductDetail1 = isProductMain && this.state.currentHash === "#tab1__agentSign";
        const isProductDetail2 = isProductMain && this.state.currentHash === "#tab2__agentSign";
        const isProductDetail3 = isProductMain && this.state.currentHash === "#tab3__agentSign";
        const isProductDetail4 = isProductMain && this.state.currentHash === "#tab4__agentSign";
        const isProductDetail5 = isProductMain && this.state.currentHash === "#tab5__agentSign";

        return (
            <div className="header" ref="Header">
            <div className="inner">
                <h1 className="h1_title_area">
                    <span className="btn_logo"></span>
                    <a href="/Agent/Sign" className="h1_title">중개사 가입안내</a>
                </h1>
                <div className="menu_area">
                    <ul className="list_menu">
                        <li className={isInformation && "on"}><a href="/Agent/Sign">네모소개</a></li>
                            <li className={(isProductMain && !isSearch) && "on"}><a href="/ArticleItem">광고상품</a>
                            <div className="ly_menu">
                                <ul>
                                    <li className={isProductDetail1 && "on"}><a href="/ArticleItem/Detail#tab1__agentSign" onClick={this.handleGnb.bind(this, "#tab1__agentSign")}>기본상품</a></li>
                                    <li className={isProductDetail2 && "on"}><a href="/ArticleItem/Detail#tab2__agentSign" onClick={this.handleGnb.bind(this, "#tab2__agentSign")}>포커스 상품</a></li>
                                    <li className={isProductDetail3 && "on"}><a href="/ArticleItem/Detail#tab3__agentSign" onClick={this.handleGnb.bind(this, "#tab3__agentSign")}>프리미엄 상품</a></li>
                                    <li className={isProductDetail4 && "on"}><a href="/ArticleItem/Detail#tab4__agentSign" onClick={this.handleGnb.bind(this, "#tab4__agentSign")}>지역추천 중개업소</a></li>
                                    <li className={isProductDetail5 && "on"}><a href="/ArticleItem/Detail#tab5__agentSign" onClick={this.handleGnb.bind(this, "#tab5__agentSign")}>프리미엄 중개업소</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className={isSearch && "on"}><a href="/ArticleItem/Search">가격안내</a></li>
                        <li className={isNotice && "on"}><a href="/Support/Notice">공지사항</a></li>
                        <li className={isFaq && "on"}><a href="/Support/Faq">자주 묻는질문</a></li>
                        <li className="btn_home"><a href="/" target="_black">네모 바로가기 <span className="ico_link"></span></a></li>
                    </ul>
                </div>
                    <div className="right_menu">
                        <a href="#" className="btn_tel" onClick={this.handleCustomer.bind(this)}>1599-4385*</a>
                        {!isAuthenticated && <a href="/Agent/Register" target="_blank" className="btn_join">무료 가입하기</a>}
                </div>
            </div>
        </div>
        );
    }
    renderFooter(): JSX.Element {
        return (
            <div className="footer">
                <div className="footer_banner">
                    <div className="inner">
                        <h4 className="h4_title">상업용 부동산의 시작,<br />빠르게 성장하는 네모와 함께 하세요.</h4>
                        <a href="/Agent/Register" target="_blank" className="btn_red">무료 가입하기</a>
                    </div>
                </div>
                <div className="inner">
                    <ul className="footer_menu">
                        <li className="link">
                            <strong className="footer_logo"><span className="blind">Nemo logo</span></strong>
                            <a className="btn_appstore" href="https://apps.apple.com/kr/app/id1209888606" target="_blank"><span className="blind">App Store에서 다운로드하기</span></a>
                            <a className="btn_gplay" href="https://play.google.com/store/apps/details?id=kr.co.sugarhill.nemoapp" target="_blank"><span className="blind">Google Play 다운로드하기</span></a>
                        </li>
                        <li>
                            <strong className="title">회사</strong>
                            <ul className="footer_list">
                                <li><a href="http://www.sugarhill.co.kr/" target="_blank" title="새창으로 이동합니다">회사소개</a></li>
                                <li><a href="/Support/Notice" target="_blank" title="새창으로 이동합니다">공지사항</a></li>
                                <li><a href="http://blog.nemoapp.kr" target="_blank" title="새창으로 이동합니다">블로그</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong className="title">약관</strong>
                            <ul className="footer_list">
                                <li><a href="https://cdn.nemoapp.kr/policy/servicePolicy.html?v=637185256487537867" target="_blank" title="새창으로 이동합니다">이용약관</a></li>
                                <li><a href="https://cdn.nemoapp.kr/policy/privacyPolicy.html?v=637185256487537867" target="_blank" title="새창으로 이동합니다">개인정보처리방침</a></li>
                                <li><a href="https://cdn.nemoapp.kr/policy/locatoinPolicy.html?v=637185256487537867" target="_blank" title="새창으로 이동합니다">위치서비스 사용약관</a></li>
                                <li><a href="https://cdn.nemoapp.kr/policy/articleManagementPolicy.html?v=637185256487537867" target="_blank" title="새창으로 이동합니다">매물관리정책</a></li>
                                <li><a href="https://www.nemoapp.kr/Support/Remote" target="_blank" title="새창으로 이동합니다">원격지원</a></li>
                                <li><a href="#">데이터 출처</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong className="title">문의</strong>
                            <ul className="footer_list">
                                <li><a href="https://www.nemoapp.kr/Support/SendEmail" target="_blank" title="새창으로 이동합니다">서비스 이용문의</a></li>
                                <li><a href="/Support/SendEmail" target="_blank" title="새창으로 이동합니다">제휴문의</a></li>
                            </ul>
                        </li>
                        <li className="infor">
                            <strong className="title">(주)슈가힐</strong>
                            <ul className="footer_list">
                                <li>Tel : 1599-4385</li>
                                <li>Fax : 02-6944-9338</li>
                                <li>통신판매업신고 : 제2019-서울강남-00502호,</li>
                                <li>사업자등록번호 : 661-87-00655</li>
                                <li>주소 : 서울특별시 강남구 테헤란로7길 12 허바허바빌딩 4층</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="inner">
                    <div className="footer_bottom">
                        <p className="copyright">Copyright © 2020 Sugarhill. All rights reserved.</p>
                        <ul className="other_link">
                            <li><a className="facebook" href="https://www.facebook.com/nemoservice" target="_blank"><span className="blind">FaceBook</span></a></li>
                            <li><a className="youtube" href="https://www.youtube.com/channel/UCQZXLvdjnkqC81T4eoEzFPQ" target="_blank"><span className="blind">Youtube</span></a></li>
                            <li><a className="blog" href="http://blog.nemoapp.kr" target="_blank"><span className="blind">Blog</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            );
    }

    render(): JSX.Element {
        return (
            <div id="agentJoin" onScroll={this.handleScroll.bind(this)}>
                {this.renderHeader()}
                {this.renderGetContent()}
                {this.renderFooter()}
                {this.state.showCustomerPopup && <AgentCustomerPopup onClose={this.handleCloseCustomerPopup.bind(this)} />}
            </div>
        );
    }
}
