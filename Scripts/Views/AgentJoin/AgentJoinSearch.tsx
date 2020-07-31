/// <reference path="../../../../sugarhill.officesquare.web/scripts/index.tsx" />

/// <reference path="../../components/index.tsx" />

enum agentJoinProductmenu {
    Basic = 1,
    Focus,
    Premium,
    RedFeatured,
    RedPremium
}

enum agentJoinProductName {
    Basic = "기본 상품",
    Focus = "포커스 상품",
    Premium = "프리미엄 상품",
    RedFeatured = "지역추천 중개업소",
    RedPremium = "프리미엄 중개업소"
}

enum searchName {
    region = "행정구역",
    subway = "지하철역"
}

enum searchType {
    region = "region",
    subway = "subway"
}

interface IWebAgentJoinSearchProps {
    articleType: ServiceClients.ArticleType;
}

interface IWebAgentJoinSearchState {
    showMode: searchType;
    searchName: searchName;
    menu: agentJoinProductmenu;
    isToggleMenu: boolean;
    isShowSelect: boolean;
    isSearchEmpty: boolean;
    isSearch: boolean;
    showAutocomplete: boolean;
    showCustomerPopup: boolean;
    targetPlaceholder: string;
    targetValue: string;
    lastValue: string;
    region: ServiceClients.IRegionSearchResultDTO;
    subway: ServiceClients.ISubwaySearchResultDTO;
}

class WebAgentJoinSearch extends React.Component<IWebAgentJoinSearchProps, IWebAgentJoinSearchState> {
    constructor(props: IWebAgentJoinSearchProps) {
        super(props);
        this.state = {
            showMode: searchType.region,
            searchName: searchName.region,
            menu: agentJoinProductmenu.Basic,
            isToggleMenu: false,
            isShowSelect: false,
            isSearchEmpty: true,
            isSearch: false,
            showAutocomplete: false,
            showCustomerPopup: false,
            targetPlaceholder: "어떤 동을 찾으세요?",
            targetValue: "",
            lastValue: "",
            region: null,
            subway: null
        }
    }

    handleBlur(): void {
        const focusElement: any = document.activeElement;
        if (focusElement) {
            focusElement.blur();
        }
    }

    handleSearchTab(menu: agentJoinProductmenu, e: Event): void {
        const activeClassName = "on";
        const targetElement = e.target as Element;

        if (!targetElement) {
            targetElement.classList.remove(activeClassName);
        } else {
            targetElement.classList.add(activeClassName);
        }

        if (menu === agentJoinProductmenu.Premium) {
            this.state.isShowSelect = true;
        } else {
            this.state.isShowSelect = false;
        }

        this.state.menu = menu;
        this.setState(this.state);
    }

    handleSearchHead(): void {
        this.state.isToggleMenu = !this.state.isToggleMenu;
        this.setState(this.state);
    }

    handleSearchMenu(e: Event): void {
        const targetElement = e.target as Element;
        const targetDataValue = targetElement.getAttribute("data-value");

        if (targetDataValue === searchType.region) {
            this.state.showMode = searchType.region;
            this.state.targetPlaceholder = "어떤 동을 찾으세요?";
            this.state.searchName = searchName.region;
            this.setState(this.state);
        } else {
            this.state.showMode = searchType.subway;
            this.state.targetPlaceholder = "어떤 역을 찾으세요?";
            this.state.searchName = searchName.subway;
            this.setState(this.state);
        }

        this.state.region = null;
        this.state.subway = null;
        this.state.isToggleMenu = !this.state.isToggleMenu;
    }

    handleChangeKeyword(e: Event): void{
        this.state.targetValue = (e.target as HTMLInputElement).value;

        if (this.state.targetValue.length >= 2) {
            this.state.isSearchEmpty = false;
        } else {
            this.state.isSearchEmpty = true;
        }

        if (!this.state.isSearchEmpty) {
            switch (this.state.showMode) {
                case searchType.region:
                    ServiceClients.RegionServiceClient.SearchSubmunicipalities(this.state.targetValue).then(
                        (result): void => {
                            if (!result.items[0]) {
                                this.state.isSearchEmpty = true;
                                this.setState(this.state);

                            } else if (SiteModeUtilities.isBusiness(this.props.articleType)) {
                                this.state.isSearchEmpty = false;
                                this.state.region = result;
                                this.setState(this.state);
                            }
                        });
                    break;
                case searchType.subway:
                    ServiceClients.SubwayServiceClient.SearchSubwayStations(this.state.targetValue).then(
                        (result): void => {
                            if (!result.items[0]) {
                                this.state.isSearchEmpty = true;
                                this.setState(this.state);
                            } else if (SiteModeUtilities.isBusiness(this.props.articleType)) {
                                this.state.isSearchEmpty = false
                                this.state.subway = result;
                                this.setState(this.state);
                            }
                        }
                    );
                    break;
            }

        } else {
            this.state.isSearchEmpty = true;
            this.state.region = null;
            this.state.subway = null;
        }
        this.state.isSearch = true;
        this.setState(this.state);
    }

    handleAutoCompleteClose(): void {
        this.state.isSearch = false;
        this.setState(this.state);
    }

    handleAutoComplete(s: ServiceClients.ISubwaySearchResultData, r: ServiceClients.IRegionSearchResultData): void {
        switch (this.state.showMode) {
            case searchType.region: {
                this.state.region.items = [r];
            } break;
            case searchType.subway: {
                this.state.subway.items = [s];
            } break;
        }

        this.state.isSearch = false;
        this.state.isSearchEmpty = false;
        this.setState(this.state);
    }

    handleInputSearch(e: Event): void {
        e.preventDefault();
        this.handleBlur();
        this.state.isSearchEmpty = false;
        this.state.isSearch = false;
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

    renderSearchTab(): JSX.Element {
        return (
            <div className="tab_product_menu_area">
                <ul className="tab_product_menu">
                    <li className={this.state.menu === agentJoinProductmenu.Basic ? "on" : ""} data-menu={agentJoinProductmenu.Basic} onClick={this.handleSearchTab.bind(this, agentJoinProductmenu.Basic)}>
                        <div className="text">{agentJoinProductName.Basic}
                            <span className="tooltip_area">
                                <span className="ico_question">?<span className="blind">기본광고란?</span></span>
                                <span className="tooltip">기본광고는 기본상품 10건 · 안심상품 2건이 제공됩니다.
                                    <button type="button" className="btn_close"><span className="blind">창닫기</span></button>
                                </span>
                            </span>
                        </div>
                    </li>
                    <li className={this.state.menu === agentJoinProductmenu.Focus ? "on" : ""} data-menu={agentJoinProductmenu.Focus} onClick={this.handleSearchTab.bind(this, agentJoinProductmenu.Focus)}>
                        <div className="text">{agentJoinProductName.Focus}
                            <span className="tooltip_area">
                                <span className="ico_question">?<span className="blind">포커스 광고란?</span></span>
                                <span className="tooltip">포커스광고는 기본상품 10건 · 안심상품 2건이 제공됩니다.
                                    <button type="button" className="btn_close"><span className="blind">창닫기</span></button>
                                </span>
                            </span>
                        </div>
                    </li>
                    <li className={this.state.menu === agentJoinProductmenu.Premium ? "on" : ""} data-menu={agentJoinProductmenu.Premium} onClick={this.handleSearchTab.bind(this, agentJoinProductmenu.Premium)}>
                        <div className="text">{agentJoinProductName.Premium}
                            <span className="tooltip_area">
                                <span className="ico_question">?<span className="blind">프리미엄 광고란?</span></span>
                                <span className="tooltip">프리미엄광고는 기본상품 10건 · 안심상품 2건이 제공됩니다.
                                    <button type="button" className="btn_close"><span className="blind">창닫기</span></button>
                                </span>
                            </span>
                        </div>
                    </li>
                    <li className={this.state.menu === agentJoinProductmenu.RedFeatured ? "on" : ""} data-menu={agentJoinProductmenu.RedFeatured} onClick={this.handleSearchTab.bind(this, agentJoinProductmenu.RedFeatured)}>
                        <div className="text">{agentJoinProductName.RedFeatured}
                            <span className="tooltip_area">
                                <span className="ico_question">?<span className="blind">지역추천 중개광고란?</span></span>
                                <span className="tooltip">지역추천 중개광고는 기본상품 10건 · 안심상품 2건이 제공됩니다.
                                    <button type="button" className="btn_close"><span className="blind">창닫기</span></button>
                                </span>
                            </span>
                        </div>
                    </li>
                    <li className={this.state.menu === agentJoinProductmenu.RedPremium ? "on" : ""} data-menu={agentJoinProductmenu.RedPremium} onClick={this.handleSearchTab.bind(this, agentJoinProductmenu.RedPremium)}>
                        <div className="text">{agentJoinProductName.RedPremium}
                            <span className="tooltip_area">
                                <span className="ico_question">?<span className="blind">프리미엄 중개광고란?</span></span>
                                <span className="tooltip">프리미엄 중개광고는 기본상품 10건 · 안심상품 2건이 제공됩니다.
                                    <button type="button" className="btn_close"><span className="blind">창닫기</span></button>
                                </span>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }

    renderRegionContent(): JSX.Element {
        const regionItems = this.state.region && this.state.region.items ? this.state.region.items : null;

        let storePriceKey: string = "";
        let officePriceKey: string = "";
        let bothPriceKey: string = "";

        const regTargetValue: RegExp = new RegExp(this.state.targetValue, "gi");

        switch (this.state.menu) {
            case agentJoinProductmenu.Basic:
                storePriceKey = "storeBasicPrice";
                officePriceKey = "officeBasicPrice";
                bothPriceKey = "businessBasicPackagePrice";
                break;
            case agentJoinProductmenu.Focus:
                storePriceKey = "storeFocusPrice";
                officePriceKey = "officeFocusPrice";
                bothPriceKey = "businessFocusPackagePrice";
                break;
            case agentJoinProductmenu.Premium:
                storePriceKey = "storeArticlePremiumPrice";
                officePriceKey = "officeArticlePremiumPrice";
                bothPriceKey = "businessArticlePremiumPackagePrice";
                break;
            case agentJoinProductmenu.RedFeatured:
                storePriceKey = "storeAgentFeaturedPrice";
                officePriceKey = "officeAgentFeaturedPrice";
                bothPriceKey = "businessAgentFeaturedPackagePrice";
                break;
            case agentJoinProductmenu.RedPremium:
                storePriceKey = "storeAgentPremiumPrice";
                officePriceKey = "officeAgentPremiumPrice";
                bothPriceKey = "businessAgentPremiumPackagePrice";
                break;
            default:
                storePriceKey = "storeBasicPrice";
                officePriceKey = "officeBasicPrice";
                bothPriceKey = "businessBasicPackagePrice";
                break;
        }

        return <div className={`search_content_area region ${this.state.isShowSelect ? "premium" : ""}`}>
            {_.map(regionItems, (a: ServiceClients.IRegionSearchResultData, i: number) => {
                let add: Array<string> = a.address.split(" ");
                let addLast: string = add[add.length - 1];
                addLast = addLast.replace(regTargetValue, "<em class='word'>" + this.state.targetValue + "</em>")
                add.splice(add.length - 1, 1);
                let addResult: string = add.join(" ") + " " + addLast;
                return <div className="search_content" key={i}>
                    <div className="search_product">
                        <div className="title_area">
                            <strong className="title" dangerouslySetInnerHTML={{ __html: addResult }}></strong>
                            <em className="town">{a.province}</em>
                        </div>
                        <div className="procduct_content">
                            <div className="product store">
                                <strong className="title">상가</strong>
                                <em className="price">월 {CurrencyUtilities.toDigits(a.priceInfo[storePriceKey])}원<span className="vat">(VAT포함)</span></em>
                            </div>
                            <div className="product office">
                                <strong className="title">사무실</strong>
                                <em className="price">월 {CurrencyUtilities.toDigits(a.priceInfo[officePriceKey])}원<span className="vat">(VAT포함)</span></em>
                            </div>
                            {this.state.isShowSelect && <div className="product both">
                                <svg height="20" width="229" className="title">
                                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" />
                                        <stop offset="100%" />
                                    </linearGradient>
                                    <text x="0" y="14" fill="url(#grad2)">상가+사무실</text>
                                </svg>
                                <em className="price">월 {CurrencyUtilities.toDigits(a.priceInfo[bothPriceKey])}원<span className="vat">(VAT포함)</span></em>
                            </div>}
                        </div>
                    </div>
                    <p className="search_names" dangerouslySetInnerHTML={{ __html: a.joinedIncludedSubmunicipalities.replace(regTargetValue, "<em class='word'>" + this.state.targetValue + "</em>") }}></p>
                </div>;
            })}
        </div>;
    }

    renderSubwayContent(): JSX.Element {
        const subwayItems = this.state.subway && this.state.subway.items ? this.state.subway.items : null;

        const regTargetValue: RegExp = new RegExp(this.state.targetValue, "gi");

        return <div className={`search_content_area subway ${this.state.isShowSelect ? "premium" : ""}`}>
            {_.map(subwayItems, (s: ServiceClients.ISubwaySearchResultData, i: number) => {
                let add: Array<string> = s.name.split(" ");
                let addLast: string = add[add.length - 1];
                addLast = addLast.replace(regTargetValue, "<em class='word'>" + this.state.targetValue + "</em>")
                add.splice(add.length - 1, 1);
                let addResult: string = add.join(" ") + " " + addLast;
                return <div className="search_content" key={i}>
                    <div className="search_product">
                        <div className="title_area">
                            <strong className="title" dangerouslySetInnerHTML={{ __html: addResult }}></strong>
                            <em className="town">{s.joinedLines}</em>
                        </div>
                        <div className="procduct_content">
                            <div className="product store">
                                <strong className="title">상가</strong>
                                <em className="price">월 {CurrencyUtilities.toDigits(s.priceInfo.storeArticlePremiumPrice)}원<span className="vat">(VAT포함)</span></em>
                            </div>
                            <div className="product office">
                                <strong className="title">사무실</strong>
                                <em className="price">월 {CurrencyUtilities.toDigits(s.priceInfo.officeArticlePremiumPrice)}원<span className="vat">(VAT포함)</span></em>
                            </div>
                            {this.state.isShowSelect && <div className="product both">
                                <svg height="20" width="229" className="title">
                                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" />
                                        <stop offset="100%" />
                                    </linearGradient>
                                    <text x="0" y="14" fill="url(#grad2)">상가+사무실</text>
                                </svg>
                                <em className="price">월 {CurrencyUtilities.toDigits(s.priceInfo.businessArticlePremiumPackagePrice)}원<span className="vat">(VAT포함)</span></em>
                            </div>}
                        </div>
                    </div>
                    <p className="search_names" dangerouslySetInnerHTML={{ __html: s.joinedLines.replace(regTargetValue, "<em class='word'>" + this.state.targetValue + "</em>") }}></p>
                </div>;
            })}
        </div>;
    }

    renderSearchContent(): JSX.Element {
        return (
            <div className={`search_content_wrap ${this.state.isSearchEmpty ? "empty" : ""}`}>
                {this.state.showMode === searchType.region ? this.renderRegionContent() : this.renderSubwayContent()}
                {this.state.isSearchEmpty && <p className="text">검색내용이 없습니다.</p>}
                {!this.state.isSearchEmpty && <div className="btn_center">
                    <button type="button" className="btn_red" onClick={this.handleCustomer.bind(this)}>문의하기</button>
                </div>}
            </div>
        );
    }

    renderRegionAutoComplete(): JSX.Element {
        const region = this.state.region;
        const regTargetValue: RegExp = new RegExp(this.state.targetValue, "gi");

        return <ul>
            {_.map(region.items, (a: ServiceClients.IRegionSearchResultData, i: number) => {
                let add: Array<string> = a.address.split(" ");
                let addLast: string = add[add.length - 1];
                addLast = addLast.replace(regTargetValue, "<em class='word'>" + this.state.targetValue + "</em>")
                add.splice(add.length - 1, 1);
                let addResult: string = add.join(" ") + " " + addLast;
                return <li key={i} onClick={this.handleAutoComplete.bind(this, null, a)} dangerouslySetInnerHTML={{ __html: a.province + " " + addResult }}></li>;
            })}
        </ul>
    }

    renderSubwayAutoComplete(): JSX.Element {
        const subway = this.state.subway;
        return <ul>
            {_.map(subway.items, (s: ServiceClients.ISubwaySearchResultData, i: number) => {
                return <li key={i} onClick={this.handleAutoComplete.bind(this, s, null)} dangerouslySetInnerHTML={{ __html: s.name.replace(this.state.targetValue, "<em class='word'>" + this.state.targetValue + "</em>") + " " + s.joinedLines }}></li>;
            })}
        </ul>
    }

    renderSearchResult(): JSX.Element {
        return <form method="get">
            <div className={`inner search_wrap ${this.state.isShowSelect ? "open" : ""}`}>
                <div className={`select_area ${this.state.isToggleMenu ? "on" : ""}`} id="search">
                    <div className="select_head" data-value={this.state.showMode} onClick={this.handleSearchHead.bind(this)}>{this.state.searchName}</div>
                    <ul className="select_box">
                        <li data-value={searchType.region} onClick={this.handleSearchMenu.bind(this)}>{searchName.region}</li>
                        <li data-value={searchType.subway} onClick={this.handleSearchMenu.bind(this)}>{searchName.subway}</li>
                    </ul>
                </div>
                <div className={`search_area ${this.state.isSearch ? "open" : ""}`}>
                    <div className="input_text">
                        <input type="text" autoComplete="off" onChange={this.handleChangeKeyword.bind(this)} onFocus={this.handleChangeKeyword.bind(this)} value={this.state.targetValue} placeholder={this.state.targetPlaceholder} />
                    </div>
                    {this.state.isSearch && <div className={`ly_search_autocomplete ${this.state.isSearchEmpty ? "empty" : ""}`}>
                        {this.state.region && this.renderRegionAutoComplete()}
                        {this.state.subway && this.renderSubwayAutoComplete()}
                        {this.state.isSearchEmpty && <p className="text">검색결과가 없습니다.</p>}
                    </div>}
                    <button type="submit" className="btn_search" onClick={this.handleInputSearch.bind(this)}><span className="blind">검색</span></button>
                </div>
            </div>
            <div className="search_result">
                <div className="inner">
                    {this.renderSearchTab()}
                    {this.renderSearchContent()}
                </div>
            </div>
        </form>;
    }

    render(): JSX.Element {
        return <div className="product_search">
            <div className="top_information">
                <div className="inner">
                    <h2 className="h2_title">가격 안내</h2>
                    <p className="h2_dsc">행정구역 · 지하철역 우선 노출 상품은 지역에 따라 금이 다르게 책정되어 있습니다.<br />원하는 지역의 상품 가격을 확인해보세요.</p>
                </div>
            </div>
            {this.renderSearchResult()}
            <div className="faq_area inner">
                <h3 className="h3_title">중개사님이 <span className="point">자주 묻는 질문</span></h3>
                <WebSupportFaq webAgentJoinRenderType={WebAgentJoinRenderType.Search} />
            </div>
            {this.state.isSearch && <div className="dimmed" onClick={this.handleAutoCompleteClose.bind(this)}></div>}
            {this.state.showCustomerPopup && <AgentCustomerPopup onClose={this.handleCloseCustomerPopup.bind(this)} />}
        </div>;
    }
}